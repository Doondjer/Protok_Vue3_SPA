<template>
  <create-edit-layout 
                      title="Kreiraj Modele Bagera" 
                      cardTitle="Kreiraj Nov Model Bagera" 
                      :form="form"
                      :breadcumbs="{
                        'Modeli Bagera': '/admin/rodent-type'
                      }"
                      @submit-form="submit"
  >
      <text-input 
                  v-model="form.name" 
                  :error="form.errors.name" 
                  class="mb-3" 
                  label="Naziv Modela Bagera"
                  placeholder="Unesite Naziv Modela Bagera..."
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
    form.post('/admin/rodent-type');
  }

</script>