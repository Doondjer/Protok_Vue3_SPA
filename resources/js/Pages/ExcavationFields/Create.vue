<template>
  <create-edit-layout 
                      title="Kreiraj Radnu Jedinicu" 
                      cardTitle="Kreiraj Novu Radnu Jedinicu" 
                      :form="form"
                      :breadcumbs="{
                        'Radne Jedinice': '/admin/excavation-field'
                      }"
                      @submit-form="submit"
  >
      <text-input 
                  v-model="form.name" 
                  :error="form.errors.name" 
                  class="mb-3" 
                  label="Naziv Radne Jedinice"
                  placeholder="Unesite Naziv Radne Jedinice..."
                  hint="e.g. Polje B"
                  required
      />
     
   </create-edit-layout>
</template>

<script setup>
  import CreateEditLayout from "@/Shared/CreateEditLayout";
  import TextInput from '@/Shared/TextGroupInput'
  import { useForm } from "@inertiajs/inertia-vue3";

  let form = useForm({
    name: '',
  })

  let submit = () => {
    form.post('/admin/excavation-field');
  }

</script>