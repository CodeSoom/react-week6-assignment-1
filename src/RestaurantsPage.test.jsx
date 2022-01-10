import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsPage from './RestaurantsPage';

describe('RestaurantsPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    // 어떤 테스트가 먼저 실행될지 몰라 초기화 필요
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 1, name: '서울' },
      ],
      categories: [
        { id: 1, name: '한식' },
      ],
      restaurants: [
        { id: 1, name: '양천주가' },
      ],
    }));
  });

  it('지역 버튼과 카테고리 버튼을 렌더링한다.', () => {
    const { container } = render((
      <MemoryRouter>
        <RestaurantsPage />
      </MemoryRouter>
    ));

    expect(dispatch).toBeCalled();

    expect(container).toHaveTextContent('서울');
    expect(container).toHaveTextContent('한식');
  });

  it('식당 이름을 렌더링한다.', () => {
    const { container } = render((
      <MemoryRouter>
        <RestaurantsPage />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('양천주가');
  });
});
