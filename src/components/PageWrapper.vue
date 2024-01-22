<script setup lang="ts">
import { computed } from 'vue';

export interface PageWrapperProps {
  title?: string;
  dataTestId?: string;
}

const props = defineProps<PageWrapperProps>();

const computedDataTestId = computed(() => {
  return props?.dataTestId || 'page-wrapper';
});
</script>

<template>
  <div :data-testid="computedDataTestId" class="page-wrapper-container">
    <h1 v-if="!!title" :data-testid="`${computedDataTestId}-title`">
      {{ title }}
    </h1>
    <slot></slot>
  </div>
</template>

<style scoped>
.page-wrapper-container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-x-large);
}
</style>
