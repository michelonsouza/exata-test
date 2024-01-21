<script setup lang="ts">
import { LoadingComponent } from '@/components';

export interface ListContainerProps {
  loading?: boolean;
  dataCount?: number;
}

defineProps<ListContainerProps>();
</script>

<template>
  <div class="list-container">
    <LoadingComponent v-if="loading" />
    <slot v-else></slot>
  </div>
</template>

<style scoped lang="scss">
.list-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-normal);

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
