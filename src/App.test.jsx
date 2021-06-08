import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import App from './App';

describe('App', () => {
  beforeEach(() => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 1, name: '서울' },
      ],
      categories: [],
      restaurants: [],
    }));
  });

  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  it('renders header', () => {
    const { getByText } = render((
      <MemoryRouter>
        <App />
      </MemoryRouter>
    ));

    expect(getByText('헤더')).not.toBeNull();

    // Link Test
    expect(getByText('헤더').closest('a')).toContainHTML('a');
    expect(getByText('헤더').closest('a')).toHaveAttribute('href', '/');
  });

  it('renders Home', () => {
    const { container } = renderApp({ path: '/' });

    expect(container).toHaveTextContent('Home');
  });

  it('renders About', () => {
    const { container } = renderApp({ path: '/about' });

    expect(container).toHaveTextContent('About');
  });

  it('renders Restaurants', () => {
    const { container } = renderApp({ path: '/restaurants' });

    expect(container).toHaveTextContent('서울');
  });

  it('renders Not Found', () => {
    const { container } = renderApp({ path: '/xxx' });

    expect(container).toHaveTextContent('404 Not Found');
  });
});
