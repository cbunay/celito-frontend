import { makeStyles, tokens } from '@fluentui/react-components';

export const useStyles = makeStyles({
  button: {
    justifyContent: 'left',
    lineHeight: '2.5rem',
    borderRadius: tokens.borderRadiusXLarge,
    color: tokens.colorBrandForeground1,
    fontWeight: tokens.fontWeightRegular,
    border: `1px dashed ${tokens.colorBrandBackground}`,
  },
});
