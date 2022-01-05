import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import HomePage from './HomePage';

describe('HomePage', () => {
  const renderHomePage = () => render(
    <MemoryRouter initialEntries={['/']}>
      <HomePage />
    </MemoryRouter>,
  );

  it('About 페이지로 이동할 수 있는 "About" 텍스트가 존재한다.', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('About');
  });

  it('Restaurants 페이지로 이동할 수 있는 "Restaurants" 텍스트가 존재한다.', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('Restaurants');
  });
});
