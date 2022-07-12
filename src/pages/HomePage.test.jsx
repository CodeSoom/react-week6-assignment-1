import { render } from '@testing-library/react';

import HomePage, { ROUTES } from './HomePage';

describe('<HomePage />', () => {
  const renderHomePage = () => render(<HomePage />);

  it('renders title', () => {
    const { getByText } = renderHomePage();

    expect(getByText('Home')).toBeInTheDocument();
  });

  it('renders links', () => {
    const { getByText } = renderHomePage();

    ROUTES.forEach((route) => {
      expect(getByText(route)).toBeInTheDocument();
    });
  });
});
