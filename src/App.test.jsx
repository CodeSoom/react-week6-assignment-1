import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions: [
      { id: 100, name: '경기도 용인' },
    ],
    categories: [],
    restaurants: [],
  }));

  context('link to /', () => {
    it('renders HomePage', () => {
      const { container } = render((
        <MemoryRouter>
          <App />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('헤더');
    });
  });

  function renderComponent(address) {
    return (
      render((
        <MemoryRouter initialEntries={[address]}>
          <App />
        </MemoryRouter>
      ))
    );
  }

  context('link to /about', () => {
    it('renders AboutPage', () => {
      const { container } = renderComponent('/about');

      expect(container).toHaveTextContent('This service is for 6-1 assignment');
    });
  });

  context('link to /restaurants', () => {
    it('renders RestaurantsPage', () => {
      const { container } = renderComponent('/restaurants');

      expect(container).toHaveTextContent('경기도 용인');
    });
  });

  context('fail to link', () => {
    it('renders NotFoundPage', () => {
      const { container } = renderComponent('/fail to render');

      expect(container).toHaveTextContent('404');
    });
  });
});
