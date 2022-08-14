<template>

  <div class="container-xl">
    <div v-if="$page.props.flash.success && show" class="alert alert-important alert-success alert-dismissible" role="alert">
        <div class="d-flex">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon alert-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l5 5l10 -10"></path></svg>
            </div>
            <div>
                {{ $page.props.flash.success }}
            </div>
        </div>
        <button class="btn-close btn-close-white" @click="hide"></button>
    </div>

    <div v-if="($page.props.flash.error || Object.keys($page.props.errors).length > 0) && show" class="alert alert-important alert-danger alert-dismissible" role="alert">
        <div class="d-flex">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon alert-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="12" r="9"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            </div>
            <div v-if="$page.props.flash.error">
                {{ $page.props.flash.error }}
            </div>
            <div v-else class="text-white text-sm font-medium">
              <span v-if="Object.keys($page.props.errors).length === 1">Postoji 1 greška u formi.</span>
              <span v-else-if="4 > Object.keys($page.props.errors).length > 1">Postoji {{ Object.keys($page.props.errors).length }} greška u formi.</span>
              <span v-else>Postoji {{ Object.keys($page.props.errors).length }} grešaka u formi.</span>
            </div>
        </div>
        <button class="btn-close btn-close-white" @click="hide"></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    }
  },
  watch: {
    '$page.props.flash': {
      handler() {
        this.show = true
      },
      deep: true,
    },
  },
  methods: {
    hide() {
      this.show = false;
    }
  }
}
</script>