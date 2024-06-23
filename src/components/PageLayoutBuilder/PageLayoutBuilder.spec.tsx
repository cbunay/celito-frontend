import { render } from '@testing-library/react';

import PageLayoutBuilder from './PageLayoutBuilder';

describe('PageLayoutBuilder', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PageLayoutBuilder />);
    expect(baseElement).toBeTruthy();
  });
});
