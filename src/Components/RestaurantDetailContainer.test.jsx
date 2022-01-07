import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetailContainer from './RestaurantDetailContainer';

import DETAIL from '../../fixtures/restaurantDetail';

describe('DetailPage', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  const detailRender = () => render((
    <MemoryRouter>
      <RestaurantDetailContainer />
    </MemoryRouter>
  ));

  it('render detail page', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurantDetail: DETAIL,
    }));

    const { container } = detailRender();

    expect(container).toHaveTextContent(DETAIL.name);
    expect(container).toHaveTextContent(DETAIL.address);
  });
});
