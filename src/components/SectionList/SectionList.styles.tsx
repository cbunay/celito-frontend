import { makeStyles, tokens } from '@fluentui/react-components';

export const useStyles = makeStyles({
  sectionsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalM,
    '@media (width < 925px)': {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  },
  button: {
    justifyContent: 'left',
    lineHeight: '2.5rem',
    borderRadius: tokens.borderRadiusXLarge,
    color: tokens.colorBrandForeground1,
    fontWeight: tokens.fontWeightRegular,
    border: `1px dashed ${tokens.colorBrandBackground}`,
    '> span': {
      margin: 0,
    },
    ':hover': {
      color: tokens.colorBrandForeground1,
      border: `1px dashed ${tokens.colorBrandBackground}`,
    },
  },
});
