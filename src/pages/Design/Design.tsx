import { useState } from 'react';
import {
  Checkbox,
  Combobox,
  Field,
  Input,
  Option,
} from '@fluentui/react-components';
import { SearchRegular } from '@fluentui/react-icons';
import { Controller, FormProvider } from 'react-hook-form';

import { useAppSelector } from '../../app/hooks';
import Accordion from '../../components/Accordion/Accordion';
import SectionList from '../../components/SectionList/SectionList';
import { Layout, useLayoutForm } from '../../hooks/useLayoutForm';
import { selectLayout } from '../../slices/layout.selectors';
import { useStyles } from './Design.styles';

export function Design() {
  const classes = useStyles();
  const layout = useAppSelector(selectLayout);
  const { control, errors, methods, append, remove, fields } = useLayoutForm();
  const [checked, setChecked] = useState(true);
  const { label, viewType } = layout;

  const onSubmit = (data: Layout) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form
        id="form-layout"
        noValidate
        onSubmit={methods.handleSubmit(onSubmit)}
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
        <Checkbox
          checked={checked}
          onChange={() => setChecked((c) => !c)}
          label="Show Sections"
        />
        <div className={classes.sectionsLayout}>
          {checked && (
            <SectionList fields={fields} append={append} remove={remove} />
          )}
          <Accordion />
        </div>
      </form>
    </FormProvider>
  );
}

export default Design;
