import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

describe('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    jest.clearAllMocks();
    useSelector.mockImplementation((selector) => selector({
      regions: [{ id: 1, name: '서울' }],
      categories: [{ id: 1, name: '한식' }],
      restaurants: [],
    }));
  });

  const renderApp = (path) => render((
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  ));

  context('with path /', () => {
    it('renders the home page', () => {
      const { container } = renderApp('/');

      expect(container).toHaveTextContent('Home');
    });
  });

  context('with path /restaurants', () => {
    it('renders the restaurants page', () => {
      const { container } = renderApp('/restaurants');

      expect(container).toHaveTextContent('서울');
      expect(container).toHaveTextContent('한식');
    });
  });
});
