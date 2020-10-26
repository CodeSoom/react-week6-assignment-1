import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

describe('<App />', () => {
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

  it('renders header', () => {
    // When
    const { getByText } = render((
      <App />
    ));

    // Then
    expect(getByText('헤더')).toBeInTheDocument();
  });

  context('with path /', () => {
    it('renders the home page', () => {
      // When
      const { getByRole } = render((
        <App />
      ));

      // Then
      expect(getByRole('heading')).toHaveTextContent('Home');
    });
  });
});
