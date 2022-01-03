import { MemoryRouter } from 'react-router-dom';

import { fireEvent, render } from '@testing-library/react';

import HomePage from './HomePage';

describe('HomePage', () => {
  const renderComponent = (path) => render(
    <MemoryRouter initialEntries={[path]}>
      <HomePage />
    </MemoryRouter>,
  );

  it('renders home page', () => {
    const { container } = renderComponent('/');

    expect(container).toHaveTextContent('Home');
  });

  it('clicks "About", move to /About', () => {
    const { container, getByText } = renderComponent('/');

    fireEvent.click(getByText('About'));

    expect(container).not.toHaveTextContent('Home');
    expect(container).toHaveTextContent('About');
  });
});
