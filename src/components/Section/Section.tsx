import { Button } from '@fluentui/react-components';
import { Add12Regular } from '@fluentui/react-icons';
import Input from '../Input/Input';
import { useStyles } from './Section.styles';
import { useFormContext } from 'react-hook-form';

export function Section() {
  const classes = useStyles();
  const { getValues } = useFormContext();

  return (
    <div className={classes.form}>
      {/* <div className={classes.row}>
        <Input width="33%" />
        <Button className={classes.columnButton} icon={<Add12Regular />}>
          Add Column
        </Button>
      </div> */}

      {}
      <Button className={classes.rowbutton} icon={<Add12Regular />}>
        Add Row
      </Button>
    </div>
  );
}

export default Section;
