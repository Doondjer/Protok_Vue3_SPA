<template>
	<Head title="Login" />

	<div class="page page-center">
    	<div class="container-tight py-4">
	        <form class="card-md" action="/login" method="POST" autocomplete="off" @submit.prevent="submit">

	            <div class="text-center mb-4">
	    			<img src="/images/kolubara.png" alt="Laravel" class="mb-4" width="72" height="72">
	                <h1 class="h3 mb-3 font-weight-normal">Merenje Protoka</h1>
	                <p>Ova aplikacija je razvijena od strane 4Bto Sistema Polja "B".</p>
	            </div>
	                <div class="mb-3">

	                	<text-input v-model="form.email" :error="form.errors.email" class="form-floating mb-3" label="Email adresa" type="email" autofocus autocapitalize="off" />

	                	<text-input v-model="form.password" :error="form.errors.password" class="form-floating mb-3" label="Password" type="password" autofocus autocapitalize="off" />

	                </div>
	                <div class="mb-2">
	                    <label class="form-check" for="remember">
	                        <input id="remember" type="checkbox" name="remember" v-model="form.remember" class="form-check-input">
	                        <span class="form-check-label">Zapamti me na ovom uređaju</span>
	                    </label>
	                </div>
	                <div class="form-footer">
	                    <loading-button :loading="form.processing" class="btn-lg btn-primary w-100" type="submit">Login</loading-button>
 					</div>
	        </form>
	        <div class="text-center text-muted mt-3">
	            Još nemaš nalog? <a href="tel:0117851801" tabindex="-1">Javi se na 1801</a>
	        </div>
	    </div>	
	</div>

</template>

<script>
	export default {
	layout: null
}
</script>


<script setup>

	import { useForm } from "@inertiajs/inertia-vue3";
	import TextInput from '@/Shared/TextInput';
	import LoadingButton from '@/Shared/LoadingButton';

	let form = useForm({
		email: '',
		password: '',
		remember: true,
	})


	let submit = () => {
		form.post('/login');
	}
</script>

<style>
    body {
        background-color: rgb(233, 233, 233);
    }
</style>