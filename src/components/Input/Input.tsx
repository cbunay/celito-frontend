import { Button, Combobox, Option } from '@fluentui/react-components';
import { Add12Regular, ReOrder16Regular } from '@fluentui/react-icons';
import { useState } from 'react';
import InputMenu from '../InputMenu/InputMenu';
import { useStyles } from './Input.styles';

interface InpupProps {
  width?: string;
}

export function Input({ width = '33%' }: InpupProps) {
  const classes = useStyles();
  const [edit, setEdit] = useState(false);

  return (
    <div style={{ width }} className={classes.input}>
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
      <InputMenu />
    </div>
  );
}

export default Input;
