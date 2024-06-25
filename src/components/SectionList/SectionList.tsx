import { Button } from '@fluentui/react-components';
import SectionInput from '../SectionInput/SectionInput';
import { useStyles } from './SectionList.styles';
import { Add12Regular } from '@fluentui/react-icons';
import { useLayoutForm } from '../../hooks/useLayoutForm';

export function SectionList() {
  const classes = useStyles();
  const { control, fields, append, remove } = useLayoutForm();
  return (
    <div className={classes.sectionsContainer}>
      {fields.map((section, sectionIndex) => (
        <SectionInput
          key={section.id}
          onDelete={() => remove(sectionIndex)}
          control={control}
          name={`sections[${sectionIndex}].label`}
        />
      ))}
      <Button
        className={classes.button}
        icon={<Add12Regular />}
        onClick={() => append({ label: '' })}
      >
        Add section
      </Button>
    </div>
  );
}

export default SectionList;
