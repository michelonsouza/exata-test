<script setup lang="ts">
import { ref } from 'vue';

import {
  CharacterCard,
  ListContainer,
  PageWrapper,
  PaginationComponent,
} from '@/components';
import { useGetCharacters } from '@/services';

const currentPage = ref<number>(1);

const { data, loading, refetch } = useGetCharacters({
  page: currentPage.value,
});

function onPageChange(newPage: number) {
  currentPage.value = newPage;
  refetch({ page: newPage });
}
</script>

<template>
  <PageWrapper title="Personagens">
    <PaginationComponent
      :loading="loading"
      :pages="data?.info?.pages"
      :count="data?.info?.count"
      :next="data?.info?.next"
      :prev="data?.info?.prev"
      :page="currentPage"
      @page-change="onPageChange"
    />
    <ListContainer :loading="loading">
      <CharacterCard
        v-for="(character, index) in data?.results"
        :key="character.id"
        :index="index"
        :character="character"
        data-testid="character"
      />
    </ListContainer>
    <PaginationComponent
      :loading="loading"
      :pages="data?.info?.pages"
      :count="data?.info?.count"
      :next="data?.info?.next"
      :prev="data?.info?.prev"
      :page="currentPage"
      @page-change="onPageChange"
    />
  </PageWrapper>
</template>
