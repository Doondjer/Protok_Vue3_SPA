<template>
    <div class="card">
        <div class="card-header">
            <h3 class="card-title" v-text="title"></h3>
        </div>
        <div class="card-body p-0">
            <apexchart type="donut" :options="chartOptions" :series="series"></apexchart>
        </div>
    </div>
</template>

<script setup>

    import apexchart from "vue3-apexcharts";
    import { reactive } from "vue";

    let props = defineProps({
        total: Number,
        used: Number,
        free: Number,
        display_total: Boolean,
        title: String,
    });

    let series = reactive([props.used, props.free]);

    let chartOptions = reactive({
                chart: {
                    type: 'donut',
                    height: 380,
                    width: 380,
                    sparkline: {
                        enabled: true
                    },
                },
                plotOptions: {
                    pie: {
                        donut: {
                            labels: {
                                show: true,
                                total: {
                                    showAlways: true,
                                    show: props.display_total,
                                    formatter: function (w) {
                                        return w.globals.seriesTotals.reduce((a, b) => a+b, 0) + ' GB'
                                    }
                                },
                            }
                        }
                    }
                },
                labels: ['Zauzeto', 'Slobodno'],
                colors: ['#cb2027', '#32cd32'],
                dataLabels: {
                    enabled: true,
                    dropShadow: {
                        blur: 3,
                        opacity: 0.8
                    },
                    formatter: function (val) {
                        return val.toFixed(1) + "%"
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            show: true,
                        }
                    }
                }],
                legend: {
                    show: true,
                    markers: {
                        width: 40,
                        height: 10,
                        radius: 2,
                    },
                    position: 'right',
                    offsetY: 0,
                    height: 230,
                },
            });

</script>