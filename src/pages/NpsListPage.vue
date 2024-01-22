<script setup lang="ts">
import { NpsCard, ListContainer, PageWrapper } from '@/components';
import { useStore } from '@/store';

const store = useStore();
</script>

<template>
  <PageWrapper title="Avaliações">
    <ListContainer>
      <NpsCard
        v-for="(nps, index) in store.state.npsList.npss"
        :key="nps.id"
        :index="index"
        :nps="nps"
        data-testid="nps"
      />
    </ListContainer>
  </PageWrapper>
</template>
