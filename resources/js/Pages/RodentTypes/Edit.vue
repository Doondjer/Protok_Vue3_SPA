<template>
  <create-edit-layout 
                      title="Izmeni Model Bagera" 
                      cardTitle="Izmeni Postojeći Model Bagera" 
                      :form="form"
                      :breadcumbs="{
                        'Modeli Bagera': '/admin/rodent-type'
                      }"
                      @submit-form="submit"
                      buttonText="Izmeni"
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

  <div class="container-xl my-4">
      <div class="card">
        <div class="card-footer">
          <div class="mb-3" v-if="rodentType.image">
            <label class="form-label">Postavljena Slika</label>
            <div class="row g-2">
                <div class="col-auto w-100">
                    <label class="form-imagecheck mb-2 w-100">
                        <span class="form-imagecheck-figure">
                          <img :src="`/images/rodents/${rodentType.image}`" :alt="`SLika Bagera ${rodentType.name}`" class="form-imagecheck-image">
                        </span>
                    </label>

                    <loading-button class="btn-warning w-100" @click.prevent="deleteImage" :loading="deleteForm.processing">Obriši</loading-button>
                </div>
            </div>
          </div>
          <div class="m-3" v-else>
            <upload-input
                        v-model="uploadForm.image" 
                        :error="uploadForm.errors.image"  
                        type="file" 
                        accept="image/*" 
                        label="Slika Bagera"
                        hint="Odaberite sliku Bagera koja će biti prikazane na stranici za detalje bagera."
                       />
      
            <progress v-if="uploadForm.progress" :value="uploadForm.progress.percentage" max="100">
              {{ uploadForm.progress.percentage }}%
            </progress>
            <loading-button :disabled=" ! uploadForm.image" :loading="uploadForm.processing" @click.prevent="upload" class="btn-success w-100">Pošalji sliku</loading-button>
          </div>
        </div>
    </div>

     <div class="card">
        <div class="card-footer">
            <div class="form-group mb-3 ">
                <label class="form-label">Tehnički podaci</label>
                <div>
                    <attributes :rodent_type="rodentType.slug" :rodent_attributes="rodentAttributes"></attributes>
                </div>
            </div>
        </div>
    </div> 
  </div>
</template>

<script setup>
  import CreateEditLayout from "@/Shared/CreateEditLayout";
  import TextInput from '@/Shared/TextGroupInput';
  import UploadInput from '@/Shared/UploadInput';
  import { useForm } from "@inertiajs/inertia-vue3";
  import LoadingButton from "@/Shared/LoadingButton";
  import attributes from "@/Shared/RodentAttributes";


  let props = defineProps({
    rodentAttributes: Object,
    rodentType: Object
  });

  let form = useForm({
    name: props.rodentType.name,
  });

  let uploadForm = useForm({
    image: null,
  });

  let deleteForm = useForm({});

  let submit = () => {
    form.patch(`/admin/rodent-type/${props.rodentType.slug}`);
  }

  let deleteImage = () => {
    deleteForm.delete(`/admin/rodent-type/${props.rodentType.slug}/image`);
  }

  let upload = () => {
    uploadForm.post(`/admin/rodent-type/${props.rodentType.slug}/image`, {
      forceFormData: true,
    });
  }
</script>