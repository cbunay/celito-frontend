import { makeStyles, tokens } from '@fluentui/react-components';

export const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginBlock: tokens.spacingVerticalL,
    gap: tokens.spacingVerticalL,
  },
  accordionHeader: {
    backgroundColor: tokens.colorNeutralBackground3,
    '> button': {
      lineHeight: '3.5rem',
      borderRadius: tokens.borderRadiusXLarge,
      fontWeight: tokens.fontWeightBold,
    },
  },
  columnButton: {
    minHeight: '1.9rem',
    maxHeight: '1.9rem',
    fontSize: '.75rem',
    backgroundColor: tokens.colorNeutralBackground2,
    border: 'none',
    fontWeight: tokens.fontWeightRegular,
    color: tokens.colorBrandForeground1,
    '> span': {
      margin: 0,
    },
    ':hover': {
      color: tokens.colorBrandForeground2,
    },
  },
  rowbutton: {
    backgroundColor: tokens.colorNeutralBackground2,
    border: 'none',
    width: '100%',
    fontWeight: tokens.fontWeightRegular,
    color: tokens.colorBrandForeground1,
    '> span': {
      margin: 0,
    },
    ':hover': {
      color: tokens.colorBrandForeground2,
    },
  },
  row: {
    display: 'flex',
    gap: tokens.spacingHorizontalM,
  },
});
