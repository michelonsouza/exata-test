<script setup lang="ts">
import { defineProps } from 'vue';
import { Character } from '@/models';

defineProps<{ character: Character }>();
</script>

<template>
  <div class="card">
    {{ character.name }}
  </div>
</template>

<style scoped lang="scss">
.card {
  border: 1px solid var(--color-primary);
  border-radius: var(--radius);
  padding: var(--spacing-normal);
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
}
</style>
