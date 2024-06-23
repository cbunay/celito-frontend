import { Field, Input } from '@fluentui/react-components';

export function Design() {
  return (
    <div>
      <Field
        label="Example field"
        validationState="success"
        validationMessage="This is a success message."
      >
        <Input />
      </Field>
    </div>
  );
}

export default Design;
