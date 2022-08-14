<template>
    <div ref="root" class="fullscreen-wrapper" :class="{ 'page page-center': fullscreen }">
        <div class="container-xl panel-header">
            <div class="page-header d-print-none">
                <div class="row g-2 align-items-center">
                    <div class="col">
                        <h2 class="page-title">Kapaciteti Bagera - Panel</h2>
                    </div>
                    <!-- Page title actions -->
                    <div class="col-12 col-md-auto ms-auto d-print-none">
                        <div class="btn-list btn-group">
                            <button class="btn btn-outline-danger disabled" type="button" v-if=" ! isModbus && ! show_modbus">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon text-danger" aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36">
                                    <circle cx="18" cy="29.54" r="3" fill="currentColor" class="clr-i-solid clr-i-solid-path-1"/>
                                    <path fill="currentColor" d="m29.18 17.71l.11-.17a1.51 1.51 0 0 0-.47-2.1A20.57 20.57 0 0 0 18 12.37c-.56 0-1.11 0-1.65.07l3.21 3.21a17.41 17.41 0 0 1 7.6 2.52a1.49 1.49 0 0 0 2.02-.46Z" class="clr-i-solid clr-i-solid-path-2"/>
                                    <path fill="currentColor" d="M32.76 9.38a27.9 27.9 0 0 0-22.58-3.11l2.63 2.63a24.68 24.68 0 0 1 18.29 3.22a1.49 1.49 0 0 0 2-.46l.11-.17a1.51 1.51 0 0 0-.45-2.11Z" class="clr-i-solid clr-i-solid-path-3"/>
                                    <path fill="currentColor" d="m3 4.75l3.1 3.1a27.28 27.28 0 0 0-2.92 1.57a1.51 1.51 0 0 0-.48 2.11l.11.17a1.49 1.49 0 0 0 2 .46a24.69 24.69 0 0 1 3.67-1.9l3.14 3.14a20.63 20.63 0 0 0-4.53 2.09a1.51 1.51 0 0 0-.46 2.1l.11.17a1.49 1.49 0 0 0 2 .46A17.46 17.46 0 0 1 14.25 16l3.6 3.6a13.39 13.39 0 0 0-6.79 1.93a1.5 1.5 0 0 0-.46 2.09l.1.16a1.52 1.52 0 0 0 2.06.44a10.2 10.2 0 0 1 9-.7L29 30.75l1.41-1.41l-26-26Z" class="clr-i-solid clr-i-solid-path-4"/>
                                    <path fill="none" d="M0 0h36v36H0z"/>
                                </svg>
                                Modbus Greška
                            </button>
                            <button v-if="fullscreen && showExpand" type="button" class="btn expand-screen" @click="toggle">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrows-minimize" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <polyline points="5 9 9 9 9 5"></polyline>
                                    <line x1="3" y1="3" x2="9" y2="9"></line>
                                    <polyline points="5 15 9 15 9 19"></polyline>
                                    <line x1="3" y1="21" x2="9" y2="15"></line>
                                    <polyline points="19 9 15 9 15 5"></polyline>
                                    <line x1="15" y1="9" x2="21" y2="3"></line>
                                    <polyline points="19 15 15 15 15 19"></polyline>
                                    <line x1="15" y1="15" x2="21" y2="21"></line>
                                </svg>
                                Skupi prikaz
                            </button>
                            <button v-if=" ! fullscreen && showExpand" type="button" class="btn expand-screen" @click="toggle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-arrows-maximize">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <polyline points="16 4 20 4 20 8"></polyline>
                                    <line x1="14" y1="10" x2="20" y2="4"></line>
                                    <polyline points="8 20 4 20 4 16"></polyline>
                                    <line x1="4" y1="20" x2="10" y2="14"></line>
                                    <polyline points="16 20 20 20 20 16"></polyline>
                                    <line x1="14" y1="14" x2="20" y2="20"></line>
                                    <polyline points="8 4 4 4 4 8"></polyline>
                                    <line x1="4" y1="4" x2="10" y2="10"></line>
                                </svg>
                                Proširi prikaz
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="page-body">
            <div class="container-xxl">
                <span class="row row-cards">
                     <panel-item
                        v-for="(resource, id) in rodents"
                        :key="id"
                        :update_chart="updateChart"
                        :resource="resource"
                        :current_flow="currentFlows[resource.data.id] ? currentFlows[resource.data.id] : 0"
                        @show_graph="showExtendedGraph"
                        @show_details="showDetails"
                        :statuses="statuses[resource.data.id] ? statuses[resource.data.id] : [false,false,false,false,false,false,false,false]"
                        :loading="next_rodent === resource.data.id"
                    >
                    </panel-item>
                </span>
            </div>
        </div>
        <large-chart v-if="show_graph" :rodent="rodents[show_graph]" @close_graph="show_graph = null"></large-chart>
        <rodent-details v-if="show_details" :rodent="rodents[show_details].data" @close_details="show_details = null"></rodent-details> 
        <Transition name="bounce">
            <modbus-status v-if=" ! isModbus && show_modbus" @close_modbus="show_modbus = null"></modbus-status>
        </Transition>
    </div>
