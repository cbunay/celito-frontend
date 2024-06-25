import { Button } from '@fluentui/react-components';
import SectionInput from '../SectionInput/SectionInput';
import { useStyles } from './SectionList.styles';
import { Add12Regular } from '@fluentui/react-icons';
import { useLayoutForm } from '../../hooks/useLayoutForm';

export function SectionList() {
  const classes = useStyles();
  const { fields, append, remove } = useLayoutForm();
  return (
    <div className={classes.sectionsContainer}>
      {fields.map((section, index) => (
        <SectionInput
          key={section.id}
          onDelete={() => remove(index)}
          index={index}
        />
      ))}
      <Button
        className={classes.button}
        icon={<Add12Regular />}
        onClick={() => append({ label: '' })}
      >
        Add sections
      </Button>
    </div>
  );
}

export default SectionList;
