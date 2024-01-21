<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router';

import logo from '@/assets/rick.png';

import { links } from './config';
</script>

<template>
  <div class="app-container">
    <header class="header-container">
      <div class="container nav">
        <RouterLink to="/">
          <img class="logo" :src="logo" alt="Rick and Morty logo" />
        </RouterLink>
        <div class="links-container">
          <RouterLink v-for="link in links" :key="link.id" :to="link.path">
            {{ link.label }}
          </RouterLink>
        </div>
      </div>
    </header>
    <div class="container main-content">
      <RouterView v-slot="{ Component, route }">
        <Transition mode="out-in" name="slide-fade">
          <Component :is="Component" :key="route.path" />
        </Transition>
      </RouterView>
    </div>
  </div>
</template>

<style scoped lang="scss">
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.slide-fade-enter-active {
  transition: all 300ms linear;
}

.slide-fade-leave-active {
  transition: all 300ms linear;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
}

.logo {
  width: 50px;
  height: auto;
}
.header-container {
  display: flex;
  width: 100%;
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-small) 0;
  background-color: #060606;
  position: sticky;
  top: 0;
  z-index: 11;

  &::after {
    position: absolute;
    content: '';
    bottom: 0px;
    left: 0;
    right: 0;
    height: 4px;
    width: 100%;
    background: linear-gradient(
      90deg,
      #060606,
      var(--color-primary) 25%,
      var(--color-primary-light) 49%,
      var(--color-primary-dark) 73%,
      #060606
    );
    background-size: 400% 400%;
    animation: gradient 4s ease infinite;
  }
}

.main-content {
  padding-top: var(--spacing-large);
  padding-bottom: var(--spacing-large);
}

.links-container {
  display: flex;
  align-items: center;
  gap: var(--spacing-normal);
}
.app-container {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 100vw;
  overflow-x: hidden;
  min-height: 100vh;
  max-height: 100vh;
}
</style>
