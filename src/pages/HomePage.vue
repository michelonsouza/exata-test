<script setup lang="ts">
import { BannerComponent, PageWrapper } from '@/components';

const tooling = [
  {
    id: 'vuex',
    name: 'Vuex',
    href: 'https://vuex.vuejs.org/',
  },
  {
    id: 'vue-router',
    name: 'Vue Router',
    href: 'https://router.vuejs.org/',
  },
  {
    id: 'axios',
    name: 'Axios',
    href: 'https://axios-http.com/',
  },
  {
    id: 'vee-validate',
    name: 'Vee Validate',
    href: 'https://vee-validate.logaretm.com/v4',
  },
  {
    id: 'yup',
    name: 'YupJS',
    href: 'https://github.com/jquense/yup',
  },
];
</script>

<template>
  <PageWrapper>
    <BannerComponent></BannerComponent>
    <h2>Rick and Morty Exata</h2>
    <p>
      Esta e uma aplicação de teste da API
      <a
        href="https://rickandmortyapi.com"
        target="_blank"
        title="Rick and Morty API"
        rel="noreferrer noopener nofollow"
        >Rick and Morty</a
      >.
    </p>
    <p>
      A intenção desta aplicação é demonstrar o uso do
      <a
        href="https://vuejs.org/"
        target="_blank"
        title="VueJS"
        rel="noreferrer noopener nofollow"
        >VueJS</a
      >
      e outras bibliotecas. Tais como:
    </p>
    <ul>
      <li v-for="item in tooling" :key="item.id">
        <a :href="item.href" target="_blank" rel="noreferrer noopener nofollow">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </PageWrapper>
</template>

<style scoped lang="scss"></style>
