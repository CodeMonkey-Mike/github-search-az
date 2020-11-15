import React from 'react';
import { render } from '@testing-library/react';
import { Span } from '../Span';

it('should render Span component', () => {
  const { container } = render(<Span variant="normal" />);
  const el = container.getElementsByTagName('span');
  expect(el.length).toBe(1);
});
