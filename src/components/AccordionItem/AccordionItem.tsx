import {
  AccordionHeader,
  AccordionItem as CustomAccordion,
  AccordionPanel,
  makeStyles,
  tokens,
} from '@fluentui/react-components';
import { ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';
import { Layout } from '../../hooks/useLayoutForm';

const useStyles = makeStyles({
  accordionHeader: {
    backgroundColor: tokens.colorNeutralBackground3,
    '> button': {
      lineHeight: '3.5rem',
      borderRadius: tokens.borderRadiusXLarge,
      fontWeight: tokens.fontWeightBold,
    },
  },
  dimmedText: {
    fontWeight: tokens.fontWeightRegular,
    color: tokens.colorNeutralForegroundDisabled,
  },
});

interface CustomAccordionItemProps {
  value: string;
  children: ReactNode;
  sectionName: string;
}

const Accordion = ({
  value,
  children,
  sectionName,
}: CustomAccordionItemProps) => {
  const classes = useStyles();
  const { watch } = useFormContext();
  const label = watch(sectionName, '');

  return (
    <CustomAccordion value={value}>
      <AccordionHeader
        className={classes.accordionHeader}
        expandIconPosition="end"
      >
        {label === '' ? (
          <span className={classes.dimmedText}>Section Name</span>
        ) : (
          label
        )}
      </AccordionHeader>
      <AccordionPanel>{children}</AccordionPanel>
    </CustomAccordion>
  );
};

export default Accordion;
