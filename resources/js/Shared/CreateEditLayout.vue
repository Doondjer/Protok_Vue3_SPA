<template>
  <div class="container-xl my-4">
        <div class="page-header d-print-none">
            <div class="row g-2 align-items-center">
                <div class="col">
                    <h2 class="page-title">
                        {{ title }}
                    </h2>
                </div>
                <!-- Page title actions -->
                <div class="col-12 col-md-auto ms-auto d-print-none">
                  <ol class="breadcrumb" aria-label="breadcrumbs">
                    <li class="breadcrumb-item"><Link href="/">Početna</Link></li>
                    <li class="breadcrumb-item" v-for="(link, name) in breadcumbs"><Link :href="link">{{ name }}</Link></li> 
                    <li class="breadcrumb-item active" aria-current="page"><a href="#">{{ title }}</a></li>
                  </ol>
                </div>
            </div>
        </div>
    </div>
    <div class="container-xl">
      <div class="row row-cards">
          <div class="col-12">
                  
                  <slot name="cardcontent" />

                  <form class="card" @submit.prevent="$emit('submit-form')">

                      <div class="card-header">
                          <h4 class="card-title">{{ cardTitle}}</h4>
                      </div>
                      <div class="card-body" id="accordion_form">

                          
                      <slot />

                          <div class="form-footer d-grid gap-2">
                              <loading-button class="btn-green" :loading="form.processing">{{ buttonText }}</loading-button>
                          </div>
                      </div>
                  </form>
          </div>
      </div>
  </div>
</template>

<script setup>
  import LoadingButton from "@/Shared/LoadingButton";

  defineEmits(['submit-form']);

  defineProps({
    form: Object,
    breadcumbs: Object,
    title: String,
    cardTitle: String,
    buttonText: { type: String, default: 'Kreiraj' }
  });

</script>