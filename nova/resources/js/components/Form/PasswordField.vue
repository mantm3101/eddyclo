<template>
  <default-field :field="field" :errors="errors">
    <template slot="field">
      <!-- Phi: v-bind="extraAttributes" -->
      <input
        :id="field.attribute"
        :dusk="field.attribute"
        type="password"
        v-model="value"
        class="w-full form-control form-input form-input-bordered"
        :class="errorClasses"
        autocomplete="new-password"
        v-bind="extraAttributes"
        :disabled="isReadonly"
      />
    </template>
  </default-field>
</template>

<script>
import { FormField, HandlesValidationErrors } from 'laravel-nova'

export default {
  mixins: [HandlesValidationErrors, FormField],

  // Phi: Add `computed`
  computed: {
    defaultAttributes() {
      return {
        placeholder: this.field.placeholder || this.field.name,
        // Phi
        autocomplete: 'off',
      }
    },

    extraAttributes() {
      const attrs = this.field.extraAttributes

      return {
        // Leave the default attributes even though we can now specify
        // whatever attributes we like because the old number field still
        // uses the old field attributes
        ...this.defaultAttributes,
        ...attrs,
      }
    },
  },
}
</script>
