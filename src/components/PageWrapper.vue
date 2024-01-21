<script setup lang="ts">
export interface PageWrapperProps {
  title: string;
}

defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="page-wrapper-container">
    <h1>{{ title }}</h1>
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
