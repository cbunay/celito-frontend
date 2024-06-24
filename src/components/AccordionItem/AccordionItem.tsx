import {
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  makeStyles,
  tokens,
} from '@fluentui/react-components';
import { ReactNode } from 'react';

const useStyles = makeStyles({
  accordionHeader: {
    backgroundColor: tokens.colorNeutralBackground3,
    '> button': {
      lineHeight: '3.5rem',
      borderRadius: tokens.borderRadiusXLarge,
      fontWeight: tokens.fontWeightBold,
    },
  },
});

interface CustomAccordionItemProps {
  value: string;
  label: string;
  children: ReactNode;
}

const CustomAccordionItem = ({
  value,
  label,
  children,
}: CustomAccordionItemProps) => {
  const classes = useStyles();
  return (
    <AccordionItem value={value}>
      <AccordionHeader
        className={classes.accordionHeader}
        expandIconPosition="end"
      >
        {label}
      </AccordionHeader>
      <AccordionPanel>{children}</AccordionPanel>
    </AccordionItem>
  );
};

export default CustomAccordionItem;
