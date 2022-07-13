import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import App from './App';

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  it('app이 렌더링된다', () => {
    const { container } = renderApp({ path: '/' });

    expect(container).toHaveTextContent('헤더');
  });

  context('path가 / 일때', () => {
    it('Homepage가 렌더링된다', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('Home');
      expect(container).toHaveTextContent('About');
      expect(container).toHaveTextContent('Restaurants');
    });
  });

  context('path가 /about 일때', () => {
    it('About이 렌더링된다', () => {
      const { container } = renderApp({ path: '/about' });

      expect(container).toHaveTextContent('About');
      expect(container).toHaveTextContent('About 페이지입니다.');
    });
  });
});
