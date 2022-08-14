<template>

  <index-layout :items="rodents"
                :form="form"
                :title="'Bageri'"
                :createLink="'/admin/rodent/create'"
                disableTrash
  >

      <template #header>
        <th class="w-100">Naziv</th>
        <th class="w-100">Slug</th>
        <th class="w-100">Lokacija</th>
        <th class="w-auto">Akcija</th>
      </template>

      <tr v-if="rodents.total > 0" v-for="rodent in rodents.data" :key="rodent.id" :class="{'bg-red-lt': rodent.is_trashed }">
          <td><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Odaberi Korisnika"></td>
          <td><span class="text-muted">{{ rodent.id }}</span></td>      
          <td>
            <div class="flex-nowrap">
              {{ rodent.name }}
            </div>
          </td>    
          <td>{{ rodent.slug }}</td>
          <td>{{ rodent.location }}</td>
          <td>
              <div class="btn-list flex-nowrap">
                <div v-if="! rodent.is_trashed">
                  <Link :href="`/admin/rodent/${rodent.slug}/edit`" class="btn btn-white" as="button">Izmeni</Link>
                  <Link :href="`/admin/rodent/${rodent.slug}`" method="delete" class="btn btn-white" as="button">Obrisi</Link>
                </div>
                <div v-else>
                  <Link :href="`/admin/rodent/${rodent.slug}/undelete`" method="patch" class="btn btn-white" as="button">Vrati</Link>                                       
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
    rodents: Object,
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
        this.$inertia.get('/admin/rodent', pickBy(this.form), { preserveState: true })
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
