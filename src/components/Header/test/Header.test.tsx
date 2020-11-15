import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '..';

it('should render header', () => {
  const { getByText, container } = render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  const div = container.querySelectorAll('div');
  const svg = container.querySelectorAll('svg');
  expect(div.length).toBe(29);
  expect(svg.length).toBe(5);
  expect(getByText(/John Mayer/i)).toBeTruthy();
  expect(getByText(/Dashboard/i)).toBeTruthy();
  expect(getByText(/License/i)).toBeTruthy();
  expect(getByText(/Log Out/i)).toBeTruthy();
});
