import { Accordion as CustomAccordion } from '@fluentui/react-components';

import { useFormContext } from 'react-hook-form';
import { Layout } from '../../hooks/useLayoutForm';
import AccordionItem from '../AccordionItem/AccordionItem';
import Section from '../Section/Section';
import { useStyles } from './Accordion.styles';

export function Accordion() {
  const { getValues } = useFormContext<Layout>();
  const { sections } = getValues();
  const classes = useStyles();
  const defaultOpen = sections.map((_, index) => `accordion.${index}`);

  return (
    <CustomAccordion
      defaultOpenItems={defaultOpen}
      collapsible
      multiple
      className={classes.formlist}
    >
      {sections.map((section, index) => (
        <AccordionItem
          key={`accordion.${index}`}
          value={`accordion.${index}`}
          index={index}
        >
          <Section index={index} />
        </AccordionItem>
      ))}
    </CustomAccordion>
  );
}

export default Accordion;
