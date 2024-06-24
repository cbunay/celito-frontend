import {
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  Button,
} from '@fluentui/react-components';
import { useStyles } from './Form.styles';
import { Add12Regular } from '@fluentui/react-icons';
import FormInput from '../FormInput/FormInput';

export function Form() {
  const classes = useStyles();
  return (
    <AccordionItem value="1">
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
            <FormInput />
            <FormInput />
          </div>
          <Button className={classes.button} icon={<Add12Regular />}>
            Add Row
          </Button>
        </form>
      </AccordionPanel>
    </AccordionItem>
  );
}

export default Form;
