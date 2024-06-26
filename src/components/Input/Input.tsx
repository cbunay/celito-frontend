import { Button, Combobox, Option } from '@fluentui/react-components';
import { Add12Regular, ReOrder16Regular } from '@fluentui/react-icons';
import { useState } from 'react';
import InputMenu from '../InputMenu/InputMenu';
import { useStyles } from './Input.styles';
import { Size } from '../../constans/size';

interface InpupProps {
  width: number;
  onRemove: () => void;
}

export function Input({ width = Size.small, onRemove }: InpupProps) {
  const classes = useStyles();
  const [edit, setEdit] = useState(false);
  const inputSize = `${width}%`;

  return (
    <div
      style={{ width: inputSize, minWidth: inputSize, maxWidth: inputSize }}
      className={classes.input}
    >
      {edit ? (
        <>
          <ReOrder16Regular className={classes.reorderIcon} />
          <Combobox className={classes.dropdown} expandIcon={null}>
            <Option>Reds</Option>
            <Option>Green</Option>
            <Option>Blue</Option>
          </Combobox>
        </>
      ) : (
        <>
          <Add12Regular />
          <Button
            appearance="transparent"
            className={classes.button}
            onClick={() => setEdit(true)}
          >
            Add Input
          </Button>
        </>
      )}
      <InputMenu onRemove={onRemove} />
    </div>
  );
}

export default Input;
