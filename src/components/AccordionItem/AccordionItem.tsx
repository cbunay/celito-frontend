import {
  AccordionHeader,
  AccordionPanel,
  AccordionItem as CustomAccordion,
  makeStyles,
  tokens,
} from '@fluentui/react-components';
import { ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';

const useStyles = makeStyles({
  accordionHeader: {
    backgroundColor: tokens.colorNeutralBackground3,
    '> button': {
      lineHeight: '3.5rem',
      borderRadius: tokens.borderRadiusXLarge,
      fontWeight: tokens.fontWeightBold,
    },
  },
  accordionPanel: {
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalL,
  },
  dimmedText: {
    fontWeight: tokens.fontWeightRegular,
    color: tokens.colorNeutralForegroundDisabled,
  },
});

interface CustomAccordionItemProps {
  value: string;
  children: ReactNode;
  index: number;
}

const AccordionItem = ({
  value,
  children,
  index,
}: CustomAccordionItemProps) => {
  const classes = useStyles();
  const { watch } = useFormContext();
  const label = watch(`sections.${index}.label`, '');

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
      <AccordionPanel className={classes.accordionPanel}>
        {children}
      </AccordionPanel>
    </CustomAccordion>
  );
};

export default AccordionItem;
