<script setup lang="ts">
import { computed } from 'vue';

import emptyRick from '@/assets/empty-rick.png';
import mortyUnknow from '@/assets/morty-unknow.png';
import rickAndMortyFuck from '@/assets/rick-and-morty-fuck.png';
import rickUnknow from '@/assets/rick-unknow.png';

const image = computed(() => {
  const arr = [emptyRick, mortyUnknow, rickAndMortyFuck, rickUnknow];
  const min = 0;
  const max = arr.length - 1;
  const index = Math.floor(Math.random() * (max - min)) + min;

  return {
    src: arr[index],
    width: index === 0 ? 130 : 300,
  };
});
</script>

<template>
  <div class="empty-container">
    <img
      :src="image.src"
      alt="empty state"
      :style="`width: ${image.width}px`"
    />
    <h3>Deu ruim, acabou tudo!!</h3>
  </div>
</template>

<style scoped lang="scss">
.empty-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & img {
    width: 200px;
    height: auto;
    max-width: 96%;
  }
}
</style>
