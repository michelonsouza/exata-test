<script setup lang="ts">
import { ref } from 'vue';

import { toTypedSchema } from '@vee-validate/yup';
import { useForm } from 'vee-validate';

import {
  InputComponent,
  TextareaComponent,
  PageWrapper,
  LoadingComponent,
} from '@/components';
import { useStore } from '@/store';
import { ActionEnums } from '@/store/modules/nps-list/types';
import { uuidv4 } from '@/utils';
import { npsSchema } from '@/validations';

const loading = ref<boolean>(false);
const store = useStore();
const { errors, defineField, handleSubmit, resetForm } = useForm({
  validationSchema: toTypedSchema(npsSchema),
  validateOnMount: false,
  initialValues: {
    name: '',
    email: '',
    score: 0,
    observation: '',
  },
});
const [score, scoreAttrs] = defineField('score');
const [name, nameAttrs] = defineField('name');
const [email, emailAttrs] = defineField('email');
const [observation, observationAttrs] = defineField('observation');

const onSubmit = handleSubmit(async values => {
  const nps = {
    id: uuidv4(),
    ...values,
  };
  await new Promise<void>(resolve => {
    loading.value = true;
    store.dispatch(ActionEnums.ACTION_ADD_TO_NPS_LIST, nps);

    setTimeout(() => {
      resetForm();
      loading.value = false;
      resolve();
    }, 2000);
  });
});
</script>

<template>
  <PageWrapper title="Pesquisa de satisfação">
    <LoadingComponent v-if="loading" />
    <form v-else class="form-container" @submit="onSubmit">
      <InputComponent
        v-model="name"
        v-bind="nameAttrs"
        placeholder="Nome"
        :error="errors.name"
      />
      <InputComponent
        v-model="email"
        v-bind="emailAttrs"
        placeholder="E-mail"
        :error="errors.email"
      />
      <InputComponent
        v-model="score"
        min="1"
        max="5"
        type="number"
        v-bind="scoreAttrs"
        placeholder="Pontuação"
        :error="errors.score"
      />
      <TextareaComponent
        v-model="observation"
        v-bind="observationAttrs"
        placeholder="Observação"
        rows="6"
        :error="errors.observation"
      />
      <button>Enviar</button>
    </form>
  </PageWrapper>
</template>

<style scoped lang="scss">
.form-container {
  width: 600px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-normal);
  margin: 0 auto;

  & button {
    transition: 150ms all linear;

    &:hover {
      background-color: var(--color-primary-dark);
      border-color: var(--color-primary-dark);
    }
  }
}
</style>
