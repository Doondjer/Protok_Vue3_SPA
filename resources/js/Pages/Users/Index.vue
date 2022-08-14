<template>

  <index-layout :items="users"
                :form="form"
                :title="'Korisnici'"
                :createLink="'/admin/user/create'"
  >
      <template #header>
        <th class="w-100">Korisnik</th>
        <th>Email</th>
        <th>Uloga</th>
        <th>Izmenjen</th>
        <th class="w-auto">Akcija</th>
      </template>

      <tr v-if="users.total > 0" v-for="user in users.data" :key="user.id" :class="{'bg-red-lt': user.is_trashed }">
          <td><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Odaberi Korisnika"></td>
          <td><span class="text-muted">{{ user.id }}</span></td>
          <td class="td-truncate">
              <div class="d-flex py-1 align-items-center">
                  <span class="avatar me-3" :style="`background-image: url(${user.image ? user.image : '/ghost-user.jpg'})`"></span>
                  <div class="flex-fill">
                      <div class="text-muted">
                        <span v-if="user.is_trashed " class="text-reset">{{ user.name }}</span>
                        <Link v-else :href="`/user/${user.id}/edit`" class="text-reset">{{ user.name }}</Link>
                      </div>
                  </div>
              </div>
          </td>
          <td>
              {{ user.email }}
          </td>
          <td>
              <span class="badge" :class="{'bg-green': user.is_admin}">{{ user.role }}</span>
          </td>
          <td>
              {{ user.updated_at }}
          </td>
          <td>
              <div class="btn-list flex-nowrap">
                <div v-if="! user.is_trashed">
                  <Link :href="`/user/${user.id}/edit`" class="btn btn-white" as="button">Izmeni</Link>
                  <Link :href="`/admin/user/${user.id}`" method="delete" class="btn btn-white" as="button">Obrisi</Link>
                </div>
                <div v-else>
                  <Link :href="`/admin/user/${user.id}/undelete`" method="patch" class="btn btn-white" as="button">Vrati</Link>                                       
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
    users: Object,
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
        this.$inertia.get('/admin/user', pickBy(this.form), { preserveState: true })
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
