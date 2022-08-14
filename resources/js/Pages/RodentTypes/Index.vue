<template>

  <index-layout :items="types"
                :form="form"
                title="Modeli Bagera"
                createLink="/admin/rodent-type/create"
                disableTrash
  >

      <template #header>
        <th class="w-100">Naziv</th>
        <th class="w-100">Slug</th>
        <th class="w-auto">Akcija</th>
      </template>

      <tr v-if="types.total > 0" v-for="type in types.data" :key="type.id" :class="{'bg-red-lt': type.is_trashed }">
          <td><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Odaberi Korisnika"></td>
          <td><span class="text-muted">{{ type.id }}</span></td>      
          <td>
            <div class="flex-nowrap">
              {{ type.name }}
            </div>
          </td>    
          <td>{{ type.slug }}</td>
          <td>
              <div class="btn-list flex-nowrap">
                <div v-if="! type.is_trashed">
                  <Link :href="`/admin/rodent-type/${type.slug}/edit`" class="btn btn-white" as="button">Izmeni</Link>
                  <Link :href="`/admin/rodent-type/${type.slug}`" method="delete" class="btn btn-white" as="button">Obrisi</Link>
                </div>
                <div v-else>
                  <Link :href="`/admin/rodent-type/${type.slug}/undelete`" method="patch" class="btn btn-white" as="button">Vrati</Link>                                       
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
    types: Object,
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
        this.$inertia.get('/admin/rodent-type', pickBy(this.form), { preserveState: true })
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
