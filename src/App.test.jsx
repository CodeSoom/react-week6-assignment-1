import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

describe('App', () => {
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

  const mockLocation = (pathname) => {
    delete window.location;
    window.location = new URL(`..${pathname}`, 'https://www.example.com');
  };

  describe('routes pages through pathname', () => {
    context('when pathname is /restaurants', () => {
      beforeEach(() => {
        mockLocation('/restaurants');
      });

      it('shows restaurants page', () => {
        const { queryByText } = render((
          <App />
        ));

        expect(queryByText('서울')).not.toBeNull();
        expect(queryByText('한식')).not.toBeNull();
      });
    });

    context('when pathname is /', () => {
      beforeEach(() => {
        mockLocation('/');
      });

      it('shows home page', () => {
        const { queryByText } = render((
          <App />
        ));

        expect(queryByText('Home')).not.toBeNull();
      });
    });
  });

  context('when path doesnt exist', () => {
    beforeEach(() => {
      mockLocation('/404');
    });

    it('shows error message', () => {
      const { queryByText } = render((
        <App />
      ));

      expect(queryByText('존재하지 않는 페이지 입니다')).not.toBeNull();
    });
  });
});
