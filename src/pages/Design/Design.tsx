import {
  Checkbox,
  Combobox,
  Field,
  Input,
  Option,
} from '@fluentui/react-components';
import { SearchRegular } from '@fluentui/react-icons';
import { useStyles } from './Design.styles';
import SectionList from '../../components/SectionList/SectionList';
import Accordion from '../../components/Accordion/Accordion';

export function Design() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.designRow}>
        <Field
          required
          label="Label"
          // validationState="success"
          // validationMessage="This is a success message."
          className={classes.field}
        >
          <Input />
        </Field>
        <Field
          label="View Type"
          // validationState="success"
          // validationMessage="This is a success message."
          className={classes.field}
        >
          <Combobox
            appearance="outline"
            // className={classes.searchBox}
            expandIcon={<SearchRegular />}
          >
            <Option>Create</Option>
            <Option>Edit</Option>
            <Option>View</Option>
          </Combobox>
        </Field>
      </div>
      <Checkbox checked={true} label="Show Sections" />
      <div className={classes.sectionsLayout}>
        <SectionList />
        <Accordion />
      </div>
    </div>
  );
}

export default Design;
