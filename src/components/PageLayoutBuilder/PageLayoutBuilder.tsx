import { Field, Input } from '@fluentui/react-components';

export function PageLayoutBuilder() {
  return (
    <div>
      <h1>Welcome to PageLayoutBuilder!</h1>
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

export default PageLayoutBuilder;
