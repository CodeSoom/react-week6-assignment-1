import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter, Routes, Route } from 'react-router-dom';

import restaurantsDetails from '../../fixtures/restaurantsDetails';

import RestaurantsDetailsContainer from './RestaurantsDetailsContainer';

function renderRestaurantsDetailsContainer(pathname) {
  return render(
    <MemoryRouter initialEntries={[pathname]}>
      <Routes>
        <Route
          path="/restaurants/:id"
          element={<RestaurantsDetailsContainer />}
        />
      </Routes>

    </MemoryRouter>,
  );
}

describe('', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    restaurantsDetails,
  }));

  context('경로가 존재하지 않을떄', () => {
    it('경로가 존재하지 않다는 Not Found를 표시한다', () => {
      const { queryByText } = renderRestaurantsDetailsContainer('/restaurants/any_not_exist_url');

      expect(queryByText(/404 Not Found/)).not.toBeNull();
    });
  });

  context('경로가 존재할떄', () => {
    it('식당의 정보를 표시한다.', () => {
      const { queryByText } = renderRestaurantsDetailsContainer('/restaurants/1');

      expect(dispatch).toBeCalled();
      expect(queryByText(/양천주가/)).not.toBeNull();
    });
  });
});
