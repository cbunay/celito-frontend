import {
  Checkbox,
  Combobox,
  Field,
  Input,
  Option,
} from '@fluentui/react-components';
import { useState } from 'react';
import { FormProvider } from 'react-hook-form';

import SectionList from '../../components/SectionList/SectionList';
import { useLayoutForm } from '../../hooks/useLayoutForm';
import { useStyles } from './Design.styles';

export function Design() {
  const classes = useStyles();
  const { errors, methods, submit, register } = useLayoutForm();
  const [checked, setChecked] = useState(true);

  return (
    <FormProvider {...methods}>
      <form
        id="form-layout"
        noValidate
        onSubmit={submit}
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
            <Input {...register('label')} />
          </Field>
          <Field
            label="View Type"
            validationState={errors.viewType && 'error'}
            validationMessage={errors.viewType?.message}
            className={classes.field}
          >
            <Combobox {...register('viewType')}>
              <Option>Create</Option>
              <Option>Edit</Option>
              <Option>View</Option>
            </Combobox>
          </Field>
        </div>
        <Checkbox
          checked={checked}
          onChange={() => setChecked((c) => !c)}
          label="Show Sections"
        />
        <div className={classes.sectionsLayout}>
          {checked && <SectionList />}
        </div>
      </form>
    </FormProvider>
  );
}

export default Design;
