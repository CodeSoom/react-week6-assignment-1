import given from 'given2';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import REGIONS from '../fixtures/regions';

describe('RegionsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  const SEOUL = REGIONS[0];

  given('state', () => ({
    regions: REGIONS,
    categories: [],
    restaurants: [],
    restaurantDetail: null,
    selectedRegion: given.selectedRegion,
    selectedCategory: null,
    selectedRestaurant: null,
  }));

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector(given.state));
    jest.clearAllMocks();
  });

  context('with selectedRegion', () => {
    given('selectedRegion', () => SEOUL);

    it('renders regions with selected region', () => {
      const { container } = render((
        <RegionsContainer />
      ));

      expect(container).toHaveTextContent(`${SEOUL.name}(V)`);
    });
  });

  context('without selectedRegion', () => {
    given('selectedRegion', () => null);

    it('renders regions', () => {
      const { container, getByText } = render((
        <RegionsContainer />
      ));

      expect(container).toHaveTextContent(SEOUL.name);

      fireEvent.click(getByText(SEOUL.name));

      expect(dispatch).toBeCalled();
    });
  });
});
