import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import regions from '../../fixtures/regions';

describe('RegionsContainer', () => {
  const dispatch = jest.fn();

  const SEOUL = regions[0];

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  context('with selectedRegion', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        regions,
        selectedRegion: SEOUL,
      }));
    });

    it('renders regions with selected region', () => {
      const { container } = render(<RegionsContainer />);

      expect(container).toHaveTextContent(`${SEOUL.name}(V)`);
    });
  });

  context('without selectedRegion', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        regions,
      }));
    });

    it('renders regions', () => {
      const { container, getByText } = render(<RegionsContainer />);

      expect(container).toHaveTextContent(SEOUL.name);

      fireEvent.click(getByText(SEOUL.name));

      expect(dispatch).toBeCalled();
    });
  });
});
