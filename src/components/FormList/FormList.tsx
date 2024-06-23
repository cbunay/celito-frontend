import { useStyles } from './FormList.styles';

export function FormList() {
  const classes = useStyles();
  return (
    <div className={classes.formsContainer}>
      <h1> FormList!</h1>
    </div>
  );
}

export default FormList;
