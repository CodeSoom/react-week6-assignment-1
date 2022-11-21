import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

describe('App', () => {
  function renderApp() {
    return render((
      <MemoryRouter>
        <App />
      </MemoryRouter>
    ));
  }
  it('App을 렌더링한다.', () => {
    const { container } = renderApp();

    expect(container).toHaveTextContent('헤더');
  });
});
