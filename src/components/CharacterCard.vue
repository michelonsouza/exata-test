<script setup lang="ts">
import { computed } from 'vue';

import { Character } from '@/models';

import CardComponent from './CardComponent.vue';
import CardInfos from './CardInfos.vue';

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
      id: 'episodes',
      label: 'Episódios',
      value: props.character.episode
        .map(episode => {
          const url = episode.split('/');
          return url[url.length - 1];
        })
        .join(', '),
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
  return props?.dataTestId || 'character-card';
});
</script>

<template>
  <CardComponent
    :index="index"
    :data-test-id="`${computedDataTestId}${index !== undefined ? `-${index}` : ''}`"
  >
    <div
      class="card-image"
      :data-testid="`${computedDataTestId}-image${index !== undefined ? `-${index}` : ''}`"
      :style="{ backgroundImage: `url(${props.character.image})` }"
    ></div>
    <CardInfos
      :data-test-id="computedDataTestId"
      :infos="infos"
      :index="index"
      :value-max-width="100"
    />
  </CardComponent>
</template>

<style scoped lang="scss">
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
</style>
