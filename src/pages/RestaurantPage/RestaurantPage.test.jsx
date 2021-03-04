import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter, Route } from 'react-router-dom';

import { createMemoryHistory } from 'history';

import RestaurantPage from './RestaurantPage';

import { restaurant } from '../../../fixtures';

describe('RestaurantPage', () => {
  const dispatch = jest.fn();

  const renderRestaurantPage = ({ path }) => {
    const history = createMemoryHistory();

    return render((
      <MemoryRouter initialEntries={[path]}>
        <Route
          exact
          history={history}
          path="/restaurants/:id"
          component={RestaurantPage}
        />
      </MemoryRouter>
    ));
  };

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurant,
    }));
  });

  it('renders RestaurantPage', () => {
    const { queryByText } = renderRestaurantPage({ path: '/restaurants/3' });

    expect(dispatch).toBeCalled();

    expect(queryByText('마법사주방')).not.toBeNull();
    expect(queryByText('주소: 서울 강남구 강남대로94길 9')).not.toBeNull();
    expect(queryByText('맛나는 거')).not.toBeNull();
    expect(queryByText('짠 거')).not.toBeNull();
  });

  it('renders NotFoundPage', () => {
    const { container } = renderRestaurantPage({ path: '/restaurants/unexpected-path' });

    expect(dispatch).not.toBeCalled();

    expect(container).toHaveTextContent('404 Not Found');
  });
});
