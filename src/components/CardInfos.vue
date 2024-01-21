<script setup lang="ts">
import { computed } from 'vue';

interface InfoType {
  id: string | number;
  label: string;
  value: string | number | boolean;
}

export interface CardInfosProps {
  infos: InfoType[];
  index?: number;
  dataTestId?: string;
  valueMaxWidth?: number;
}

const props = defineProps<CardInfosProps>();

const computedDataTestId = computed(() => {
  return props?.dataTestId || 'card-infos';
});

const computedValueMaxWidth = computed(() => {
  return props?.valueMaxWidth || 120;
});
</script>
<template>
  <div
    class="card-info-container"
    :data-testid="`${computedDataTestId}-info-container${index !== undefined ? `-${index}` : ''}`"
  >
    <div
      v-for="info in infos"
      :key="info.id"
      class="card-info"
      :data-testid="`${computedDataTestId}-info-${info.id}`"
    >
      <span
        class="card-info-label"
        :data-testid="`${computedDataTestId}-info-label-${info.id}`"
        >{{ info.label }}:</span
      >
      <span
        :title="String(info.value)"
        class="card-info-value"
        :style="`max-width: ${computedValueMaxWidth}px`"
        :data-testid="`${computedDataTestId}-info-label-value-${info.id}`"
        >{{ info.value }}</span
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-info-container {
  width: 100%;
  display: flex;
  padding: var(--spacing-small);
  flex-direction: column;
  gap: var(--spacing-small);
}

.card-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.card-info-value {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-align: end;
}
</style>
