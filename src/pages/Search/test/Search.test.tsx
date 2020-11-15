import React from 'react';
import { render } from '@testing-library/react';
import Search from '..';

it('should render Search page', () => {
  const { getByText } = render(<Search />);
  expect(getByText(/Search/)).toBeTruthy();
});
