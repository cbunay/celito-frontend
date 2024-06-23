import { Input } from '@fluentui/react-components';
import { Delete16Regular } from '@fluentui/react-icons';
import { useStyles } from './SectionInput.Styles';

export function SectionInput() {
  const classes = useStyles();
  return (
    <Input
      className={classes.input}
      color="red"
      contentAfter={<Delete16Regular className={classes.icon} />}
    />
  );
}

export default SectionInput;
