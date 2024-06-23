import { makeStyles, tokens } from '@fluentui/react-components';

export const useStyles = makeStyles({
  input: {
    borderRadius: tokens.borderRadiusXLarge,
    lineHeight: '3.5rem',
    width: ' 100%',
    backgroundColor: tokens.colorBrandBackgroundSelected,
    color: 'white',
    '> input': {
      color: tokens.colorNeutralForegroundInverted,
    },
    '::after': {
      borderBottom: 'none',
    },
  },
  icon: {
    color: tokens.colorNeutralForegroundInverted,
    height: '.85rem',
  },
});
