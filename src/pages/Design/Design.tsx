import {
  Checkbox,
  Combobox,
  Field,
  Input,
  Option,
} from '@fluentui/react-components';
import { SearchRegular } from '@fluentui/react-icons';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Accordion from '../../components/Accordion/Accordion';
import SectionList from '../../components/SectionList/SectionList';
import { selectLayout } from '../../slices/layout.selectors';
import { useStyles } from './Design.styles';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { updateLabel, updateViewType } from '../../slices/layout.slice';

interface FormData {
  label: string;
  viewType: string;
}

export const layoutSchema = yup.object({
  label: yup.string().required('Label is required'),
  viewType: yup.string().required('View type is required'),
});

export function Design() {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const layout = useAppSelector(selectLayout);
  const { label, viewType } = layout;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(layoutSchema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    dispatch(updateLabel(data.label));
    dispatch(updateViewType(data.viewType));
  };

  return (
    <form
      id="form-layout"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className={classes.container}
    >
      <div className={classes.designRow}>
        <Field
          required
          label="Label"
          validationState={errors.label && 'error'}
          validationMessage={errors.label?.message}
          className={classes.field}
        >
          <Controller
            name="label"
            defaultValue={label}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                onChange={(_, data) => {
                  console.log(data);
                  onChange(data.value);
                }}
              />
            )}
          />
        </Field>
        <Field
          label="View Type"
          validationState={errors.viewType && 'error'}
          validationMessage={errors.viewType?.message}
          className={classes.field}
        >
          <Controller
            name="viewType"
            defaultValue={viewType}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Combobox
                expandIcon={<SearchRegular />}
                value={value}
                onOptionSelect={(_, data) => {
                  onChange(data.optionText);
                }}
              >
                <Option checkIcon={null}>Create</Option>
                <Option checkIcon={null}>Edit</Option>
                <Option checkIcon={null}>View</Option>
              </Combobox>
            )}
          />
        </Field>
      </div>
      {/* <Checkbox checked={true} label="Show Sections" /> */}
      <div className={classes.sectionsLayout}>
        <SectionList />
        <Accordion />
      </div>
    </form>
  );
}

export default Design;
