import { render } from '@testing-library/react';

import Header from './Header';

describe('Header', () => {
  it('renders link to home', () => {
    const { getByText } = render(<Header />);

    expect(getByText('Home')).toBeInTheDocument();
  });
});
