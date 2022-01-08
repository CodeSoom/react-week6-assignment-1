import { render, fireEvent } from '@testing-library/react';

import given from 'given2';

import Regions from './Regions';

import REGIONS from '../../fixtures/regions';

describe('Regions', () => {
  const handleClick = jest.fn();

  const SEOUL = REGIONS[0];

  const renderRegions = () => (render((
    <Regions
      regions={REGIONS}
      selectedRegion={given.selectedRegion}
      onClick={handleClick}
    />
  )));

  context('with selectedRegion', () => {
    given('selectedRegion', () => SEOUL);

    it('renders regions with selected region', () => {
      const { container } = renderRegions();

      expect(container).toHaveTextContent(`${SEOUL.name}(V)`);
    });
  });

  context('without selectedRegion', () => {
    given('selectedRegion', () => null);

    it('renders regions', () => {
      const { container, getByText } = renderRegions();

      expect(container).toHaveTextContent(SEOUL.name);

      fireEvent.click(getByText(SEOUL.name));

      expect(handleClick).toBeCalled();
    });
  });
});
