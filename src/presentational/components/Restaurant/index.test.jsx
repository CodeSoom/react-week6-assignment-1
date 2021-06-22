import { fireEvent, render } from '@testing-library/react';

import Restaurant from '.';

import restaurants from '../../../../fixtures/restaurants';

describe('Restaurant', () => {
  const handleClick = jest.fn();

  it('renders restaurant', () => {
    const { getByRole } = render((
      <Restaurant
        restaurant={restaurants[0]}
        onClick={handleClick}
      />
    ));

    expect(getByRole('link', { name: '김밥제국' })).toBeInTheDocument();
  });

  it('listens click event', () => {
    const { getByRole } = render((
      <Restaurant
        restaurant={restaurants[0]}
        onClick={handleClick}
      />
    ));

    fireEvent.click(getByRole('link', { name: '김밥제국' }));

    // toBeCalledWith로 테스트하고 싶은데 a 링크의 onclick의 event를 어떻게 넘겨줘야 될 지 모르겠음.
    expect(handleClick).toBeCalled();
  });
});
