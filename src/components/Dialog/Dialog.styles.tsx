import { makeStyles, tokens } from '@fluentui/react-components';

export const useStyles = makeStyles({
  closeButton: {
    display: 'flex',
    justifyContent: 'center',
    padding: '.5rem',
  },
  closeIcon: {
    transform: 'rotate(45deg)',
  },
  dialogSurface: {
    padding: 0,
    maxWidth: 'unset',
    height: 'auto',
    backgroundColor: 'transparent',
  },
  dialogDackdrop: {
    backgroundColor: `rgba(0, 0, 0, 0.9)`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  dialogBody: {
    gap: 0,
    backgroundColor: tokens.colorNeutralBackground1,
    borderRadius: tokens.borderRadiusLarge,
    height: '100vh',
  },
  dialogTitle: {
    fontSize: tokens.fontSizeBase400,
    paddingBlock: tokens.spacingHorizontalS,
    paddingInline: tokens.spacingVerticalL,
    borderTopLeftRadius: tokens.borderRadiusLarge,
    borderTopRightRadius: tokens.borderRadiusLarge,
    backgroundColor: tokens.colorNeutralBackground2,
  },
  dialogContent: {
    paddingInline: tokens.spacingHorizontalM,
    paddingTop: 0,
  },
  dialogActions: {
    paddingBlock: tokens.spacingHorizontalL,
    paddingInline: tokens.spacingVerticalL,
    backgroundColor: tokens.colorNeutralBackground2,
    borderBottomLeftRadius: tokens.borderRadiusLarge,
    borderBottomRightRadius: tokens.borderRadiusLarge,
    justifyContent: 'space-between',
    width: '100%',
  },
  tabPanels: {
    padding: '0 10px',
  },

  cancelButton: {
    color: tokens.colorBrandForegroundLink,
  },
});
