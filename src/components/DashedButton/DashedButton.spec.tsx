import { render } from '@testing-library/react';

import AddSection from './AddSection';

describe('AddSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddSection />);
    expect(baseElement).toBeTruthy();
  });
});
