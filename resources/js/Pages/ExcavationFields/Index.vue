<template>

  <index-layout :items="fields"
                :form="form"
                title="Radne Jedinice"
                createLink="/admin/excavation-field/create"
                disableTrash
  >

      <template #header>
        <th class="w-100">Naziv</th>
        <th class="w-auto">Slug</th>
        <th class="w-auto">Akcija</th>
      </template>

      <tr v-if="fields.total > 0" v-for="field in fields.data" :key="field.id" :class="{'bg-red-lt': field.is_trashed }">
          <td><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Odaberi Korisnika"></td>
          <td><span class="text-muted">{{ field.id }}</span></td>
          <td>
            <div class="flex-nowrap">
              {{ field.name }}
            </div>
          </td>
          <td>{{ field.slug }}</td>
          <td>
              <div class="btn-list flex-nowrap">
                <div v-if="! field.is_trashed">
                  <Link :href="`/admin/excavation-field/${field.slug}/edit`" class="btn btn-white" as="button">Izmeni</Link>
                  <Link :href="`/admin/excavation-field/${field.slug}`" method="delete" class="btn btn-white" as="button">Obrisi</Link>
                </div>
                <div v-else>
                  <Link :href="`/admin/excavation-field/${field.slug}/undelete`" method="patch" class="btn btn-white" as="button">Vrati</Link>                                       
                </div>
              </div>
          </td>
      </tr>
  </index-layout>
  
</template>

<script>
import pickBy from 'lodash/pickBy'
import throttle from 'lodash/throttle'
import mapValues from 'lodash/mapValues'
import IndexLayout from "@/Shared/IndexLayout";

export default {
  components: {
   IndexLayout
  },
  props: {
    filters: Object,
    fields: Object,
  },
  data() {
    return {
      form: {
        search: this.filters.search,
        per_page: this.filters.per_page,
        trashed: this.filters.trashed,
      },
    }
  },
  watch: {
    form: {
      deep: true,
      handler: throttle(function () {
        this.$inertia.get('/admin/excavation-field', pickBy(this.form), { preserveState: true })
      }, 150),
    },
  },
  methods: {
    reset() {
      this.form = mapValues(this.form, () => null)
    },
  },
}
</script>
