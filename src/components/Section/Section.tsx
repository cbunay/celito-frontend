import { Button } from '@fluentui/react-components';
import { Add12Regular } from '@fluentui/react-icons';
import { Row } from '../../hooks/useLayoutForm';
import { useStyles } from './Section.styles';
import Input from '../Input/Input';

interface SectionProps {
  rows: Row[];
}

export function Section({ rows }: SectionProps) {
  const classes = useStyles();
  console.log(rows);

  return (
    <div className={classes.form}>
      {/* <div className={classes.row}>
        <Input width="33%" />
        <Button className={classes.columnButton} icon={<Add12Regular />}>
          Add Column
        </Button>
      </div> */}

      {rows.map((row) => (
        <div className={classes.row}>
          <Input width="33%" />
          <Button className={classes.columnButton} icon={<Add12Regular />}>
            Add Column
          </Button>
        </div>
      ))}
      <Button className={classes.rowbutton} icon={<Add12Regular />}>
        Add Row
      </Button>
    </div>
  );
}

export default Section;
