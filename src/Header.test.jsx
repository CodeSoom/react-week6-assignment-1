import { render } from '@testing-library/react';

import Header from './Header';

describe('Header', () => {
  it('renders header', () => {
    const { container } = render((
      <Header />
    ));

    expect(container).toHaveTextContent('헤더');
  });

  it('has a button with / for href', () => {
    const { getByText } = render((
      <Header />
    ));

    expect(getByText('헤더')).toHaveAttribute('href', '/');
  });
});
