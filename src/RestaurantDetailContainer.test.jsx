import React from 'react';

import { render } from '@testing-library/react';

import RestaurantDetailContainer from './RestaurantDetailContainer';
import { useSelector } from 'react-redux';

test('RestaurantDetailContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurantDetail: [
      { 
        name: '알부자', 
        address: '강남',
      },
    ],
  })); 
  
  const { queryByText } = render((
    <RestaurantDetailContainer />
  ));

  //expect(queryByText('서울')).not.toBeNull();
});