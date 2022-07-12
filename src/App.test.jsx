import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

describe('<App />', () => {
  it('renders header', () => {
    const { getByText } = render((
      <MemoryRouter>
        <App />
      </MemoryRouter>
    ));

    expect(getByText('헤더')).toBeInTheDocument();
  });

  context('with path /', () => {
    it('renders home page', () => {
      const { getByText } = render((
        <MemoryRouter>
          <App />
        </MemoryRouter>
      ));

      expect(getByText('Home')).toBeInTheDocument();
      expect(getByText('About')).toBeInTheDocument();
      expect(getByText('Restaurants')).toBeInTheDocument();
    });
  });
});
