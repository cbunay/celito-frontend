import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const inputSchema = yup.object({
  label: yup.string().required('Input is required'),
  size: yup.number().default(30),
});

const rowSchema = yup.object({
  id: yup.string(),
  inputs: yup.array().of(inputSchema).default([]),
});

const sectionSchema = yup.object({
  id: yup.string().required(),
  label: yup.string().required('Input is required'),
  rows: yup.array().of(rowSchema).default([]),
});

const layoutSchema = yup.object({
  label: yup.string().required('Label is required'),
  viewType: yup.string().required('View type is required'),
  sections: yup.array().of(sectionSchema).default([]),
});

export type Layout = yup.InferType<typeof layoutSchema>;
export type Section = yup.InferType<typeof sectionSchema>;
export type Row = yup.InferType<typeof rowSchema>;
export type Input = yup.InferType<typeof inputSchema>;

export function useLayoutForm() {
  const methods = useForm<Layout>({
    resolver: yupResolver(layoutSchema),
    defaultValues: {
      label: '',
      viewType: '',
      sections: [
        {
          id: '',
          label: '',
          rows: [],
        },
      ],
    },
  });

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data: Layout) => {
    console.log(data);
  };

  return {
    methods,
    control,
    register,
    errors,
    submit: handleSubmit(onSubmit),
  };
}
