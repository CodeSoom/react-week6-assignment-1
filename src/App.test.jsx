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

  context('"/" path 에서는', () => {
    it('HOME이 보여야 한다.', () => {
      const { container } = render((
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('HOME');
    });
  });

  context('"/about" path 에서는', () => {
    it('Abount이 보여야 한다.', () => {
      const { container } = render((
        <MemoryRouter initialEntries={['/about']}>
          <App />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('About');
    });
  });

  context('"/restaurants" path 에서는', () => {
    it('Restaurants가 보여야 한다.', () => {
      const { container } = render((
        <MemoryRouter initialEntries={['/restaurants']}>
          <App />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('Restaurants');
    });

    it('지역들이 보여야 한다.', () => {
      const { container } = render((
        <MemoryRouter initialEntries={['/restaurants']}>
          <App />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('서울');
    });
  });

  context('잘못된 path 에서는', () => {
    it('Not Found가 보여야 한다.', () => {
      const { container } = render((
        <MemoryRouter initialEntries={['/xxx']}>
          <App />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('Not Found');
    });
  });
});
