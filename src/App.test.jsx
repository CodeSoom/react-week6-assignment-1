import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  const renderComponent = ({ path }) => render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );

  it('renders App', () => {
    renderComponent({ path: '/' });
  });

  context('with path /', () => {
    it('renders the home page', () => {
      const { getByText } = renderComponent({ path: '/' });
      expect(getByText('홈페이지')).toBeInTheDocument();
    });
  });
});
