import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import HomePage from './HomePage';

describe('HomePage', () => {
  const renderComponent = (path) => render((
    <MemoryRouter initialEntries={[path]}>
      <HomePage />
    </MemoryRouter>
  ));

  it('renders home page', () => {
    const { container } = renderComponent('/');

    expect(container).toHaveTextContent('Home');
    expect(container).toHaveTextContent('About');
    expect(container).toHaveTextContent('Restaurants');
  });

  // TODO: click 시, 이동하는 테스트 구현
  // it('clicks "About", move to /About', async () => {
  // });
});
