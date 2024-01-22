<script setup lang="ts">
import { NpsCard, ListContainer, PageWrapper, EmptyState } from '@/components';
import { useStore } from '@/store';

const store = useStore();
</script>

<template>
  <PageWrapper title="Avaliações">
    <ListContainer v-if="!!store.state.npsList.npss.length">
      <NpsCard
        v-for="(nps, index) in store.state.npsList.npss"
        :key="nps.id"
        :index="index"
        :nps="nps"
        data-testid="nps"
      />
    </ListContainer>
    <EmptyState v-else />
  </PageWrapper>
</template>
