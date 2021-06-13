import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import given from 'given2';

import RestaurantsPage from '.';

describe('RestaurantsPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: given.regions,
      categories: given.categories,
      restaurants: given.restaurants,
    }));

    given('regions', () => [{
      id: 1,
      name: '서울',
    }]);
    given('categories', () => [{
      id: 1,
      name: '한식',
    }]);
    given('restaurants', () => [{
      id: 1,
      name: '마법사주방',
    }]);
  });

  function renderRestaurantsPage() {
    return render((
      <MemoryRouter>
        <RestaurantsPage />
      </MemoryRouter>
    ));
  }

  it('loads initial data', () => {
    renderRestaurantsPage();

    expect(dispatch).toBeCalled();
  });

  context('with regions, categories, restaurants', () => {
    beforeEach(() => {
      given('regions', () => [{
        id: 1,
        name: '서울',
      }]);
      given('categories', () => [{
        id: 1,
        name: '한식',
      }]);
      given('restaurants', () => [{
        id: 1,
        name: '마법사주방',
      }]);
    });

    it('renders links, buttons', () => {
      const { getByRole } = renderRestaurantsPage();

      expect(getByRole('link', { name: '마법사주방' })).toBeInTheDocument();
      expect(getByRole('button', { name: '서울' })).toBeInTheDocument();
      expect(getByRole('button', { name: '한식' })).toBeInTheDocument();
    });
  });

  context('without regions, categories, restaurants', () => {
    beforeEach(() => {
      given('regions', () => []);
      given('categories', () => []);
      given('restaurants', () => []);
    });

    it("doesn't render link, button", () => {
      const { container } = renderRestaurantsPage();

      expect(container.innerHTML).not.toContain('<a href="');
      expect(container.innerHTML).not.toContain('<button type="button"');
    });
  });
});
