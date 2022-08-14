<template>
  <div class="form-group" :class="$attrs.class">
    <label v-if="label" class="form-label" :class="{'required': required }" :for="id">{{ label }}:</label>
      
      <select :id="id" ref="input" v-model="selected" v-bind="{ ...$attrs, class: null }" class="form-control" :class="{ 'is-invalid': error }" :aria-describedby="label.trim().toLowerCase().replaceAll(' ', '-')">
        <slot />
      </select>
      
      <div v-if="error" class="invalid-feedback">{{ error }}</div>
      <small v-if="hint" class="form-hint">{{ hint }}</small>

  </div>
</template>

<script>
import { v4 as uuid } from 'uuid'

export default {
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default() {
        return `text-input-${uuid()}`
      },
    },
    error: String,
    label: String,
    modelValue: [String, Number, Boolean],
    required: Boolean,
    hint: String,
  },
  emits: ['update:modelValue'],
  data() {
    return {
      selected: this.modelValue,
    }
  },
  watch: {
    selected(selected) {
      this.$emit('update:modelValue', selected)
    },
  },
  methods: {
    focus() {
      this.$refs.input.focus()
    },
    select() {
      this.$refs.input.select()
    },
  },
}
</script>
