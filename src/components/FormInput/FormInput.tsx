import { Button, Combobox, Option } from '@fluentui/react-components';
import {
  Add12Regular,
  MoreHorizontal16Filled,
  ReOrder16Regular,
} from '@fluentui/react-icons';
import { useState } from 'react';
import { useStyles } from './FormInput.styles';

export function Inputs() {
  const classes = useStyles();
  const [edit, setEdit] = useState(false);

  return (
    <div className={classes.input}>
      {edit && (
        <>
          <ReOrder16Regular className={classes.reorderIcon} />
          <Combobox className={classes.dropdown} expandIcon={null}>
            <Option>Reds</Option>
            <Option>Green</Option>
            <Option>Blue</Option>
          </Combobox>
        </>
      )}
      {!edit && (
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
      <MoreHorizontal16Filled />
    </div>
  );
}

export default Inputs;
