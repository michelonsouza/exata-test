<script setup lang="ts">
import { defineProps, computed } from 'vue';

import Prev from '@/assets/icons/chevron_left.svg';
import Next from '@/assets/icons/chevron_right.svg';
import Last from '@/assets/icons/next.svg';
import First from '@/assets/icons/prev.svg';
import { useMediaQuery } from '@/composables';
import { InfoType as Pagination } from '@/models';

interface Props extends Partial<Pagination> {
  page: number;
  loading?: boolean;
  onPageChange(page: number): void;
}

const { isDesktop } = useMediaQuery();

const props = defineProps<Props>();

const paginationButtons = computed(() => {
  if (props?.pages === 1) {
    return [1];
  }

  const visiblePages = !isDesktop.value ? 3 : 5;
  let startPage = 1;

  if (props.page > visiblePages) {
    startPage = props.page;
  }

  if (props.page > (props?.pages || 0) - visiblePages) {
    startPage = (props?.pages || 0) - visiblePages + 1;
  }

  return Array(visiblePages)
    .fill(null)
    .map((_, index) => index + startPage);
});
</script>

<template>
  <div v-if="(props?.pages || 0) < 1 || loading" />
  <div v-else class="pagination-container">
    <button
      :disabled="page === 1"
      title="Ir para primeira página"
      @click="onPageChange(1)"
    >
      <img :src="First" alt="First icon" />
    </button>
    <button
      title="Ir para a página anterior"
      :disabled="page === 1"
      @click="onPageChange(page - 1)"
    >
      <img :src="Prev" alt="Prev icon" />
    </button>
    <button
      v-for="pageButton in paginationButtons"
      :key="pageButton"
      :disabled="pageButton === props.page"
      :title="`Ir para a página ${pageButton}`"
      @click="onPageChange(pageButton)"
    >
      {{ pageButton }}
    </button>
    <button
      title="Ir para a próxima página"
      :disabled="page === props.pages"
      @click="onPageChange(page + 1)"
    >
      <img :src="Next" alt="Next icon" />
    </button>
    <button
      title="Ir para última página"
      :disabled="page === props.pages"
      @click="onPageChange(props.pages || props.page)"
    >
      <img :src="Last" alt="Last icon" />
    </button>
  </div>
</template>

<style scoped lang="scss">
.pagination-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-small);

  & > button {
    min-width: 36px;
    min-height: 28px;
    display: flex;
    line-height: 1rem;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    color: var(--color-white);
    & img {
      width: 18px;
      height: auto;
    }
  }
}
</style>
