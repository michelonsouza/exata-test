import { ref } from 'vue';

import { Location, ApiPaginatedReponse } from '@/models';

import { baseApi } from './base-api';

interface ParamsType {
  page?: number;
}

export function useGetLocations(params?: ParamsType) {
  const data = ref<ApiPaginatedReponse<Location> | null>(null);
  const error = ref<Error | null>(null);
  const loading = ref<boolean>(true);

  baseApi
    .get<ApiPaginatedReponse<Location>>('/location', { params })
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
      .get<ApiPaginatedReponse<Location>>('/location', {
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
