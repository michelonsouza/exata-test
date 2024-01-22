<script setup lang="ts">
import { TextareaHTMLAttributes } from 'vue';

interface TextareaComponentProps
  extends /* @vue-ignore */ TextareaHTMLAttributes {
  error?: string;
  modelValue?: string | number | null;
}

defineEmits(/* @vue-ignore */ ['update:modelValue']);

withDefaults(defineProps<TextareaComponentProps>(), {
  error: '',
  modelValue: '',
});
</script>

<template>
  <div class="wrapper">
    <textarea
      class="textarea-component"
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
.textarea-component {
  border: 1px solid var(--color-primary);
  border-radius: var(--radius);
  padding: var(--spacing-small) var(--spacing-normal);
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  color: var(--color-white);
  resize: none;

  &::placeholder {
    color: var(--color-gray-light);
    opacity: 1;
  }
}
</style>
