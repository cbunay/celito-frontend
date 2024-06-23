import { useStyles } from './SectionList.styles';

export function SectionList() {
  const classes = useStyles();
  return (
    <div className={classes.sectionsContainer}>
      <h1>SectionList!</h1>
    </div>
  );
}

export default SectionList;
