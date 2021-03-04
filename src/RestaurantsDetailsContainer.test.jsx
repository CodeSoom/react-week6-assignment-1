import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import restaurantsDetails from '../fixtures/restaurantsDetails';

import RestaurantsDetailsContainer from './RestaurantsDetailsContainer';

describe('RestaurantsDetails', () => {
  useSelector.mockImplementation((selector) => selector({ restaurantsDetails }));
  it('식당의 상세 정보를 표시합니다.', () => {
    const { queryByText } = render(<RestaurantsDetailsContainer />);

    expect(queryByText(/양천주가/)).not.toBeNull();
  });
});
