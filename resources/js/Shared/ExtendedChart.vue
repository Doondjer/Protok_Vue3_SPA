<template>
    <div class="modal modal-blur fade show" style="display: block;" aria-modal="true">
        <div class="modal-dialog modal-fullscreen modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header left-close">
                    <h5 class="modal-title" v-text="rodent.name"></h5>
                    <button type="button" @click="$emit('close_graph')" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="d-flex">
                        <div class="ms-auto">
                            <select class="form-select" @change="updateData" v-model="selection">
                                <option class="dropdown-item" :value="1">Danas</option>
                                <option class="dropdown-item" :value="3">Poslednja 3 dana</option>
                                <option class="dropdown-item" :value="7">Poslednjih 7 dana</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-8" id="chart">
                            <div v-if="loading" class="empty w-100 chart-wrapper">
                                <div class="spinner-border icon-lg text-green"></div>
                            </div>
                            <div v-else id="chart-timeline">
                                <apexchart type="area" height="350" ref="chart" :options="chartOptions" :series="series"></apexchart>
                            </div>
                        </div>
                        <div class="col-md-4" id="bar_chart">
                            <div v-if="loading" class="empty w-100 chart-wrapper">
                                <div class="spinner-border icon-lg text-green"></div>
                            </div>
                            <div v-else id="bar-chart">
                                <apexchart type="bar" height="350" ref="bar_chart" :options="barChartOptions" :series="barSeries"></apexchart>
                            </div>
                        </div>
                    </div>


                    <FlowTable :rodent="rodent"/>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import apexchart from "vue3-apexcharts";
    import Swal from 'sweetalert2'
    import FlowTable from "./FlowTable";
    import { ref, reactive, onMounted, nextTick } from "vue";
    import { useForm } from '@inertiajs/inertia-vue3';

const chart = ref(null);

    let props = defineProps({
        rodent: Object,
    })

    let loading = ref(true);

    let range = reactive({
        start: new Date(new Date().setDate(new Date().getDate()-7)),
        end: new Date(),
    });
    let modelConfig = reactive({
        type: 'string',// Uses 'iso' if missing
        mode: "date",
    });
    let series = reactive([{
        data: []
    }]);
    let barSeries = reactive([{
        data: []
    }]);
    let barChartOptions = reactive({
        chart: {
            type: 'bar',
            //   height: 100
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded',
                borderRadius: 5,
                dataLabels: {
                    position: 'top', // bottom/center/top,
                }
            },
        },
        dataLabels: {
            enabled: true,
            enabledOnSeries: [3],
            offsetY: -20, // play with this value
            style: {
                fontSize: '12px',
                colors: ["#304758"]
            },
            background: {
                enabled: true,
                foreColor: '#fff',
                padding: 6,
                borderRadius: 2,
                borderWidth: 1,
                opacity: 0.3,
                shadow: true,
                dropShadow: {
                    enabled: true,
                    top: 1,
                    left: 1,
                    blur: 1,
                    color: '#fff',
                    opacity: 0.45
                }
            },
            formatter: function (value) {
                return `${value.toFixed(1)} m3`;
            }
        },
        stroke: {
            show: true,
          //  width: 2,
              width: [2, 2,2,3],
            curve: 'smooth',
            colors: ['transparent','transparent','transparent','#cb2027']
        },
        yaxis: {
            title: {
                text: 'Iskopano u m3',
            },
            labels: {
                formatter: function (value) {
                    return value.toFixed(0);
                }
            }
        },
        fill: {
            opacity: 1
        },
        tooltip: {

            shared: true,
            intersect: false,
            y: {
                formatter: function (val) {
                    return val.toFixed(1) + " m3";
                },
            }
        },
        title: {
            text: '',//props.graph_title,
        },
        legend: {
            show: true,
        },
    });
    let chartOptions = reactive({
        chart: {
            id: 'area-datetime',
            type: 'area',
            height: 350,
            zoom: {
                autoScaleYaxis: true
            }
        },
        annotations: {
              xaxis: [{
                x: new Date(new Date().setDate(new Date().getDate()-7)).getTime(),
                offsetX: 10,
                label: {
                    text: 'Početak Merenja',
                    offsetX: 30,
                    style: {
                        color: "#fff",
                        background: '#ffa600'
                    }
                }
              }, {
                x: new Date().getTime(),
                label: {
                    text: 'Kraj Merenja',
                    borderColor: '#999',
                    style: {
                        color: "#fff",
                        background: '#cb2027'
                    }
                },
              }],
          },
        dataLabels: {
            enabled: false
        },
        title: {
            text: 'Protok Bagera u m3/h',
            align: 'left',
            style: {
                color: 'rgba(255, 255, 255, 0.7)'
            },
        },
        markers: {
            size: 3,
            style: 'hollow',
        },
        xaxis: {
            type: 'datetime',
            min: new Date(new Date().setDate(new Date().getDate()-1)).getTime(),
            max: new Date().getTime(),
            tickAmount: 6,
            labels: {
                datetimeUTC: false,
            }
        },
        tooltip: {
            x: {
                format: 'dd-MMM-yyyy H:m',
            },
            y: {
                formatter: function (val) {
                    return val + " m3";
                },
            }
        },
        fill: {
            opacity: .16,
            type: 'solid'
        },
        stroke: {
            width: 2,
            lineCap: "round",
            curve: "smooth",
        },
    });
    let selection = ref(7);
    let days_allowed = [1,3,7];

    let form = reactive({
        station: props.rodent.data.id,
        days: selection
        });


    let fetch = (station, days) => {
        axios.get(`/chart/station/${station}`, form)
        .then(refresh)
        .catch(e => {
            console.dir(e);
            Swal.fire('','Ouups, došlo je do neke greške!', 'error');
        })
            
    };

    onMounted(() => {
        fetch(props.rodent.data.id);
    });

    let refresh = ({data}) => {

        loading.value = false;

        Object.assign(series[0].data, data.data);

        Object.assign(barSeries, data.series);
    };

    let updateData = () => {
        let min = new Date(new Date().setDate(new Date().getDate()-1)).getTime();

        if(days_allowed.includes(selection)) {
            min = new Date(new Date().setDate(new Date().getDate()-selection)).getTime();
        }

        chart.value.zoomX(min, new Date().getTime());
    };


</script>
