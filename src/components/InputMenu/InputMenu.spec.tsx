import { render } from '@testing-library/react';

import InputMenu from './InputMenu';

describe('InputMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InputMenu />);
    expect(baseElement).toBeTruthy();
  });
});
