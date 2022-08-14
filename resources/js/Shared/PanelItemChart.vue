<template>
    <div class="bar-container">
        <vue-apex-charts ref="chart" :options="chartOptions" :series="series" :height="barHeight"></vue-apex-charts>
    </div>
</template>

<script setup>

    import VueApexCharts from "vue3-apexcharts";
    import { reactive, computed, watch, inject } from "vue";

    let props = defineProps({
        resource_id: Number,
        total_flow: Object,
    })

    const update_data = inject('update_chart');

    let defaultShifts = [{
            x: 'I Smena',
            y: 0
        }, {
            x: 'II Smena',
            y: 0
        }, {
            x: 'III Smena',
            y: 0
    }];

    let chartOptions = reactive({
        colors : [ '#00a651' ],
        chart: { type: 'bar' },
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 10,
                columnWidth: '65%',
                endingShape: 'rounded',
            },
        },
        dataLabels: {
            enabled: true,
            formatter: function (val) {
                return val + "m3";
            },
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + " m3";
                },
            }
        }
    });

    let barHeight = computed(() => {
            if(screen.height < 864) {
                return 'auto';
            }

            let i = 20;

            if(screen.height >= 1050) {
                i=30
            }

            return `${(screen.height / 5) - i}px`;
        });

    let getSeries = (graph_data) => {
        let data = [];

        if(graph_data && graph_data !== 'undefined') {
            //let that = this;
            graph_data.map(function (value, key){
                data.push({
                    x: defaultShifts[value.shift-1].x,
                    y: value.shift_flow ? value.shift_flow : 0
                })
            });
        } else {
            data = defaultShifts
        }

        return data;
    }

   let series = reactive([{
                name: "Iskopano",
                data: getSeries()
            }]);

 
    watch(update_data.data.graphData, (newValue, oldValue) => {
        
        if(newValue && newValue[props.resource_id]) {
            Object.assign(series[0].data, 
              getSeries(JSON.parse(JSON.stringify(newValue[props.resource_id]))));
        }        

    },{
        immediate: true,
        deep: true
    });

    watch(update_data.data.panelFlows, (newValue, oldValue) => {

        let total = 0;


        if (newValue && newValue[props.resource_id]){

           JSON.parse(JSON.stringify(newValue[props.resource_id])).map(flow =>{

                total += flow.total_flow;
            })


        }

        Object.assign(chartOptions, {title: {
                        text: `Iskopano od 07:00 : ${total.toFixed(1)} m3`,
                        style: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        },
                    }
            
        });

    },{
        immediate: true,
        deep: true
    });



</script>
