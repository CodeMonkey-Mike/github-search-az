import React from 'react';
import { render } from '@testing-library/react';
import { GlobalStyle } from '../GlobalStyle';

it('should render GlobalStyle component', () => {
  const { container } = render(<GlobalStyle />);
  const el = container.getElementsByTagName('div');
  expect(el.length).toBe(0);
});
