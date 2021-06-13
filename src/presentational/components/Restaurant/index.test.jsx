import { fireEvent, render } from '@testing-library/react';

import Restaurant from '.';

import restaurants from '../../../../fixtures/restaurants';

describe('Restaurant', () => {
  const handleClick = jest.fn();

  it('renders restaurant', () => {
    const { getByRole } = render((
      <Restaurant
        restaurant={restaurants[0]}
        onClickChangeRoute={handleClick}
      />
    ));

    expect(getByRole('link', { name: '김밥제국' })).toBeInTheDocument();
  });

  it('listens click event', () => {
    const { getByRole } = render((
      <Restaurant
        restaurant={restaurants[0]}
        onClickChangeRoute={handleClick}
      />
    ));

    fireEvent.click(getByRole('link', { name: '김밥제국' }));

    expect(handleClick).toBeCalledWith(1);
  });
});
