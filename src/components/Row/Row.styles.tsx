import { makeStyles, tokens } from '@fluentui/react-components';

export const useStyles = makeStyles({
  row: {
    // display: 'flex',
    // flexWrap: 'wrap',
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
  formlist: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalL,
  },

  subMenuItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  icon: {
    width: '16px',
    color: tokens.colorBrandForeground2,
  },
  checkmarIcon: {
    color: tokens.colorPaletteLightGreenBackground3,
  },
  deleteIcon: {
    width: '16px',
    color: tokens.colorPaletteRedBackground3,
  },
});
