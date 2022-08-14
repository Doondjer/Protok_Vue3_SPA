<template>
  <div class="container-xl my-4">
        <div class="page-header d-print-none">
            <div class="row g-2 align-items-center">
                <div class="col">
                    <h2 class="page-title">
                        {{ title }} - Lista
                    </h2>
                </div>
                <div class="col-12 col-md-auto ms-auto d-print-none">
                    <div class="btn-list">
                        <Link :href="createLink" class="btn btn-green d-none d-sm-inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                            Kreiraj Novo
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-xl">
          <div class="row row-cards">
              <div class="col-12">
                  <div class="card">
                      <div class="card-header">
                          <h3 class="card-title">{{ title }}</h3>
                      </div>
                      <div class="card-body border-bottom py-3 container">
                          <form method="GET" class="row">
                              <select v-if="! disableTrash" v-model="form.trashed" class="form-select mb-2" name="trashed">
                                  <option :value="null">Bez Obrisanih Stavki</option>
                                  <option value="with">Sa Obrisanim Stavkama</option>
                                  <option value="only">Samo Obrisane Stavke</option>
                              </select>
                              <div class="text-muted col-auto my-1">
                                  Show
                                  <div class="mx-2 d-inline-block">
                                      <input type="text" class="form-control" v-model="form.per_page" name="per_page" size="3" aria-label="Items per page">
                                  </div>
                                  entries
                              </div>
                              <div class="ms-auto text-muted col-md-auto d-flex flex-nowrap my-1">
                                  Search:
                                  <div class="ms-2 d-inline-block input-icon">
                                      <input type="text" class="form-control" name="search" aria-label="Search items" v-model="form.search">
                                  </div>
                                  <button type="submit" class="btn btn-danger btn-icon" aria-label="Button">
                                      <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="10" cy="10" r="7"></circle><line x1="21" y1="21" x2="15" y2="15"></line></svg>
                                  </button>
                              </div>
                          </form>
                      </div>
                      <div class="table-responsive">
                          <table class="table card-table table-vcenter text-nowrap datatable">
                              <thead>
                              <tr>
                                  <th class="w-1"><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Odaberi sve korisnike"></th>
                                  <th class="w-1">ID
                                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-sm text-dark icon-thick" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="6 15 12 9 18 15"></polyline></svg>
                                  </th>

                                  <slot name="header" />

                                  <th></th>
                              </tr>
                              </thead>
                              <tbody>
                                  <slot>
                                    <tr>
                                      <td colspan="8">


                                          <div class="empty">
                                              <div class="empty-icon">
                                                  <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="12" r="9"></circle><line x1="9" y1="10" x2="9.01" y2="10"></line><line x1="15" y1="10" x2="15.01" y2="10"></line><path d="M9.5 15.25a3.5 3.5 0 0 1 5 0"></path></svg>
                                              </div>
                                              <p class="empty-title">Nište nije pronađeno!</p>
                                              <p class="empty-subtitle text-muted">
                                                  Pokušaj da prilagodiš pretragu ili filtere za ono što tražiš.
                                              </p>
                                          </div>


                                      </td>
                                    </tr>         
                                  </slot>

                              </tbody>
                          </table>
                      </div>
                      <paginator :dataSet="items" :form="form" />
                  </div>
              </div>
          </div>
      </div>
</template>

<script setup>
  import Paginator from "@/Shared/Paginator";

  defineProps({
    items: Object,
    form: Object,
    title: String,
    createLink: String,
    disableTrash: { 
      type: Boolean, 
      default: false 
    }
  });
</script>
