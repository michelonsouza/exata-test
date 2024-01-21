<script setup lang="ts">
import { computed } from 'vue';

import { Episode } from '@/models';

import CardComponent from './CardComponent.vue';
import CardInfos from './CardInfos.vue';

export interface EpisodeCardProps {
  episode: Episode;
  index?: number;
  dataTestId?: string;
}

const props = defineProps<EpisodeCardProps>();

const infos = computed(() => {
  return [
    {
      id: 'name',
      label: 'Nome',
      value: props.episode.name,
    },
    {
      id: 'episode',
      label: 'Episódio',
      value: props.episode.episode,
    },
    {
      id: 'characters',
      label: 'Personagens',
      value:
        props.episode.characters.length > 0
          ? props.episode.characters.length
          : 'Desconhecido',
    },
    {
      id: 'air_date',
      label: 'Foi ao ar em',
      value: new Date(props.episode.air_date).toLocaleDateString('pt-BR'),
    },
  ];
});

const computedDataTestId = computed(() => {
  return props.dataTestId || 'episode-card';
});
</script>

<template>
  <CardComponent
    :index="index"
    :data-test-id="`${computedDataTestId}${index !== undefined ? `-${index}` : ''}`"
  >
    <CardInfos
      :data-test-id="computedDataTestId"
      :infos="infos"
      :index="index"
      :value-max-width="150"
    />
  </CardComponent>
</template>
