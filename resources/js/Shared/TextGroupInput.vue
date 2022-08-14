<template>
  <div class="form-group" :class="$attrs.class">
    <label v-if="label" class="form-label" :class="{'required': required }" :for="id">{{ label }}:</label>

      <input :id="id" ref="input" v-bind="{ ...$attrs, class: null }" :required="required" class="form-control" :class="{ 'is-invalid': error }" :type="type" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :aria-describedby="label.trim().toLowerCase().replaceAll(' ', '-')" :placeholder="placeholder" />

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
    type: {
      type: String,
      default: 'text',
    },
    error: String,
    label: String,
    modelValue: [String, Number, Boolean],
    required: Boolean,
    hint: String,
    placeholder: String,
  },
  emits: ['update:modelValue'],
  methods: {
    focus() {
      this.$refs.input.focus()
    },
    select() {
      this.$refs.input.select()
    },
    setSelectionRange(start, end) {
      this.$refs.input.setSelectionRange(start, end)
    },
  },
}
</script>
