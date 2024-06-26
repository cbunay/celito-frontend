import { Button, Combobox, Option } from '@fluentui/react-components';
import { Add12Regular, ReOrder16Regular } from '@fluentui/react-icons';
import { ReactNode, useState } from 'react';
import { useStyles } from './Input.styles';
import { Size } from '../../constans/size';

interface InpupProps {
  width: number;
  children: ReactNode;
}

export function Input({ width = Size.small, children }: InpupProps) {
  const classes = useStyles();
  const [edit, setEdit] = useState(false);
  const inputSize = `${width}%`;

  return (
    <div
      style={{
        width: inputSize,
        minWidth: inputSize,
        maxWidth: inputSize,
        paddingInline: '5px',
        display: 'inline-block',
      }}
    >
      <div className={classes.input}>
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
        {children}
      </div>
    </div>
  );
}

export default Input;
