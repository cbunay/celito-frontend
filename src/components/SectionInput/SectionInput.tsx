import { Input } from '@fluentui/react-components';
import { Delete16Regular } from '@fluentui/react-icons';
import { useStyles } from './SectionInput.Styles';
import { Controller, Control } from 'react-hook-form';

interface SectionInputProps {
  name: string;
  onDelete: () => void;
  control: Control;
}

export function SectionInput({ name, onDelete, control }: SectionInputProps) {
  const classes = useStyles();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Input
          value={value}
          className={classes.input}
          onChange={(_, data) => {
            onChange(data.value);
          }}
          contentAfter={
            <Delete16Regular onClick={onDelete} className={classes.icon} />
          }
        />
      )}
    />
  );
}

export default SectionInput;
