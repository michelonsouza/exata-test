<script setup lang="ts">
import { computed } from 'vue';

import { Location } from '@/models';

import CardComponent from './CardComponent.vue';
import CardInfos from './CardInfos.vue';

export interface LocationCardProps {
  location: Location;
  index?: number;
  dataTestId?: string;
}

const props = defineProps<LocationCardProps>();

const infos = computed(() => {
  return [
    {
      id: 'name',
      label: 'Nome',
      value: props.location.name,
    },
    {
      id: 'type',
      label: 'Tipo',
      value: props.location.type || 'Desconhecido',
    },
    {
      id: 'dimension',
      label: 'Dimensão',
      value:
        props.location.dimension === 'unknown'
          ? 'Desconhecido'
          : props.location.dimension,
    },
    {
      id: 'residents',
      label: 'Personagens residentes',
      value:
        props.location.residents.length > 0
          ? props.location.residents.length
          : 'Desconhecido',
    },
  ];
});

const computedDataTestId = computed(() => {
  return props.dataTestId || 'location-card';
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
    />
  </CardComponent>
</template>
