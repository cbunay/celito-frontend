import { makeStyles, tokens } from '@fluentui/react-components';

export const useStyles = makeStyles({
  container: {
    display: 'grid',
    paddingBlock: tokens.spacingHorizontalL,
    gap: tokens.spacingVerticalM,
  },
  designRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: tokens.spacingHorizontalS,
    '@media (width < 601px)': {
      gridTemplateColumns: '1fr',
    },
  },
  field: {
    fontWeight: tokens.fontWeightSemibold,
  },
  searchBox: {
    maxWidth: 'none',
  },
  sectionsLayout: {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    gap: tokens.spacingVerticalM,
  },
  sectionsContainer: {
    backgroundColor: 'red',
  },

  formsContainer: {
    backgroundColor: 'red',
  },
});