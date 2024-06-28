import { makeStyles, tokens } from '@fluentui/react-components';

export const useStyles = makeStyles({
  container: {
    display: 'grid',
    paddingBlock: tokens.spacingHorizontalM,
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
    gap: tokens.spacingHorizontalM,
    '> :only-child': {
      gridColumn: 'span 2',
    },
    '@media (width < 925px)': {
      gridTemplateColumns: '1fr',
    },
  },
});
