import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import Header from './Header';

describe('Header', () => {
  function renderHeader() {
    return render((
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    ));
  }

  it('renders header', () => {
    const { container } = renderHeader();

    expect(container).toHaveTextContent('헤더');
  });

  it('has a button with / for href', () => {
    const { getByText } = renderHeader();

    expect(getByText('헤더')).toHaveAttribute('href', '/');
  });
});
