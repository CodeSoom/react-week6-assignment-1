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
      regions: [
        { id: 1, name: '서울' },
      ],
      categories: [
        { id: 1, name: '한식' },
      ],
      restaurants: [
        { id: 1, name: '마법사주방' },
      ],
    }));
  });

  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  context('with path /', () => {
    it('renders the / page', () => {
      const { queryByText } = renderApp({ path: '/' });

      expect(queryByText('Home')).not.toBeNull();
      expect(queryByText('About')).not.toBeNull();
      expect(queryByText('Restaurants')).not.toBeNull();
    });
  });

  context('with path /about', () => {
    it('renders the /about page', () => {
      const { queryByText } = renderApp({ path: '/about' });

      expect(queryByText('About')).not.toBeNull();
      expect(queryByText('About 페이지 입니다.')).not.toBeNull();
    });
  });

  context('with path /restaurants', () => {
    it('renders the /restaurants page', () => {
      const { queryByText } = renderApp({ path: '/restaurants' });

      expect(queryByText('서울')).not.toBeNull();
      expect(queryByText('한식')).not.toBeNull();
    });
  });

  context('with invalid page', () => {
    it('renders the NotFound page', () => {
      const { queryByText } = renderApp({ path: '/NotFoundPage' });

      expect(queryByText('404 Not Found')).not.toBeNull();
    });
  });
});
