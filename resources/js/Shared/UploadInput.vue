<template>
  <div class="form-group" :class="$attrs.class">
    <label v-if="label" class="form-label" :class="{'required': required }" :for="id">{{ label }}:</label>

    <div class="form-input p-0"  :class="{ 'is-invalid': error }">

      <input :id="id" ref="file" type="file" :required="required" :accept="accept" class="form-control" :class="{ 'is-invalid': error }" :aria-describedby="label.trim().toLowerCase().replaceAll(' ', '-')" :placeholder="placeholder" @change="change" />

    </div>

      <div v-if="error" class="invalid-feedback">{{ error }}</div>
      <small v-if="hint" class="form-hint">{{ hint }}</small>
  </div>
</template>

<script>

import { v4 as uuid } from 'uuid';

export default {
  props: {
    modelValue: File,
    id: {
      type: String,
      default() {
        return `upload-input-${uuid()}`
      },
    },
    label: String,
    accept: String,
    error: String,
    required: Boolean,
    hint: String,
    placeholder: String,
  },
  emits: ['update:modelValue'],
  watch: {
    modelValue(value) {
      if (!value) {
        this.$refs.file.value = ''
      }
    },
  },
  methods: {
    change(e) {
      this.$emit('update:modelValue', e.target.files[0])
    }
  },
}
</script>