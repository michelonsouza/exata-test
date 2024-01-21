import { ref } from 'vue';

import { Character, ApiPaginatedReponse } from '@/models';

import { baseApi } from './base-api';

interface ParamsType {
  page?: number;
}

export function useGetCharacters(params?: ParamsType) {
  const data = ref<ApiPaginatedReponse<Character> | null>(null);
  const error = ref<Error | null>(null);
  const loading = ref<boolean>(true);

  baseApi
    .get<ApiPaginatedReponse<Character>>('/character', { params })
    .then(response => {
      data.value = response.data || null;
    })
    .catch(apiError => {
      error.value = apiError;
    })
    .finally(() => {
      loading.value = false;
    });

  function refetch(newParams?: ParamsType) {
    loading.value = true;
    baseApi
      .get<ApiPaginatedReponse<Character>>('/character', {
        params: { ...(params || {}), ...(newParams || {}) },
      })
      .then(response => {
        data.value = response.data || null;
      })
      .catch(apiError => {
        error.value = apiError;
      })
      .finally(() => {
        loading.value = false;
      });
  }

  return { data, error, loading, refetch };
}
