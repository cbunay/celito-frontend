import { render } from '@testing-library/react';

import AccordionItem from './AccordionItem';

describe('Accordion', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <AccordionItem label="new" value="s">
        sample text
      </AccordionItem>
    );
    expect(baseElement).toBeTruthy();
  });
});
