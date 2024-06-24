import { makeStyles, tokens } from '@fluentui/react-components';

export const useStyles = makeStyles({
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
