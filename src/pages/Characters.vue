<script setup lang="ts">
import { CharacterCard, ListContainer, PageWrapper } from '@/components';
import { useGetCharacters } from '@/services';
import { ref } from 'vue';

const page = ref<number>(1);

const { data, loading } = useGetCharacters({ page: page.value });
</script>

<template>
  <PageWrapper title="Personagens">
    <ListContainer :loading="loading">
      <CharacterCard
        v-for="character in data?.results"
        :key="character.id"
        :character="character"
      />
    </ListContainer>
  </PageWrapper>
</template>
