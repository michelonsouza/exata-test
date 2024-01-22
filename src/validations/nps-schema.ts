import * as Yup from 'yup';

export const npsSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Nome deve conter, no mínimo, 3 caracteres')
    .max(100, 'Nome deve conter, no máximo, 100 caracteres')
    .required('Nome é obrigatório'),
  email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  score: Yup.number()
    .min(1, 'Pontuação deve ser maior ou igual a 1')
    .max(5, 'Pontuação deve ser menor ou igual a 5')
    .required('Pontuação é obrigatória'),
  observation: Yup.string().notRequired(),
});
