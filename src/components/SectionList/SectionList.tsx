import { Button } from '@fluentui/react-components';
import { Add12Regular } from '@fluentui/react-icons';
import {
  FieldArrayWithId,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
} from 'react-hook-form';
import { Layout, Section } from '../../hooks/useLayoutForm';
import SectionInput from '../SectionInput/SectionInput';
import { useStyles } from './SectionList.styles';

interface SectionListProps {
  fields: FieldArrayWithId<Section>[];
  append: UseFieldArrayAppend<Layout, 'sections'>;
  remove: UseFieldArrayRemove;
}

export function SectionList({ append, remove, fields }: SectionListProps) {
  const classes = useStyles();

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
