import { Button } from '@fluentui/react-components';
import Input from '../Input/Input';
import { useStyles } from './Row.styles';
import { Add12Regular } from '@fluentui/react-icons';

interface Row {
  index: number;
}

export function Row() {
  const classes = useStyles();
  return (
    <div className={classes.row}>
      <Input width="33%" />
      <Button className={classes.columnButton} icon={<Add12Regular />}>
        Add Column
      </Button>
    </div>
  );
}

export default Row;
