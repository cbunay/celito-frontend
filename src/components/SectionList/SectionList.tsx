import { Button } from '@fluentui/react-components';
import SectionInput from '../SectionInput/SectionInput';
import { useStyles } from './SectionList.styles';
import { Add12Regular } from '@fluentui/react-icons';

export function SectionList() {
  const classes = useStyles();
  return (
    <div className={classes.sectionsContainer}>
      <SectionInput />
      <SectionInput />
      <Button className={classes.button} icon={<Add12Regular />}>
        Add section
      </Button>
    </div>
  );
}

export default SectionList;
