<script setup lang="ts">
import { ref } from 'vue';

import {
  LocationCard,
  ListContainer,
  PageWrapper,
  PaginationComponent,
} from '@/components';
import { useGetLocations } from '@/services';

const currentPage = ref<number>(1);

const { data, loading, refetch } = useGetLocations({
  page: currentPage.value,
});

function onPageChange(newPage: number) {
  currentPage.value = newPage;
  refetch({ page: newPage });
}
</script>

<template>
  <PageWrapper title="Localizações">
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
      <LocationCard
        v-for="(location, index) in data?.results"
        :key="location.id"
        :index="index"
        :location="location"
        data-testid="location"
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
