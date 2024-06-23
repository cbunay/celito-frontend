import { render } from '@testing-library/react';

import SectionInput from './SectionInput';

describe('SectionInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SectionInput />);
    expect(baseElement).toBeTruthy();
  });
});
