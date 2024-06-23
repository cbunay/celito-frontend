import { render } from '@testing-library/react';

import FormList from './FormList';

describe('FormList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormList />);
    expect(baseElement).toBeTruthy();
  });
});
