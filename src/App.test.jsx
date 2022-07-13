import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

describe('<App />', () => {
  const renderApp = ({ path }) => render((
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  ));

  it('renders header', () => {
    const { getByText } = renderApp({ path: '/' });

    expect(getByText('헤더')).toBeInTheDocument();
  });

  context('with path /', () => {
    it('renders home page', () => {
      const { getByText } = renderApp({ path: '/' });

      expect(getByText('Home')).toBeInTheDocument();
      expect(getByText('About')).toBeInTheDocument();
      expect(getByText('Restaurants')).toBeInTheDocument();
    });
  });

  context('with path /about', () => {
    it('renders about page', () => {
      const { getByText } = renderApp({ path: '/about' });

      expect(getByText('About')).toBeInTheDocument();
      expect(getByText('About 페이지 입니다')).toBeInTheDocument();
    });
  });

  context('with wrong path', () => {
    it('renders not found page', () => {
      const { container } = renderApp({ path: '/some/bad/route' });

      expect(container).toHaveTextContent('Page not found');
    });
  });
});