</template>

<script setup>

	import ModbusStatus from "@/Shared/ModbusStatus";
	import PanelItem from "@/Shared/PanelItem";
    import RodentDetails from "@/Shared/RodentDetails";
    import LargeChart from "@/Shared/ExtendedChart";
	import { provide, ref, reactive, computed, onMounted } from "vue";
  	import { api as fullscreen } from 'vue-fullscreen';

	let props = defineProps({
					rodents: Object,
					panelFlows: Object,
					graphData: Object,
					currentFlows: Object,
					statuses: Object,
				});

	let show_graph = ref(null);
    let show_details = ref(null);
    const root = ref();
    let isModbus = true;
    let show_modbus = ref(true);
    let next_rodent = ref(null);

    let showExtendedGraph = ({station}) => {

       show_graph.value = station;
    };

    let showDetails = ({station}) => {
       show_details.value = station;
    };

    let showExpand = computed(() => {
    	return screen.height >= 864;
    })

    let updateChart = reactive({
    	data: {
                graphData: props.graphData,
                panelFlows: props.panelFlows,
            }
    });

    const state = reactive({
        fullscreen: false,
        teleport: true,
      })
    
 	async function toggle () {
        await fullscreen.toggle(root.value.querySelector('.fullscreen-wrapper'), {
          teleport: state.teleport,
          callback: (isFullscreen) => {
            // state.fullscreen = isFullscreen
          },
        })
        state.fullscreen = fullscreen.isFullscreen
      }

  	provide('update_chart', updateChart);

    onMounted(() => {
        Echo.channel('panel')
            .listen('NewFlow', (data) => {

                Object.assign(updateChart, data);
            });

        Echo.channel('current_data')
            .listen('NewCurrentFlow', ({data}) => {

                if(data.hasOwnProperty('maintenance')) {
                    location.reload();
                }

                if(data.hasOwnProperty('status')) {
                    Object.assign(props.currentFlows, { [data.rodent_id]: data.current_flow });
                    next_rodent.value = data.next_rodent_id;

                    if (data.status){
                        Object.assign(props.statuses, { [data.rodent_id]: data.status.split('').map(status => {
                            return status === '1';
                        }) });
                    }

                    isModbus = true;
                    show_modbus = true;
                } else {
                    isModbus = false;
                }
            });

        Echo.join('online');

        // Refresh page every 24h
        setInterval(function(){
            window.location.reload();
        },86400000);
    })

</script>


<style>
	.bounce-enter-active {
	    animation: bounce-in 0.5s;
	}
	.bounce-leave-active {
	    animation: bounce-in 0.5s reverse;
	}
	@keyframes bounce-in {
	    0% {
	        transform: scale(0);
	    }
	    50% {
	        transform: scale(1.25);
	    }
	    100% {
	        transform: scale(1);
	    }
	}
</style>