<script setup lang="ts">
import { computed } from 'vue';

import { Character } from '@/models';

export interface CharacterCardProps {
  character: Character;
  index?: number;
  dataTestId?: string;
}

const props = defineProps<CharacterCardProps>();

const gender = {
  Male: 'Masculino',
  Female: 'Feminino',
  unknown: 'Desconhecido',
};

const status = {
  Alive: 'Vivo',
  Dead: 'Morto',
  unknown: 'Desconhecido',
};

const infos = computed(() => {
  return [
    {
      id: 'name',
      label: 'Nome',
      value: props.character.name,
    },
    {
      id: 'type',
      label: 'Tipo',
      value: props.character.type || 'Desconhecido',
    },
    {
      id: 'gender',
      label: 'Gênero',
      value:
        gender[props.character.gender as keyof typeof gender] || 'Desconhecido',
    },
    {
      id: 'species',
      label: 'Espécie',
      value: props.character.species,
    },
    {
      id: 'status',
      label: 'Status',
      value:
        status[props.character.status as keyof typeof status] || 'Desconhecido',
    },
  ];
});

const computedDataTestId = computed(() => {
  return props.dataTestId || 'character-card';
});
</script>

<template>
  <div
    class="card"
    :data-testid="`${computedDataTestId}${index !== undefined ? `-${index}` : ''}`"
  >
    <div
      class="card-image"
      :data-testid="`${computedDataTestId}-image${index !== undefined ? `-${index}` : ''}`"
      :style="{ backgroundImage: `url(${props.character.image})` }"
    />
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
          :title="info.value"
          class="card-info-value"
          :data-testid="`${computedDataTestId}-info-label-value-${info.id}`"
          >{{ info.value }}</span
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  overflow: hidden;
  border: 1px solid var(--color-primary);
  border-radius: var(--radius);
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  display: flex;
  transition: border-color 150ms linear;
  gap: var(--spacing-small);

  &:hover {
    border-color: var(--color-primary-dark);
  }
}

.card-image {
  width: 40%;
  min-width: 40%;
  height: 100%;
  background-color: var(--color-primary);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: var(--spacing-normal);
}

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
  max-width: 120px;
  text-align: end;
}
</style>
