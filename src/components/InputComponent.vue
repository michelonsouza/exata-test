<script setup lang="ts">
import { InputHTMLAttributes } from 'vue';

interface InputComponentProps extends /* @vue-ignore */ InputHTMLAttributes {
  error?: string;
  modelValue?: string | number | null;
}

defineEmits(/* @vue-ignore */ ['update:modelValue']);

withDefaults(defineProps<InputComponentProps>(), {
  error: '',
  modelValue: '',
});
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
  customOptions: {},
};
</script>

<template>
  <div class="wrapper">
    <input
      class="input-component"
      v-bind="$attrs"
      @input="$emit('update:modelValue', ($event.target as any)?.value)"
    />
    <p v-if="!!error" class="error-message">{{ error }}</p>
  </div>
</template>
<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
}

.error-message {
  color: var(--color-error);
}
.input-component {
  border: 1px solid var(--color-primary);
  border-radius: var(--radius);
  padding: var(--spacing-small) var(--spacing-normal);
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  color: var(--color-white);

  &::placeholder {
    color: var(--color-gray-light);
    opacity: 1;
  }
}
</style>
