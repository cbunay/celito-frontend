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
  return (
    <CustomAccordion
      defaultOpenItems={`section-0`}
      collapsible
      multiple
      className={classes.formlist}
    >
      {sections.map((section, index) => (
        <AccordionItem
          key={`${index}-${section}`}
          value={`section-${index}`}
          sectionName={`sections.${index}.label` as const}
        >
          <Section />
        </AccordionItem>
      ))}
    </CustomAccordion>
  );
}

export default Accordion;
