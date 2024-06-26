import { yupResolver } from '@hookform/resolvers/yup';
import { useFieldArray, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useAppDispatch } from '../app/hooks';
import { updateLabel, updateViewType } from '../slices/layout.slice';

const sectionSchema = yup.object({
  label: yup.string().required('Input is required'),
  name: yup.string().nonNullable(),
});

const layoutSchema = yup.object({
  label: yup.string().required('Label is required'),
  viewType: yup.string().required('View type is required'),
  sections: yup.array().of(sectionSchema).default([]),
});

export type Layout = yup.InferType<typeof layoutSchema>;
export type Section = yup.InferType<typeof sectionSchema>;

export function useLayoutForm() {
  const dispatch = useAppDispatch();

  const methods = useForm<Layout>({
    resolver: yupResolver(layoutSchema),
    defaultValues: {
      label: '',
      viewType: '',
      sections: [
        {
          label: '',
          name: '',
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
