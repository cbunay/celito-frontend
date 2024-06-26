import { Button } from '@fluentui/react-components';
import { Add12Regular } from '@fluentui/react-icons';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { Layout } from '../../hooks/useLayoutForm';

import { Size } from '../../constans/size';
import Input from '../Input/Input';
import { useStyles } from './Row.styles';

interface Row {
  sectionIndex: number;
  rowIndex: number;
}

export function Row({ sectionIndex, rowIndex }: Row) {
  const classes = useStyles();
  const { control } = useFormContext<Layout>();
  const {
    fields: inputs,
    append,
    remove,
  } = useFieldArray({
    control,
    name: `sections.${sectionIndex}.rows.${rowIndex}.inputs`,
  });

  const totalUsedSpace = inputs.reduce((total, input) => total + input.size, 0);
  const isSpaceAvailable = totalUsedSpace <= Size.large;

  console.log(inputs);
  return (
    <div className={classes.row}>
      {inputs.map((input, index) => (
        <Input
          key={input.id}
          width={input.size}
          onRemove={() => {
            remove(index);
          }}
        />
      ))}
      {isSpaceAvailable && (
        <Button className={classes.columnButton} icon={<Add12Regular />}>
          Add Column
        </Button>
      )}
    </div>
  );
}

export default Row;
