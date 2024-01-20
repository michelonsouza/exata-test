<script setup lang="ts">
import banner from '@/assets/banner.avif';
</script>

<template>
  <div class="banner" :style="{ backgroundImage: `url(${banner})` }" />
</template>

<style scoped lang="scss">
.banner {
  border-radius: var(--radius);
  height: 500px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
