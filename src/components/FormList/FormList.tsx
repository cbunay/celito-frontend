import { Accordion } from '@fluentui/react-components';
import Form from '../Form/Form';
import { useStyles } from './FormList.styles';

export function FormList() {
  const classes = useStyles();
  return (
    <Accordion
      defaultOpenItems={['1']}
      collapsible
      multiple
      className={classes.formlist}
    >
      <Form id="1" />
      <Form id="2" />
    </Accordion>
  );
}

export default FormList;
