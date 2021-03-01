import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

describe('App', () => {
  beforeEach(() => {
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
  });

  context('Show homepage with path /', () => {
    it('renders the index page', () => {
      const { queryByText } = render((
        <App />
      ));

      expect(queryByText('헤더')).not.toBeNull();
      expect(queryByText('About')).not.toBeNull();
      expect(queryByText('Restaurants')).not.toBeNull();
    });
  });
});
