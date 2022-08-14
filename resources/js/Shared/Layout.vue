
<template>

	<Head>
	  <title></title>
	  <meta head-key="description" name="description" content="This is the default description" />
	</Head>

<div class="page theme-dark">


    <div class="wrapper">
        <div class="page-wrapper">

			<div class="fullscreen-hidden sticky-top">
			    <header class="navbar navbar-expand-md navbar-light sticky-top d-print-none">
			        <div class="container-xl">
			            
			            <button v-if="auth.user && auth.user.is.admin" class="navbar-toggler disabled" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu">
			                    <span class="navbar-toggler-icon"></span>
			            </button>
			       
			            <div v-else class="navbar-toggler disabled"></div>
			            
			            <h1 class="navbar-brand d-none-navbar-horizontal pe-0 pe-md-3">
			                <Link href="/">
			                    <img :src="logo.url"
			                         :alt="logo.name" class="navbar-brand-image" width="110"
			                         height="32">
			                </Link>
			            </h1>
			            <div class="navbar-nav flex-row order-md-last">
			                <div class="nav-item d-none d-md-flex me-3">

			                </div>
			                <div class="d-none d-md-flex"></div>

			                <div v-if="auth.user" class="nav-item dropdown">
			                    
			                        <a href="#" class="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown"
			                           aria-label="Open user menu">
			                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="32" height="32"
			                                 preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
			                                <path fill="none"
			                                      d="M8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0ZM20.5 12.5A4.5 4.5 0 1 1 16 8a4.5 4.5 0 0 1 4.5 4.5Z"/>
			                                <path fill="currentColor"
			                                      d="M26.749 24.93A13.99 13.99 0 1 0 2 16a13.899 13.899 0 0 0 3.251 8.93l-.02.017c.07.084.15.156.222.239c.09.103.187.2.28.3c.28.304.568.596.87.87c.092.084.187.162.28.242c.32.276.649.538.99.782c.044.03.084.069.128.1v-.012a13.901 13.901 0 0 0 16 0v.012c.044-.031.083-.07.128-.1c.34-.245.67-.506.99-.782c.093-.08.188-.159.28-.242c.302-.275.59-.566.87-.87c.093-.1.189-.197.28-.3c.071-.083.152-.155.222-.24ZM16 8a4.5 4.5 0 1 1-4.5 4.5A4.5 4.5 0 0 1 16 8ZM8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0Z"/>
			                            </svg>
			                            <div class="d-none d-xl-block ps-2">
			                                <div v-text="auth.user.name"></div>
			                                <div class="mt-1 small text-muted" v-text="auth.user.role"></div>
			                            </div>
			                        </a>
			                        <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow text-center">

			                            <Link :href="`/user/${auth.user.id}/edit`" class="btn-link p-1 d-block" title="Ovde možete izmeniti svoj profil i nalog">Moj Profil</Link>

			                            <div class="dropdown-divider"></div>
			                            <Link method="delete" as="button" href="/logout" class="btn-link">Odjavi se</Link>
			                        </div>
			                    
			                </div>
			            </div>
			        </div>
			    </header>
		    
			    <div class="navbar-expand-md" v-if="auth.user && auth.user.is.admin">
			        <div class="collapse navbar-collapse" id="navbar-menu">
			            <div class="navbar navbar-light">
			                <div class="container-xl">
			                	<top-menu></top-menu>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>

            <flash-messages />	
            
		    <div class="page-body">
		        <slot />
		    </div>
        </div>
    </div>
   
</div>

</template>

<script setup>
	import TopMenu from "./TopMenu";
	import FlashMessages from "./FlashMessages";

	defineProps({
		auth: Object
	});

	let logo = {
		url: process.env.MIX_APP_URL,
		name: process.env.MIX_APP_NAME,
	}
</script>