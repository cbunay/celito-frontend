import { Accordion } from '@fluentui/react-components';
import AccordionItem from '../AccordionItem/AccordionItem';
import Form from '../Form/Form';
import { useStyles } from './Accordion.styles';

export function CustomAccordion() {
  const classes = useStyles();
  return (
    <Accordion
      defaultOpenItems={['1']}
      collapsible
      multiple
      className={classes.formlist}
    >
      <AccordionItem value="1" label="new section">
        <Form />
      </AccordionItem>
      <AccordionItem value="2" label="new section">
        <Form />
      </AccordionItem>
    </Accordion>
  );
}

export default CustomAccordion;
