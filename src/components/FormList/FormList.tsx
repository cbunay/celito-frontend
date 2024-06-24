import { Accordion } from '@fluentui/react-components';
import Form from '../Form/Form';
import { useStyles } from './FormList.styles';

export function FormList() {
  const classes = useStyles();
  return (
    <Accordion collapsible className={classes.formlist}>
      <Form />
      <Form />
    </Accordion>
  );
}

export default FormList;
