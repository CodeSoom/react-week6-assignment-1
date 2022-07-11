import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

function renderApp({ path }) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

describe('<AboutPage />', () => {
  it('헤더와 페이지 이름이 보임', () => {
    const { container } = renderApp({ path: '/' });

    expect(container).toHaveTextContent('헤더');
    expect(container).toHaveTextContent('Home');
  });
});
