import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Layout } from '../../types/layout.interface';
import { useAppDispatch } from '../../app/hooks';
import { updateLabel, updateViewType } from '../../slices/layout.slice';

export const layoutSchema = yup.object().shape({
  label: yup.string().required('Label is required'),
  viewType: yup.string().required('View type is required'),
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
  });

  const onSubmit = (data: Layout) => {
    dispatch(updateLabel(data.label));
    // dispatch(updateViewType(data.viewType));
  };

  return { control, register, submit: handleSubmit(onSubmit), errors };
}
