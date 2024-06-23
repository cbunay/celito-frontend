import DashedButton from '../DashedButton/DashedButton';
import SectionInput from '../SectionInput/SectionInput';
import { useStyles } from './SectionList.styles';

export function SectionList() {
  const classes = useStyles();
  return (
    <div className={classes.sectionsContainer}>
      <SectionInput />
      <SectionInput />
      <DashedButton>Add Section</DashedButton>
    </div>
  );
}

export default SectionList;
