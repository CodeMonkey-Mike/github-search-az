import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Search from '../Search';

it('should render search field', () => {
  const { getByPlaceholderText } = render(<Search />);
  expect(getByPlaceholderText(/search/i)).toBeTruthy();
});

it('should update input value onChange', async () => {
  const { container } = render(<Search />);
  const searchField = container.querySelector('input') as HTMLInputElement;
  expect(searchField.value).toBe('');
  fireEvent.change(searchField, {
    target: {
      value: 'a',
    },
  });

  expect(searchField.value).toBe('a');
});
