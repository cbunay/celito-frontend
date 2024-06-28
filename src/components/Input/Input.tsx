import { Button, Combobox, Field, Option } from '@fluentui/react-components';
import { Add12Regular, ReOrder16Regular } from '@fluentui/react-icons';
import { ReactNode, useState } from 'react';
import { Path, useFormContext } from 'react-hook-form';
import { Size } from '../../constans/size';
import { useStyles } from './Input.styles';
import { Layout } from '../../hooks/useLayoutForm';

interface InpupProps {
  width: number;
  children: ReactNode;
  name: string;
  indexes: number[];
}

export function RowInput({
  width = Size.small,
  children,
  name,
  indexes,
}: InpupProps) {
  const classes = useStyles();
  const {
    register,
    formState: { errors },
  } = useFormContext<Layout>();

  const [edit, setEdit] = useState(false);
  const inputSize = `${width}%`;

  const fieldError =
    errors.sections?.[indexes[0]]?.rows?.[indexes[1]]?.inputs?.[indexes[0]]
      ?.label;
  return (
    <div
      style={{
        width: inputSize,
        minWidth: inputSize,
        maxWidth: inputSize,
        paddingInline: '5px',
      }}
    >
      <div className={classes.input}>
        {edit ? (
          <>
            <ReOrder16Regular className={classes.reorderIcon} />
            <Field
              required
              // validationState={fieldError && 'error'}
              // validationMessage={fieldError?.message}
              // className={classes.field}
            >
              <Combobox
                expandIcon={null}
                className={classes.dropdown}
                {...register(name as Path<Layout>)}
              >
                <Option value="asd1">Reds</Option>
                <Option value="asd2">Green</Option>
                <Option value="asd3">Blue</Option>
              </Combobox>
            </Field>
          </>
        ) : (
          <>
            <Add12Regular />
            <Button
              appearance="transparent"
              className={classes.button}
              onClick={() => setEdit(true)}
            >
              Add Input
            </Button>
          </>
        )}
        {children}
      </div>
    </div>
  );
}

export default RowInput;
