import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

import regions from '../fixtures/regions';

import { useDispatch, useSelector } from 'react-redux';


jest.mock('react-redux');

describe('RegionsContainer', () => {
  const REGION = regions[0];
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  context('with selectedRegion', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector(
        {
          regions,
          selectedRegionId: REGION.id,
        }
      ));
    });
    it('renders regions with selected region that has checked sign ', () => {
      const { getByText } = render((
        <RegionsContainer />
      ));
      expect(getByText(`${REGION.name}(v)`)).not.toBeNull();
    })
  });

  context('without selectedRegion', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector(
        {
          regions,
        }
      ));
    });
    it('renders regions without checked sign', () => {
      const { getByText } = render((
        <RegionsContainer />
      ));
      expect(getByText(REGION.name)).not.toBeNull();
      fireEvent.click(getByText(REGION.name));
      expect(dispatch).toBeCalled();
    });
  });
});
