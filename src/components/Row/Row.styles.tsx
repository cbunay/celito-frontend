import { makeStyles, tokens } from '@fluentui/react-components';

export const useStyles = makeStyles({
  row: {
    display: 'flex',
    gap: tokens.spacingHorizontalM,
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
});
