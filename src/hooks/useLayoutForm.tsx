import { yupResolver } from '@hookform/resolvers/yup';
import { useFieldArray, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useAppDispatch } from '../app/hooks';
import { updateLabel, updateViewType } from '../slices/layout.slice';
import { Layout } from '../types/layout.interface';

const inputSchema = yup.object().shape({
  label: yup.string().required('Input is required'),
});

const sectionSchema = yup.object({
  label: yup.string().required('Input is required'),
  // inputs: yup.array().of(inputSchema).nullable(),
});

const layoutSchema = yup.object().shape({
  label: yup.string().required('Label is required'),
  viewType: yup.string().required('View type is required'),
  sections: yup.array().of(sectionSchema).default([]),
});

export function useLayoutForm() {
  const dispatch = useAppDispatch();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Layout>({
    resolver: yupResolver(layoutSchema),
    defaultValues: {
      label: '',
      viewType: '',
      sections: [{ label: '' }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'sections',
  });

  const onSubmit = (data: Layout) => {
    dispatch(updateLabel(data.label));
    dispatch(updateViewType(data.viewType));
  };

  return {
    control,
    register,
    fields,
    append,
    remove,
    submit: handleSubmit(onSubmit),
    errors,
  };
}
