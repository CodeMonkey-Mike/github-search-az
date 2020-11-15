import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from '..';

it('should render layout', async () => {
  const { getByText, container } = render(
    <BrowserRouter>
      <Layout>
        <div id="test-el">Hello world</div>
      </Layout>
    </BrowserRouter>
  );

  const div = container.querySelectorAll('div');
  const svg = container.querySelectorAll('svg');
  const testEl = container.querySelector('#test-el');
  expect(testEl).toBeTruthy();
  expect(div.length).toBe(61);
  expect(svg.length).toBe(9);
  expect(getByText(/Hello world/)).toBeTruthy();
});
