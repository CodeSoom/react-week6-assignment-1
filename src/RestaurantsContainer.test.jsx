import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

test('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      { id: 1, name: '마법사주방' },
    ],
  }));

  const { container } = render((
    <MemoryRouter>
      <RestaurantsContainer />
    </MemoryRouter>
  ));

  expect(container).toHaveTextContent('마법사주방');
});

// TODO: 레스로탕 name 클릭시 화면 전환 테스트
