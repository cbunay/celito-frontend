import { Button } from '@fluentui/react-components';
import { Add12Regular } from '@fluentui/react-icons';
import Input from '../Input/Input';
import { useStyles } from './Section.styles';

export function Section() {
  const classes = useStyles();
  return (
    <div className={classes.form}>
      <div className={classes.row}>
        <Input />
        <Button className={classes.columnButton} icon={<Add12Regular />}>
          Add Column
        </Button>
      </div>
      <Button className={classes.rowbutton} icon={<Add12Regular />}>
        Add Row
      </Button>
    </div>
  );
}

export default Section;
