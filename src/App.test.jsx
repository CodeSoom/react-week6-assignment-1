import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions: [
      { id: 1, name: '서울' },
    ],
    categories: [
      { id: 1, name: '한식' },
    ],
    restaurants: [
      { id: 1, name: '마법사주방' },
    ],
  }));

  const renderApp = () => render(<App />);

  context('with RestaurantsPage', () => {
    it('renders regions, categories and restaurants', () => {
      const { queryByText } = renderApp();

      expect(dispatch).toBeCalled();

      expect(queryByText('서울')).not.toBeNull();
      expect(queryByText('한식')).not.toBeNull();
    });
  });
});
