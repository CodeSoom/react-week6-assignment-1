import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter, Route } from 'react-router-dom';

import RestaurantsDetailPage from '../RestaurantsDetailPage';

jest.mock('react-redux');

describe('RestaurantsDetailPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      restaurantsDetail: {
        id: 1,
        name: '마법사 주방',
        address: '서울시 강남구 강남대로 94길 9',
        menuItems: [
          {
            id: 14,
            restaurantsId: 3,
            name: '맛나는거',
          },
          {
            id: 15,
            restaurantsId: 3,
            name: '짠거',
          },
        ],
      },
    }));
  });

  function renderDetailPage({ path }) {
    return render(
      <MemoryRouter initialEntries={[path]}>
        <Route
          path="./restaurants/:id"
          component={RestaurantsDetailPage}
        />
      </MemoryRouter>,
    );
  }

  context('pathName이 존재하는 경로일 때', () => {
    it(' 레스토랑 정보를 초기화한 후 불러온다.', () => {
      renderDetailPage({ path: './restaurants/1' });

      expect(dispatch).toBeCalledTimes(2);
    });

    it('화면에 레스토랑의 자세한 정보들을 보여준다.', () => {
      const { queryByText } = renderDetailPage({ path: './restaurants/1' });

      expect(queryByText(/마법사 주방/)).toBeInTheDocument();
      expect(queryByText(/서울시 강남구 강남대로 94길 9/)).toBeInTheDocument();
      expect(queryByText(/맛나는거/)).toBeInTheDocument();
      expect(queryByText(/짠거/)).toBeInTheDocument();
    });
  });

  context('pathName이 존재하지 않는 경로일 때', () => {
    it('InvalidPage를 보여준다.', () => {
      const { queryByText } = renderDetailPage({ path: './restaurants/유효하지 않은 경로' });

      expect(queryByText(/404 Not Found/)).toBeInTheDocument();
    });
  });
});
