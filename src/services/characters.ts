import { useApiWrapper } from '@/composables';
import { Character, ApiPaginatedReponse } from '@/models';

import { baseApi } from './base-api';

interface ParamsType {
  page?: number;
}

export function useGetCharacters(params?: ParamsType) {
  return useApiWrapper({
    fetcher: () =>
      baseApi
        .get<ApiPaginatedReponse<Character>>('/character', { params })
        .then(response => response.data || null),
  });
}
