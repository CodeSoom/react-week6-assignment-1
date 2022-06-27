import { fireEvent, render } from '@testing-library/react';

import Header from './Header';

test('Header', () => {
  const handleClick = jest.fn();

  const { getByRole } = render((
    <Header onClick={handleClick} />
  ));

  expect(getByRole('heading', { level: 1 })).toHaveTextContent('헤더');

  fireEvent.click(getByRole('link'));

  expect(handleClick).toBeCalled();
});
