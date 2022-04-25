import { fireEvent, render } from '@testing-library/react';

import HomePage from './HomePage';

describe('HomePage', () => {
  it('renders title', () => {
    const { container } = render((
      <HomePage />
    ));

    expect(container).toHaveTextContent('Home');
  });

  it('renders about link', () => {
    const { container } = render((
      <HomePage />
    ));

    expect(container).toHaveTextContent('About');
  });

  it('listens for click event on route /about', () => {
    const { container, getByText } = render((
      <HomePage />
    ));

    fireEvent.click(getByText('About'));

    expect(container).toHaveTextContent('About');
    expect(container).toHaveTextContent('About 페이지 입니다.');
  });
});
