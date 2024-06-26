import { Input } from '@fluentui/react-components';
import { Delete16Regular } from '@fluentui/react-icons';
import { Controller, useFormContext } from 'react-hook-form';
import { useStyles } from './SectionInput.Styles';
import { useEffect } from 'react';

interface SectionInputProps {
  index: number;
  onDelete: () => void;
}

export function SectionInput({ index, onDelete }: SectionInputProps) {
  const classes = useStyles();
  const { control, register, setValue } = useFormContext();

  useEffect(() => {
    setValue(`sections.${index}.id`, `sections.${index}.id`);
  }, [index, setValue]);

  return (
    <div>
      <input
        value={`sections.${index}.id`}
        type="hidden"
        {...register(`sections.${index}.id`)}
      />
      <Controller
        control={control}
        defaultValue={''}
        name={`sections.${index}.label` as const}
        render={({ field: { onChange, value } }) => (
          <Input
            value={value}
            onChange={onChange}
            className={classes.input}
            contentAfter={
              <Delete16Regular onClick={onDelete} className={classes.icon} />
            }
          />
        )}
      />
    </div>
  );
}

export default SectionInput;
