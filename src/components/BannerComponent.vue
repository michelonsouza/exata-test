<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

import banner1 from '@/assets/banner-1.avif';
import banner2 from '@/assets/banner-2.webp';
import banner3 from '@/assets/banner-3.jpeg';
import banner4 from '@/assets/banner-4.webp';

const selectedBanner = ref<number>(1);

// eslint-disable-next-line no-undef
let interval: NodeJS.Timeout;
const intervalTime = 5000;

onMounted(() => {
  interval = setInterval(() => {
    selectedBanner.value += 1;
    if (selectedBanner.value > 4) {
      selectedBanner.value = 1;
    }
  }, intervalTime);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<template>
  <div>
    <Transition mode="out-in" name="slide-fade">
      <div
        v-if="selectedBanner === 1"
        class="banner"
        :style="{ backgroundImage: `url(${banner1})` }"
      ></div>
      <div
        v-else-if="selectedBanner === 2"
        class="banner"
        :style="{ backgroundImage: `url(${banner2})` }"
      ></div>
      <div
        v-else-if="selectedBanner === 3"
        class="banner"
        :style="{ backgroundImage: `url(${banner3})` }"
      ></div>
      <div
        v-else
        class="banner"
        :style="{ backgroundImage: `url(${banner4})` }"
      ></div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.banner {
  border-radius: var(--radius);
  height: 300px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 768px) {
    height: 500px;
  }
}
.slide-fade-enter-active {
  transition: all 300ms linear;
}

.slide-fade-leave-active {
  transition: all 300ms linear;
}

.slide-fade-enter-from {
  transform: translateX(-20px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
