import { render } from '@testing-library/react';

import Header from '.';

describe('Header', () => {
  it('renders "헤더" content', () => {
    const { getByRole } = render(<Header />);

    expect(getByRole('link', { name: '헤더' })).toBeInTheDocument();
  });
});
