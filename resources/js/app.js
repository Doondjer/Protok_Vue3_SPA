require('./bootstrap');

import { createApp, h } from 'vue';
import { createInertiaApp, Link, Head } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import Layout from "@/Shared/Layout";

createInertiaApp({
  resolve: async name => { 

    let page =  (await import(`./Pages/${name}`)).default;

    if(page.layout === undefined) {
      page.layout = Layout;
    }
    

    return page;
  },
  
  title: title => title ? `${title} - ${process.env.MIX_APP_NAME}` : `${process.env.MIX_APP_NAME}`,
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .component('Link', Link)
      .component('Head', Head)
      .mount(el)
  },
});

InertiaProgress.init({
	color: "#00a651",
	showSpinner: true,
});