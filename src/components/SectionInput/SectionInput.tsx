import { Field, Input } from '@fluentui/react-components';
import { Delete16Regular } from '@fluentui/react-icons';
import { useEffect } from 'react';
import { FieldError, useFormContext } from 'react-hook-form';
import { useStyles } from './SectionInput.Styles';
import { Section, Layout } from '../../hooks/useLayoutForm';

interface SectionInputProps {
  index: number;
  onDelete: () => void;
}

export function SectionInput({ index, onDelete }: SectionInputProps) {
  const classes = useStyles();

  const {
    register,
    formState: { errors },
  } = useFormContext<Layout>();

  const fieldError = errors.sections?.[index]?.label;

  return (
    <Field
      required
      validationState={fieldError && 'error'}
      validationMessage={fieldError?.message}
    >
      <Input
        className={classes.input}
        contentAfter={
          <Delete16Regular onClick={onDelete} className={classes.icon} />
        }
        {...register(`sections.${index}.label`)}
      />
    </Field>
  );
}

export default SectionInput;
