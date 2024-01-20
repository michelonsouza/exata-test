<script setup lang="ts">
import { defineProps } from 'vue';

import { Loading } from '@/components';

defineProps<{ loading?: boolean }>();
</script>

<template>
  <div class="list-container">
    <Loading v-if="loading" />
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
