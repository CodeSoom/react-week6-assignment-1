import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import given from 'given2';

import RegionsContainer from './RegionsContainer';

import REGIONS from '../../fixtures/regions';

describe('RegionsContainer', () => {
  const dispatch = jest.fn();

  const SEOUL = REGIONS[0];

  const renderRegionsContainer = () => (render((
    <RegionsContainer />
  )));

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: REGIONS,
      selectedRegion: given.selectedRegion,
    }));
  });

  context('with selectedRegion', () => {
    given('selectedRegion', () => SEOUL);

    it('renders regions with selected region', () => {
      const { container } = renderRegionsContainer();

      expect(container).toHaveTextContent(`${SEOUL.name}(V)`);
    });
  });

  context('without selectedRegion', () => {
    given('selectedRegion', () => null);

    it('renders regions', () => {
      const { container, getByText } = renderRegionsContainer();

      expect(container).toHaveTextContent(SEOUL.name);

      fireEvent.click(getByText(SEOUL.name));

      expect(dispatch).toBeCalled();
    });
  });
});
