import { render, fireEvent } from '@testing-library/react';

import Regions from './Regions';

import REGIONS from '../../fixtures/regions';

describe('Regions', () => {
  const handleClick = jest.fn();

  const SEOUL = REGIONS[0];

  context('with selectedRegion', () => {
    it('renders regions with selected region', () => {
      const { container } = render((
        <Regions
          regions={REGIONS}
          selectedRegion={SEOUL}
        />
      ));

      expect(container).toHaveTextContent(`${SEOUL.name}(V)`);
    });
  });

  context('without selectedRegion', () => {
    it('renders regions', () => {
      const { container, getByText } = render((
        <Regions
          regions={REGIONS}
          onClick={handleClick}
        />
      ));

      expect(container).toHaveTextContent(SEOUL.name);

      fireEvent.click(getByText(SEOUL.name));

      expect(handleClick).toBeCalled();
    });
  });
});
