<script setup lang="ts">
import {
  CharacterCard,
  ListContainer,
  PageWrapper,
  EmptyState,
} from '@/components';
import { useStore } from '@/store';

const store = useStore();
</script>

<template>
  <PageWrapper title="Favoritos">
    <ListContainer v-if="!!store.state.whishList.characters.length">
      <CharacterCard
        v-for="(character, index) in store.state.whishList.characters"
        :key="character.id"
        :index="index"
        :character="character"
        data-testid="character"
      />
    </ListContainer>
    <EmptyState v-else />
  </PageWrapper>
</template>
