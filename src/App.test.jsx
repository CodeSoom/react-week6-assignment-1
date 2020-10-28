import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    dispatch.mockClear();
  });

  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  it('show home', () => {
    const { container } = renderApp({ path: '' });

    expect(container).toHaveTextContent('Home');
    expect(container).toHaveTextContent('About');
    expect(container).toHaveTextContent('Restaurants');
    expect(container).toHaveTextContent('헤더');
  });

  describe('/about', () => {
    it('go to the About page', () => {
      const { getByText } = renderApp({ path: '/about' });

      expect(getByText('About 페이지 입니다.')).toBeInTheDocument();
    });
  });

  describe('/restaurants', () => {
    it('go to the About page', () => {
      const { getByText } = renderApp({ path: '/restaurants' });

      expect(getByText('서울')).toBeInTheDocument();
    });
  });
});
