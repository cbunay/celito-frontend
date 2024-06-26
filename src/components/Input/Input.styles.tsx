import { makeStyles, tokens } from '@fluentui/react-components';

export const useStyles = makeStyles({
  input: {
    boxSizing: 'border-box',
    paddingInline: tokens.spacingHorizontalS,
    overflow: 'hidden',
    minHeight: '1.9rem',
    maxHeight: '1.9rem',
    display: 'grid',
    gridTemplateColumns: 'auto 1fr auto',
    backgroundColor: tokens.colorNeutralBackground2,
    borderRadius: tokens.borderRadiusLarge,
    border: 'none',
    color: tokens.colorBrandForeground2,
    alignItems: 'center',
    ':hover': {
      color: tokens.colorBrandForeground2,
      outline: `1px solid ${tokens.colorBrandBackground}`,
    },
  },
  button: {
    minHeight: '1.9rem',
    maxHeight: '1.9rem',
    paddingLeft: tokens.spacingHorizontalXS,
    fontSize: '.75rem',
    justifyContent: 'left',
    borderRadius: tokens.borderRadiusLarge,
    color: tokens.colorBrandForeground2,
    fontWeight: tokens.fontWeightRegular,
    backgroundColor: tokens.colorNeutralBackground2,
    border: 'none',
    '> span': {
      margin: 0,
    },
  },
  dropdown: {
    width: 'auto',
    minWidth: 'auto',
    fontSize: '.8rem',
    minHeight: '1.9rem',
    maxHeight: '1.9rem',

    borderRadius: tokens.borderRadiusLarge,
    color: tokens.colorBrandForeground1,
    border: 'none',
    backgroundColor: tokens.colorNeutralBackground2,
    '> input': {
      fontSize: '.8rem',
      paddingLeft: tokens.spacingHorizontalXS,
    },
    '::after': {
      borderBottom: 'none',
    },
  },
  reorderIcon: {
    transform: 'rotate(90deg)',
  },
});
