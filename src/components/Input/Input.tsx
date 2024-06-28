import { Button, Combobox, Field, Option } from '@fluentui/react-components';
import { Add12Regular, ReOrder16Regular } from '@fluentui/react-icons';
import { ReactNode, useState } from 'react';
import { useStyles } from './Input.styles';
import { Size } from '../../constans/size';
import { Controller, useFormContext } from 'react-hook-form';
import { Input } from '../../hooks/useLayoutForm';

interface InpupProps {
  width: number;
  children: ReactNode;
  input: Input;
  name: string;
}

export function RowInput({
  width = Size.small,
  children,
  input,
  name,
}: InpupProps) {
  const classes = useStyles();
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const [edit, setEdit] = useState(false);
  const inputSize = `${width}%`;

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
              // validationState={errors.viewType && 'error'}
              // validationMessage={errors.viewType?.message}
              // className={classes.field}
            >
              <Controller
                name={`${name}.label` as const}
                control={control}
                defaultValue={''}
                render={({ field: { onChange, value } }) => (
                  <Combobox
                    expandIcon={null}
                    value={value}
                    className={classes.dropdown}
                    onOptionSelect={(_, data) => {
                      onChange(data.optionText);
                    }}
                  >
                    <Option>Reds</Option>
                    <Option>Green</Option>
                    <Option>Blue</Option>
                  </Combobox>
                )}
              />
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
