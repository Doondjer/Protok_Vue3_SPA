<template>
  <div class="mt-3">
      <div class="container-xl">
          <div class="row row-cards">
              <div class="col-md-4">
                  <pie-card
                      v-if="graphData.loaded"
                      :total="graphData.totalRam"
                      :used="graphData.usedRam"
                      :free="graphData.freeRam"
                      :display_total="true"
                      :title="'Zauzetost RAM Memorije'"
                  ></pie-card>
              </div>
              <div class="col-md-4">
                  <pie-card
                      v-if="graphData.loaded"
                      :total="graphData.totalLoad"
                      :used="graphData.load"
                      :free="graphData.freeLoad"
                      :display_total="false"
                      :title="'CPU Opterećenje'"
                  ></pie-card>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup>
import pieCard from "@/Shared/PieCard";
import { reactive, onMounted, onBeforeUnmount } from "vue";
import { usePage } from '@inertiajs/inertia-vue3';

  //  let memory = ref(null);
    let graphData = reactive({
        totalRam: null,
        usedRam: null,
        freeRam: null,
        load: null,
        totalLoad: 100,
        freeLoad: null,
        loaded: false,
    });

    let fetchInterval = null;

onMounted(() => {
  console.log(usePage().props);
  //  usePage.props.flash.error = 'xxx';
    fetch();

    fetchInterval = setInterval(fetch, 10 * 1000);
});

onBeforeUnmount(() => {
    clearInterval(fetchInterval);
});

let fetch = () => {
    
    axios.get('/admin/server/usage')
        .then(({data}) => Object.assign(graphData, data))
        .catch(e => {
            console.dir(e);
            alert('Greska, proveri logove u konzoli!');
        });
}


</script>

