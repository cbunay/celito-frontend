import { Field, Input } from '@fluentui/react-components';
import { Delete16Regular } from '@fluentui/react-icons';
import { useFormContext } from 'react-hook-form';
import { Layout } from '../../hooks/useLayoutForm';
import { useStyles } from './SectionInput.Styles';

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

  const sectionError = errors.sections?.[index]?.label;

  return (
    <Field
      required
      validationState={sectionError && 'error'}
      validationMessage={sectionError?.message}
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
