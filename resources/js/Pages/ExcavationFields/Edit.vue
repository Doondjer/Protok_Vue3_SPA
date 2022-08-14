<template>
  <create-edit-layout 
                      title="Izmeni Radnu Jedinicu" 
                      cardTitle="Izmeni Postojeću Radnu Jedinicu" 
                      :form="form"
                      :breadcumbs="{
                        'Radne Jedinice': '/admin/excavation-field'
                      }"
                      @submit-form="submit"
                      buttonText="Izmeni"
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

  let props = defineProps({
    excavationField: Object
  })

  let form = useForm({
    name: props.excavationField.data.name,
  })

  let submit = () => {
    form.patch(`/admin/excavation-field/${props.excavationField.data.slug}`);
  }

</script>