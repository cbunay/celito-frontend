import { Button } from '@fluentui/react-components';
import { Add12Regular } from '@fluentui/react-icons';
import { Layout, Row } from '../../hooks/useLayoutForm';
import { useStyles } from './Section.styles';
import Input from '../Input/Input';
import { useFieldArray, useFormContext } from 'react-hook-form';
import InputsRow from '../Row/Row';

enum size {
  small = '33%',
  medium = '50%',
  large = '66%',
  xlarge = '100%',
}

interface SectionProps {
  index: number;
}

export function Section({ index }: SectionProps) {
  const classes = useStyles();
  const { control } = useFormContext<Layout>();
  const { fields, append } = useFieldArray({
    control,
    name: `sections.${index}.rows`,
  });

  const inputs = [
    {
      label: '',
      size: size.small.toString(),
    },
    {
      label: '',
      size: size.small.toString(),
    },
    {
      label: '',
      size: size.small.toString(),
    },
  ];

  return (
    <div className={classes.form}>
      {fields.map((row, index) => (
        <InputsRow key={row.id} />
      ))}
      <Button
        className={classes.rowbutton}
        icon={<Add12Regular />}
        onClick={() => {
          append({
            inputs,
          });
        }}
      >
        Add Row
      </Button>
    </div>
  );
}

export default Section;
