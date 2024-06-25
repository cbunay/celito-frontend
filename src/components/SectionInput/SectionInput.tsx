import { Input } from '@fluentui/react-components';
import { Delete16Regular } from '@fluentui/react-icons';
import { Controller, useFormContext } from 'react-hook-form';
import { useStyles } from './SectionInput.Styles';

interface SectionInputProps {
  index: number;
  onDelete: () => void;
}

export function SectionInput({ index, onDelete }: SectionInputProps) {
  const classes = useStyles();
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      defaultValue={''}
      name={`sections.${index}.label` as const}
      render={({ field: { onChange, value } }) => (
        <div>
          <button onClick={onDelete}>delete</button>
          <Input
            value={value}
            onChange={onChange}
            className={classes.input}
            // contentAfter={<button onClick={onDelete}>delete</button>}
          />
        </div>
      )}
    />
  );
}

export default SectionInput;
