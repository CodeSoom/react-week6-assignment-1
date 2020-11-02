import React from 'react';

import { render } from '@testing-library/react';

import Restaurant from './Restaurant';

jest.mock('react-redux');

describe('<Restaurant />', () => {
  it('renders restaurant\'s name, address and menu', () => {
    const { getAllByRole, getByText, getByRole } = render((
      <Restaurant
        name="양천주가"
        address="서울 강남구 123456"
        menuItems={[{ id: 1, restaurantId: 1, name: '비빔밥' }]}
      />
    ));

    expect(getAllByRole('heading')[0]).toHaveTextContent('양천주가');
    expect(getByText(/서울 강남구 123456/)).toBeInTheDocument();
    expect(getByRole('list')).toHaveTextContent('비빔밥');
  });
});
