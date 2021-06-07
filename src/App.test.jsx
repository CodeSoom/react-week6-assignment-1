import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

describe('App', () => {
  beforeEach(() => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [],
      categories: [],
      restaurants: [],
    }));
  });

  it('renders Home', () => {
    const { container } = render((
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('Home');
  });

  it('renders About', () => {
    const { container } = render((
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('About');

  });

  it('renders Restaurants', () => {
    const { container } = render((
      <MemoryRouter initialEntries={['/restaurants']}>
        <App />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('서울');
  });

  it('renders Not Found', () => {
    const { container } = render((
      <MemoryRouter initialEntries={['/xxx']}>
        <App />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('404 Not Found');
  });
});
