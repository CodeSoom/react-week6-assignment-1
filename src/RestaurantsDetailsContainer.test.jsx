import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';
import restaurantsDetails from '../fixtures/restaurantsDetails';

import RestaurantsDetailsContainer from './RestaurantsDetailsContainer';

describe('RestaurantsDetails', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({ restaurantsDetails }));

  it('식당의 상세 정보를 표시합니다.', () => {
    const { queryByText } = render((
      <MemoryRouter>
        <RestaurantsDetailsContainer />
      </MemoryRouter>
    ));

    expect(dispatch).toBeCalled();

    expect(queryByText(/양천주가/)).not.toBeNull();
  });
});