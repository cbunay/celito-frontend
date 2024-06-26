import { yupResolver } from '@hookform/resolvers/yup';
import { useFieldArray, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useAppDispatch } from '../app/hooks';
import { updateLabel, updateViewType } from '../slices/layout.slice';

const inputSchema = yup.object({
  label: yup.string().required('Input is required'),
  size: yup.number().required(),
});

const rowSchema = yup.object({
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
  const dispatch = useAppDispatch();

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

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'sections',
  });

  const onSubmit = (data: Layout) => {
    console.log(data);
    dispatch(updateLabel(data.label));
    dispatch(updateViewType(data.viewType));
    // dispatch(updateSections(data.sections));
  };

  return {
    methods,
    control,
    register,
    fields,
    append,
    remove,
    errors,
    submit: handleSubmit(onSubmit),
  };
}
