import { AxiosError } from 'axios';
import { ref, Ref } from 'vue';

interface ApiWrapperOptions<DataType = any> {
  fetcher: () => Promise<DataType | null>;
}

export function useApiWrapper<DataType = any>({
  fetcher,
}: ApiWrapperOptions<DataType>) {
  const data = ref<DataType | null>(null) as Ref<DataType | null>;
  const error = ref<AxiosError | null>(null);
  const loading = ref<boolean>(true);

  fetcher()
    .then(response => {
      data.value = response;
      loading.value = false;
    })
    .catch(error => {
      error.value = error;
      loading.value = false;
    });

  return { data, error, loading };
}
