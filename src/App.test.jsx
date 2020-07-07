import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

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

  context('at all path', () => {
    it('render header', () => {
      const { getByText } = renderApp({ path: '/' });

      expect(getByText('헤더')).not.toBeNull();
    });
  });

  context('click header', () => {
    it('render home', () => {
      const { getByText } = renderApp({ path: '/restaurants' });

      fireEvent.click(getByText('헤더'));
      expect(getByText('Home')).not.toBeNull();
    });
  });

  context('at path /', () => {
    it('render home', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('Home');
      expect(container).toHaveTextContent('About');
      expect(container).toHaveTextContent('Restaurants');
    });
  });

  context('at path /about', () => {
    it('render about', () => {
      const { container } = renderApp({ path: '/about' });

      expect(container).toHaveTextContent('페이지입니다.');
    });
  });

  context('at path /restaurants', () => {
    it('render about', () => {
      const { container } = renderApp({ path: '/restaurants' });

      expect(container).toHaveTextContent('서울');
    });
  });
});
