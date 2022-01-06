import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import RestaurantsContainer from './RestaurantsContainer';

describe('RestaurantsContainer', () => {
  const renderRestaurantsContainer = () => render((
    <MemoryRouter initialEntries={['/restaurants']}>
      <RestaurantsContainer />
    </MemoryRouter>
  ));

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      restaurants: [
        { id: 1, name: '마법사주방' },
      ],
    }));
  });

  it('식당 이름을 화면에 보여준다.', () => {
    const { container } = renderRestaurantsContainer();

    expect(container).toHaveTextContent('마법사주방');
  });
});
