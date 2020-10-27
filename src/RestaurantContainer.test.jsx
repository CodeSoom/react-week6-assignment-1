import React from 'react';

import { render } from '@testing-library/react';

import RestaurantContainer from './RestaurantContainer';

describe('<RestaurantContainer />', () => {
  it('renders restaurant\'s name, address and menu', () => {
    const { getAllByRole, getByText, getByRole } = render(<RestaurantContainer />);

    expect(getAllByRole('heading')[0]).toBeInTheDocument();
    expect(getByText(/주소/)).toBeInTheDocument();
    expect(getAllByRole('heading')[1]).toHaveTextContent('메뉴');
    expect(getByRole('list')).toBeInTheDocument();
  });
});
