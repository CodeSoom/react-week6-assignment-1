import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';

import App from './App';

describe('App', () => {
  useSelector.mockImplementation((selector) => selector({
    regions: [],
    categories: [],
    restaurants: [],
  }));

  it('renders header', () => {
    const { container } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    expect(container).toHaveTextContent('헤더');
  });
});
