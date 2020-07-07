import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

test('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions: [{ id: 1, name: '서울' }],
    categories: [{ id: 1, name: '한식' }],
    restaurants: [{ id: 1, name: '마법사주방' }],
  }));

  const { queryByText } = render(<App />);

  expect(dispatch).toBeCalled();

  expect(queryByText('서울')).not.toBeNull();
  expect(queryByText('한식')).not.toBeNull();
});

describe('App with router', () => {
  context('with URL included /HomePage', () => {
    it('shows page name', () => {
      const { container } = render(
        <MemoryRouter>
          <App />
        </MemoryRouter>,
      );

      expect(container).toHaveTextContent('Home');
    });
  });

  // context('with URL included /AboutPage', () => {
  //   it('shows page name', () => {

  //   });
  // });

  // context('with URL included /RestaurantsPage', () => {
  //   it('shows page name', () => {

  //   });
  // });

  // context('with URL included /RestaurantPage', () => {
  //   it('shows page name', () => {

  //   });
  // });

  // context('with URL included /NotFoundPage', () => {
  //   it('shows page name', () => {

  //   });
  // });
});
