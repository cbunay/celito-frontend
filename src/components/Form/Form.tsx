import {
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  Button,
} from '@fluentui/react-components';
import { useStyles } from './Form.styles';
import { Add12Regular } from '@fluentui/react-icons';
import FormInput from '../FormInput/FormInput';

interface FormProps {
  id: string;
}

export function Form({ id }: FormProps) {
  const classes = useStyles();
  return (
    <AccordionItem value={id}>
      <AccordionHeader
        className={classes.accordionHeader}
        expandIconPosition="end"
      >
        New Section
      </AccordionHeader>
      <AccordionPanel>
        <form className={classes.form}>
          <div className={classes.row}>
            <FormInput />
            <Button className={classes.columnButton} icon={<Add12Regular />}>
              Add Column
            </Button>
          </div>
          <Button className={classes.rowbutton} icon={<Add12Regular />}>
            Add Row
          </Button>
        </form>
      </AccordionPanel>
    </AccordionItem>
  );
}

export default Form;
