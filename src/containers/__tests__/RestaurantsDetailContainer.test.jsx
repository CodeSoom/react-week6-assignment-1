import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import restaurantsDetail from '../../../fixtures/restaurantsDetail';

import RestaurantsDetailContainer from '../RestaurantsDetailContainer';

jest.mock('react-redux');

describe('RestaurantsDetailContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({ restaurantsDetail }));
  });

  it('화면에 레스토랑의 자세한 정보들을 보여준다.', () => {
    const { queryByText } = render(<RestaurantsDetailContainer />);

    expect(queryByText(/마법사 주방/)).toBeInTheDocument();
    expect(queryByText(/서울시 강남구 강남대로 94길 9/)).toBeInTheDocument();
    expect(queryByText(/맛나는거/)).toBeInTheDocument();
    expect(queryByText(/짠거/)).toBeInTheDocument();
  });
});
