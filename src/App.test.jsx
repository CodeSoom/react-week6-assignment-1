import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

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

  context('Show homepage with path /', () => {
    it('renders the index page', () => {
      const { queryByText } = renderApp({ path: '/' });

      expect(queryByText('헤더')).not.toBeNull();
      expect(queryByText('About')).not.toBeNull();
      expect(queryByText('Restaurants')).not.toBeNull();
    });
  });

  context('Show about page with path /', () => {
    it('renders the about page', () => {
      const { queryByText } = renderApp({ path: '/about' });

      expect(queryByText('소개 페이지입니다.')).not.toBeNull();
    });
  });

  context('Show restaurants page with path /', () => {
    it('renders the restaurants page', () => {
      const { queryByText } = renderApp({ path: '/restaurants' });

      expect(queryByText('서울')).not.toBeNull();
    });
  });
});
