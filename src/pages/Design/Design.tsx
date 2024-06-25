import {
  Checkbox,
  Combobox,
  Field,
  Input,
  Option,
} from '@fluentui/react-components';
import { SearchRegular } from '@fluentui/react-icons';
import { Controller } from 'react-hook-form';

import { useAppSelector } from '../../app/hooks';
import Accordion from '../../components/Accordion/Accordion';
import SectionList from '../../components/SectionList/SectionList';
import { selectLayout } from '../../slices/layout.selectors';
import { useStyles } from './Design.styles';
import { useLayoutForm } from './useLayoutForm';

export function Design() {
  const classes = useStyles();
  const layout = useAppSelector(selectLayout);
  const { control, submit, errors } = useLayoutForm();
  const { label, viewType } = layout;

  return (
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
      <Checkbox label="Show Sections" />
      <div className={classes.sectionsLayout}>
        <SectionList />
        <Accordion />
      </div>
    </form>
  );
}

export default Design;
