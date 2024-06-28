import { Button } from '@fluentui/react-components';
import { Add12Regular } from '@fluentui/react-icons';
import { useFieldArray, useFormContext } from 'react-hook-form';

import { Layout } from '../../hooks/useLayoutForm';
import InputsRow from '../Row/Row';
import { useStyles } from './Section.styles';
import { Size } from '../../constans/size';

interface SectionProps {
  index: number;
}

export function Section({ index }: SectionProps) {
  const classes = useStyles();
  const { control, setValue } = useFormContext<Layout>();
  const { fields, append } = useFieldArray({
    control,
    name: `sections.${index}.rows`,
  });

  const inputs = [
    {
      label: '',
      size: Size.small,
    },
    {
      label: '',
      size: Size.small,
    },
    {
      label: '',
      size: Size.small,
    },
  ];

  return (
    <div className={classes.form}>
      {fields.map((row, rowIndex) => {
        setValue(`sections.${index}.rows.${rowIndex}.id`, `row.${rowIndex}`);
        return (
          <InputsRow key={row.id} rowIndex={rowIndex} sectionIndex={index} />
        );
      })}
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
