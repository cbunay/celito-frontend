import { render } from '@testing-library/react';

import SectionList from './SectionList';

describe('SectionList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SectionList />);
    expect(baseElement).toBeTruthy();
  });
});
