<template>
<div class="col-md-6">
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">{{ title }}</h3>
        </div>
        <div class="card-body">
            <form @submit.prevent="submit">
                <div class="form-group mb-3" v-for="(field, name) in formConfig" :key="name">

               
                         <text-input 
                                v-model="form[name]" 
                                :error="form.errors[name]"
                                :type="field.type"
                                class="mb-3" 
                                :label="name"
                                :placeholder="`${name} ...`"
                                :hint="translation[name]"
                                :required="field.required"
                   /> 
                </div>
                <div class="form-footer">
                     <loading-button class="btn-green w-100" :loading="form.processing">Izmeni</loading-button> 
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script setup>
import TextInput from "./TextGroupInput";
import LoadingButton from "./LoadingButton";
import { useForm } from "@inertiajs/inertia-vue3";


let props = defineProps({
	values: Object,
	formConfig: Object,
	translation: Object,
    title: String,
    section: String,
})

Object.assign(props.values, { section: props.section});


let form = useForm(props.values);

let submit = () => {
    form.patch('/admin/configuration');
}

</script>