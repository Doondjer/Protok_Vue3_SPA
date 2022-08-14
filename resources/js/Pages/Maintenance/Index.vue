<template>
	<create-edit-layout
                      title="Održavanje Aplikacije" 
                      :cardTitle="is_maintenance ? 'Izađite Iz Moda Održavanja' : 'Postavite Aplikaciju U Mod Održavanja'" 
                      :form="form"
                      @submit-form="submit"
							>
						 <template #cardcontent v-if="is_maintenance">
								 <div class="card">
							        <div class="card-header">
							            <h4 class="card-title">Izađite Iz Moda Održavanja</h4>
							        </div>
							        <div class="card-body" id="accordion_form">

							            <Link class="btn btn-danger w-100" href="/admin/bring/up" aria-label="close">Izadji iz moda održavanja</Link>

							        </div>
							    </div> 
							</template> 

		                         <text-input 
                                    v-model="form.secret" 
                                    :error="form.errors.secret" 
                                    type="text"
                                    class="mb-3" 
                                    label="Tajni Kod"
                                    placeholder="Unesite Tajni Kod..."
                                    hint="Unesite tajni kod sa kojim je moguće pristupiti aplikaciji iako je modu održavanja ili ostavite prazno da ga sistem generiše."
                       /> 
	</create-edit-layout>


</template>

<script setup>
	import CreateEditLayout from "@/Shared/CreateEditLayout";
  	import TextInput from '@/Shared/TextGroupInput';
  import { useForm } from "@inertiajs/inertia-vue3";

	defineProps({
		is_maintenance: { type: Boolean, default: false}
	});

  let form = useForm({
    secret: '',
  })

  let submit = () => {
  	form.post('/admin/shut/down')
  }

</script>