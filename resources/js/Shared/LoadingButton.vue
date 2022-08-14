<template>

  <button type="submit" :disabled="loading" class="btn">

    <slot />
    <span class="spinner-border spinner-border-sm ms-2" role="status" v-if="loading"></span>

  </button>

</template>

<script>
export default {
  props: {
    loading: Boolean,
  },
}
</script>
