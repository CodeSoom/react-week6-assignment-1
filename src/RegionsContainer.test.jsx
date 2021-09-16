import { render, fireEvent } from '@testing-library/react';

import given from 'given2';

import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import REGIONS from '../fixtures/regions';

describe('RegionsContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  const SEOUL = REGIONS[0];

  beforeEach(() => {
    dispatch.mockClear();

    given('selectedRegion', () => null);

    useSelector.mockImplementation((selector) => selector({
      regions: REGIONS,
      selectedRegion: given.selectedRegion,
    }));
  });

  context('without selectedRegion', () => {
    it('renders regions', () => {
      const { container, getByText } = render((
        <RegionsContainer />
      ));

      expect(container).toHaveTextContent(SEOUL.name);

      fireEvent.click(getByText(SEOUL.name));

      expect(dispatch).toBeCalled();
    });
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
});
