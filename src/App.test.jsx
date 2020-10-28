import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

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

  context('with path /', () => {
    it('renders HomePage', () => {
      const { container } = render((
        <MemoryRouter>
          <App />
        </MemoryRouter>
      ));
      expect(container).toHaveTextContent('Home');
    });
  });

  context('with path /AboutPage', () => {
    it('renders About', () => {
      const { container } = render((
        <MemoryRouter initialEntries={['/AboutPage']}>
          <App />
        </MemoryRouter>
      ));
      expect(container).toHaveTextContent('About 페이지 입니다.');
    });
  });

  context('with path /RestaurantsPage', () => {
    it('renders RestaurantsPage', () => {
      const { container } = render((
        <MemoryRouter initialEntries={['/RestaurantsPage']}>
          <App />
        </MemoryRouter>
      ));
      expect(container).toHaveTextContent('서울');
      expect(container).toHaveTextContent('한식');
    });
  });
});
