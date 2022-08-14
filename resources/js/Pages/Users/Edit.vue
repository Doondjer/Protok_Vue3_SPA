<template>
  <create-edit-layout 
                      title="Izmeni Korisnika" 
                      cardTitle="Izmeni Postojećeg Korisnika" 
                      :form="form"
                      :breadcumbs="{
                        Korisnici: '/admin/user'
                      }"
                      @submit-form="submit"
                      buttonText="Izmeni"
  >
      <text-input 
                  v-model="form.name" 
                  :error="form.errors.name" 
                  class="mb-3" 
                  label="Ime I Prezime"
                  placeholder="Unesite Puno Ime I Prezime Korisnika..."
                  hint="Puno Ime I Prezime koje će biti prikazano pri pregledu korisnika."
                  required
      />
     
      <text-input 
                  v-model="form.email" 
                  :error="form.errors.email" 
                  type="email"
                  class="mb-3" 
                  label="Email"
                  placeholder="Unesite Email Korisnika..."
                  hint="Email koji će se koristiti za komunikaciju ili za prijavu na aplikaciju."
                  required
      />
     
      <text-input 
                  v-model="form.password" 
                  :error="form.errors.password" 
                  type="password"
                  class="mb-3" 
                  label="Lozinka"
                  placeholder="Unesite Lozinku Korisnika..."
                  hint="Lozinka koja će se koristiti za prijavu na aplikaciju."
      />
   </create-edit-layout>
</template>

<script setup>
  import CreateEditLayout from "@/Shared/CreateEditLayout";
  import TextInput from '@/Shared/TextGroupInput'
  import { useForm } from "@inertiajs/inertia-vue3";

  let props = defineProps({
    user: Object
  })

  let form = useForm({
    name: props.user.data.name,
    email: props.user.data.email,
    password: '',
  })

  let submit = () => {
    form.patch(`/user/${props.user.data.id}`);
  }

</script>