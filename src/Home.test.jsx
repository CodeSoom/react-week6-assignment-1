import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import Home from './Home';

const renderHome = () =>
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
  );

describe('Home', () => {
  const links = ['헤더', 'Home', 'About', 'Restaurants', 'Invalid'];
  it('서브 페이지 링크가 존재한다.', () => {
    const { container } = renderHome();

    links.forEach((link) => {
      expect(container).toHaveTextContent(link);
    });
  });
});
