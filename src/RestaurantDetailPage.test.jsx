import React from 'react';

import { render } from '@testing-library/react';

import RestaurantDetailPage from './RestaurantDetailPage';

import restaurantDetail from '../fixtures/restaurantDetail'

describe('RestaurantDetailPage', () => {
  context('when restaurant detail exists', () => {
    it('renders restaurant detail', () => {
      const { container } = render((
        <RestaurantDetailPage restaurantDetail={restaurantDetail}/>
      ));
    
      expect(container).toHaveTextContent('양천주가');
      expect(container).toHaveTextContent('주소: 서울 강남구');
      expect(container).toHaveTextContent('비빔밥');
      expect(container).toHaveTextContent('육개장');
    })
  })

  context('when restaurant detail does\'nt exist', () => {
    it('renders nothing', () => {
      const { queryByText } = render((
        <RestaurantDetailPage restaurantDetail={{}}/>
      ));
    
      expect(queryByText('양천주가')).toBeNull();
    })
  })
  
});
