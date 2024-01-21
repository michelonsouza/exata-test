<script setup lang="ts">
import { ref } from 'vue';

import {
  EpisodeCard,
  ListContainer,
  PageWrapper,
  PaginationComponent,
} from '@/components';
import { useGetEpisodes } from '@/services';

const currentPage = ref<number>(1);

const { data, loading, refetch } = useGetEpisodes({
  page: currentPage.value,
});

function onPageChange(newPage: number) {
  currentPage.value = newPage;
  refetch({ page: newPage });
}
</script>

<template>
  <PageWrapper title="Episódios">
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
      <EpisodeCard
        v-for="(episode, index) in data?.results"
        :key="episode.id"
        :index="index"
        :episode="episode"
        data-testid="episode"
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
