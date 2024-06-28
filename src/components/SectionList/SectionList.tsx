import { Button } from '@fluentui/react-components';
import { Add12Regular } from '@fluentui/react-icons';
import SectionInput from '../SectionInput/SectionInput';
import { useStyles } from './SectionList.styles';
import { useFieldArray, useFormContext } from 'react-hook-form';

export function SectionList() {
  const classes = useStyles();
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'sections',
  });

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
        onClick={() => append({ id: '', label: '', rows: [] })}
      >
        Add Section
      </Button>
    </div>
  );
}

export default SectionList;
