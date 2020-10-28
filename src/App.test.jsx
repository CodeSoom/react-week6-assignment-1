import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

describe('App', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [],
      categories: [],
      restaurants: [],
    }));
  });

  it('renders App', () => {
    const { getByText } = render((
      <MemoryRouter>
        <App />
      </MemoryRouter>
    ));

    expect(getByText('헤더')).not.toBeNull();
  });

  context('with path /', () => {
    it('renders the Home page', () => {
      const { container } = render((
        <MemoryRouter>
          <App />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('Home');
    });
  });

  context('with path /about', () => {
    it('renders the About page', () => {
      const { container } = render((
        <MemoryRouter initialEntries={['/about']}>
          <App />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('About');
    });
  });

  context('with path /restaurants', () => {
    it('renders the Restaurants page', () => {
      const { container } = render((
        <MemoryRouter initialEntries={['/restaurants']}>
          <App />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('서울');
      expect(container).toHaveTextContent('한식');
    });
  });

  context('without path', () => {
    it('renders the NotFound page', () => {
      const { container } = render((
        <MemoryRouter initialEntries={['/xxxx']}>
          <App />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('404 Not Found');
    });
  });
});
