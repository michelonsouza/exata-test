<script setup lang="ts">
import { computed } from 'vue';

import { Nps } from '@/models';

import CardComponent from './CardComponent.vue';
import CardInfos from './CardInfos.vue';

export interface NpsCardProps {
  nps: Nps;
  index?: number;
  dataTestId?: string;
}

const props = defineProps<NpsCardProps>();

const infos = computed(() => {
  return [
    {
      id: 'name',
      label: 'Nome',
      value: props.nps.name,
    },
    {
      id: 'email',
      label: 'E-mail',
      value: props.nps.email,
    },
    {
      id: 'obersavation',
      label: 'Observação',
      value: props.nps.observation,
    },
    {
      id: 'score',
      label: 'Pontuação',
      value: props.nps.score || 1,
    },
  ];
});

const computedDataTestId = computed(() => {
  return props.dataTestId || 'nps-card';
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
