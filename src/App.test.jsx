import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from './App';

describe('App', () => {
  const renderApp = () => render((
    <MemoryRouter>
      <App />
    </MemoryRouter>
  ));

  it('renders title', () => {
    const { container } = renderApp();

    expect(container).toHaveTextContent('Home');
  });

  it('renders about link', () => {
    const { container } = renderApp();

    expect(container).toHaveTextContent('About');
  });

  it('listens for click event on route /about', () => {
    const { container, getByText } = renderApp();

    fireEvent.click(getByText('About'));

    expect(container).toHaveTextContent('About');
    expect(container).toHaveTextContent('About 페이지 입니다.');
  });
});
