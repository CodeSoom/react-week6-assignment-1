import React from 'react';

import { render } from '@testing-library/react';

import Header from './Header';

describe('<Header />', () => {
  const renderHeader = () => render(<Header />);

  it('renders header', () => {
    const { getByText } = renderHeader();

    expect(getByText('헤더')).toBeInTheDocument();
  });
});
