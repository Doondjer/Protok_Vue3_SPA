<template>
  <create-edit-layout 
                      title="Izmeni Bager" 
                      cardTitle="Izmeni Postojeći Bager" 
                      :form="form"
                      :breadcumbs="{
                        'Bageri': '/admin/rodent'
                      }"
                      @submit-form="submit"
  >
      <text-input 
                  v-model="form.rodent_id" 
                  :error="form.errors.rodent_id" 
                  class="mb-3" 
                  label="Id Bagera"
                  placeholder="Unesite Id Bagera..."
                  hint="Id Bagera pod kojim se zapisuje u SQL Server Bazi"
                  required
      />

      <text-input 
                  v-model="form.name" 
                  :error="form.errors.name" 
                  class="mb-3" 
                  label="Naziv Bagera"
                  placeholder="Unesite Naziv Bagera..."
                  hint=""
                  required
      />

      <selectbox-input 
                  v-model="form.excavation_field_id" 
                  :error="form.errors.excavation_field_id" 
                  class="mb-3" 
                  label="Radna Jedinica"
                  hint="Odaberite Površinski Kop na kojem se bager nalazi"
                  required
      >
        <option :value="null">Odaberite Polje...</option>
        <option :value="id" v-for="(field, id) in excavationFields">{{ field }}</option>
        
      </selectbox-input>

      <selectbox-input 
                  v-model="form.rodent_type_id" 
                  :error="form.errors.rodent_type_id" 
                  class="mb-3" 
                  label="Tip Bagera"
                  hint="Odaberite Tip Bagera"
                  required
      >
        <option :value="null">Odaberite Tip Bagera...</option>
        <option :value="id" v-for="(type, id) in rodentTypes">{{ type }}</option>
        
      </selectbox-input>
     
   </create-edit-layout>
</template>

<script setup>
  import CreateEditLayout from "@/Shared/CreateEditLayout";
  import TextInput from '@/Shared/TextGroupInput';
  import SelectboxInput from '@/Shared/SelectboxInput';
  import { useForm } from "@inertiajs/inertia-vue3";

  let props = defineProps({
    rodent: Object,
    excavationFields: Object,
    rodentTypes: Object,
  });

  let form = useForm({
    rodent_id: props.rodent.data.rodent_id,
    name: props.rodent.data.name,
    excavation_field_id: props.rodent.data.excavation_field_id,
    rodent_type_id: props.rodent.data.rodent_type_id
  })

  let submit = () => {
    form.patch(`/admin/rodent/${props.rodent.data.slug}`);
  }

</script>