<template>
    <div class="container-xl">
        <div class="row row-cards">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title" v-text="`${rodent.data.name} - Tabela Protoka`"></h3>
                    </div>
                    <div class="card-body border-bottom py-3 container">
                        <div class="d-flex">
                            <div class="text-muted">
                                Prikaži
                                <div class="mx-2 d-inline-block">
                                    <input type="text" class="form-control" v-model="form.per_page" name="per_page" size="3" aria-label="Items per page" @keyup.enter="fetch" @blur="fetch">
                                </div>
                                recorda
                            </div>
                            <div class="ms-auto text-muted">
                                <a href="#" @click.prevent="toggleExport" class="btn btn-outline-danger">
                                    <svg class="icon icon-tabler icon-tabler-file-export" fill="none" height="24"
                                         stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"
                                         width="24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
                                        <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                                        <path d="M11.5 21h-4.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v5m-5 6h7m-3 -3l3 3l-3 3"></path>
                                    </svg>
                                    Export
                                </a>
                            </div>
                        </div>
                    </div>


                    <date-picker v-if="show_export" :station="rodent.data" ></date-picker>


                    <div class="table-responsive">
                        <table class="table card-table table-vcenter text-nowrap datatable">
                            <thead>
                            <tr>
                                <th class="w-1"></th>
                                <th>ID</th>
                                <th>Naziv Bagera</th>
                                <th>Protok 15-min [m3/h]</th>
                                <th>Smena</th>
                                <th class="w-1">Datum / Vreme</th>
                            </tr>
                            </thead>
                            <tbody v-if="flows.length">
                            <tr v-for="(flow, index) in flows" :key="index">
                                <td>
                                    <input aria-label="Odaberi Zapis" class="form-check-input m-0 align-middle" type="checkbox">
                                </td>
                                <td v-text="flow.id"></td>
                                <td class="td-truncate">
                                    <div class="text-truncate" v-text="rodent.data.name"></div>
                                </td>
                                <td v-text="flow.flow"></td>
                                <td v-text="flow.shift"></td>
                                <td v-text="flow.date_time"></td>
                            </tr>
                            </tbody>
                            <tbody v-else>
                            <tr>
                                <td colspan="5">

                                    <div v-if="loading" class="empty">
                                        <div class="spinner-border icon-lg text-green"></div>
                                    </div>
                                    <div v-else class="empty">
                                        <div class="empty-icon">
                                            <svg class="icon" fill="none" height="24" stroke="currentColor" stroke-linecap="round"
                                                 stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
                                                <circle cx="12" cy="12" r="9"></circle>
                                                <line x1="9" x2="9.01" y1="10" y2="10"></line>
                                                <line x1="15" x2="15.01" y1="10" y2="10"></line>
                                                <path d="M9.5 15.25a3.5 3.5 0 0 1 5 0"></path>
                                            </svg>
                                        </div>
                                        <p class="empty-title">Ništa nije pronađeno!</p>
                                        <p class="empty-subtitle text-muted">
                                            Pokušaj sa drugim bagerom ili kontaktiraj administratore.
                                        </p>
                                    </div>

                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <paginator :dataSet="dataSet"
                               :form="form"
                               class="uk-margin-small uk-margin-small-top"
                               @page_changed="fetch"
                    >
                    </paginator>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import Swal from 'sweetalert2'
import paginator from './Paginator';
import datePicker from './DatePicker';

let props = defineProps({
    rodent: Object
});

let dataSet = reactive({});
let flows = reactive([]);
let form = reactive({
                rodent: props.rodent.data.id,
                per_page: 10,
                page:1
            });
let show_export = ref(false);
let loading = ref(true);

    let fetch = () =>  {
        axios.get(`/table/station`, { params:form })
            
                .then(refresh)
                .catch(e => {
                    console.dir(e);
                    Swal.fire('','Ouups, došlo je do neke greške!', 'error');
                });
        };
        let refresh = ({data}) => {

            loading.value = false;

            Object.assign(dataSet, data.data);
            Object.assign(form.per_page, dataSet.per_page);
            Object.assign(flows, data.data.data);

        };

        let toggleExport = () => {
           show_export.value = ! show_export.value;
    };

    onMounted(() => {
       fetch();
    })

</script>
