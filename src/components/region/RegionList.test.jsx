import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import RegionList from './RegionList';
import REGIONS from '../../../fixtures/regions';

describe('RegionList', () => {
  const handleSelectClick = jest.fn();

  const SEOUL = REGIONS[0];

  const regionListRender = ({ regions, selectedRegion }) => render((
    <RegionList
      regions={regions}
      selectedRegion={selectedRegion}
      onRegionClick={handleSelectClick}
    />
  ));

  context('with regions', () => {
    it('see renders regions', () => {
      const { getByText } = regionListRender({
        regions: REGIONS,
        selectedRegion: SEOUL,
      });

      REGIONS.forEach(({ name }) => {
        if (SEOUL.name === name) {
          expect(getByText(`${name}(V)`)).not.toBeNull();
          return;
        }

        expect(getByText(name)).not.toBeNull();
      });
    });

    it('renders button to click a region', () => {
      const { getByText } = regionListRender({
        regions: REGIONS,
        selectedRegion: null,
      });

      REGIONS.forEach(({ name }) => {
        fireEvent.click(getByText(name));

        expect(handleSelectClick).toBeCalled();
      });
    });
  });

  context('without regions', () => {
    const regions = [];

    it('nothing render regions', () => {
      const { container } = regionListRender({ regions, selectedRegion: null });

      expect(container).toBeEmptyDOMElement();
    });
  });
});
