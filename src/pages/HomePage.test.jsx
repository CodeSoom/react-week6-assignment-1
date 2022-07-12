import { render } from '@testing-library/react';

import HomePage from './HomePage';

describe('<HomePage />', () => {
  const renderHomePage = () => render(<HomePage />);

  it('renders title', () => {
    const { getByText } = renderHomePage();

    expect(getByText('Home')).toBeInTheDocument();
  });

  it('renders links', () => {
    const { getByText } = renderHomePage();

    ['About', 'Restaurants'].forEach((link) => {
      expect(getByText(link)).toBeInTheDocument();
    });
  });
});
