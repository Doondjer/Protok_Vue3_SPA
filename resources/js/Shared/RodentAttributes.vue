<template>
    <div :class="{'is-invalid': form.errors.length}">
        <div class="input-group mb-3">
            <div class="col-4">
                <input type="text" :disabled=" ! rodent_type" class="form-control" :class="{'is-invalid': form.errors.name}" name="name" placeholder="Naziv..." v-model="form.name">
                <div class="invalid-feedback" v-if="form.errors.name" v-text="form.errors.name"></div>
            </div>
            <div class="col-4">
                <input type="text" :disabled=" ! rodent_type" class="form-control" :class="{'is-invalid': form.errors.value}" name="value" placeholder="Veličina..." v-model="form.value">
                <div class="invalid-feedback" v-if="form.errors.value" v-text="form.errors.value"></div>
            </div>
            <div class="col-3">
                <input type="text" :disabled=" ! rodent_type" class="form-control" :class="{'is-invalid': form.errors.unit}" name="unit" placeholder="Merna jedinica..." v-model="form.unit">
                <div class="invalid-feedback" v-if="form.errors.unit" v-text="form.errors.unit"></div>
            </div>
            <div class="col-1">
                <button :disabled="form.processing"  @click.prevent="submit" title="Dodaj Tehnički Podatak" class="btn btn-green w-100" type="button" aria-label="Button">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </button>    
            </div>

        </div>
        <p class="text-danger" v-if=" ! rodent_type">Morate prvo kreirati bager da bi ste dodavali tehničke detalje.</p>

        <div class="mb-3" v-for="(rodent_attribute,i) in rodent_attributes.data" :key="i">
            <div class="input-group">
                <input type="text" class="form-control disabled" disabled="disabled" :value="rodent_attribute.name">
                <input type="text" class="form-control disabled" disabled="disabled" :value="rodent_attribute.value">
                <input type="text" class="form-control disabled" disabled="disabled" :value="rodent_attribute.unit">
                <span class="input-group-text">
                    <a href="#" @click.prevent="remove(i)" title="Obriši Tehnički Podatak" class="text-danger" data-bs-toggle="tooltip" data-bs-original-title="Obriši Tehnički Podatak">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </a>
                </span>
            </div>
            <div class="invalid-feedback"></div>
        </div>
    </div>

</template>

<script setup>
    import { useForm } from "@inertiajs/inertia-vue3";
    import { reactive } from "vue";

    let props = defineProps({
        rodent_attributes: {
            type: Object,
            required: false,
        },
        rodent_type: {
            type: String,
            required: false
        }
    });

    let form = useForm({
      name: null,
      value: null,
      unit: null,
    });

    let deleteForm = useForm();

    let remove = (index) => {
            deleteForm.delete(`/admin/rodent-type/${props.rodent_type}/attribute/${props.rodent_attributes.data[index].id}`);
        };

    let submit = () => {
            form.post(`/admin/rodent-type/${props.rodent_type}/attribute`, {
              preserveScroll: true,
              onSuccess: () => form.reset(),
            });
        };
</script>
