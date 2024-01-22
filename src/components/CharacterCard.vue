<script setup lang="ts">
import { computed } from 'vue';

import whishlistedIcon from '@/assets/icons/heart_fullfiled.svg';
import unWhishlistedIcon from '@/assets/icons/heart_outline.svg';
import { Character } from '@/models';
import { useStore } from '@/store';
import { ActionEnums } from '@/store/modules/wish-list/types';

import CardComponent from './CardComponent.vue';
import CardInfos from './CardInfos.vue';

export interface CharacterCardProps {
  character: Character;
  index?: number;
  dataTestId?: string;
}

const store = useStore();

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

const isInWishList = computed(() => {
  return !!store?.state?.whishList?.characters?.find(
    char => char.id === props.character.id,
  );
});

const toggleButtonTitle = computed(() => {
  return isInWishList.value
    ? `Remover ${props.character.name} da lista`
    : `Adicionar ${props.character.name} a lista`;
});

const icon = computed(() => {
  return isInWishList.value ? whishlistedIcon : unWhishlistedIcon;
});

const toggleWishList = () => {
  store.dispatch(
    isInWishList.value
      ? ActionEnums.ACTION_REMOVE_FROM_WISH_LIST
      : ActionEnums.ACTION_ADD_TO_WISH_LIST,
    props.character,
  );
};
</script>

<template>
  <CardComponent
    :index="index"
    :data-test-id="`${computedDataTestId}${index !== undefined ? `-${index}` : ''}`"
  >
    <button
      :title="toggleButtonTitle"
      :class="{ 'whish-list': true, 'whish-list-active': isInWishList }"
      :data-testid="`${computedDataTestId}-toggle-favorite${index !== undefined ? `-${index}` : ''}`"
      type="button"
      @click="toggleWishList"
    >
      <img :src="icon" />
    </button>
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
.whish-list {
  position: absolute;
  z-index: 12;
  padding: 0;
  border: 0;
  bottom: 0;
  width: 40px;
  height: 40px;
  background-color: transparent;
  outline: 0;

  & > img {
    width: 40px;
    height: 40px;
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
</style>
