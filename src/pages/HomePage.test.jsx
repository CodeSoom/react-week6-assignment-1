import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from './HomePage';

const renderPage = () => render(
  <MemoryRouter>
    <HomePage />
  </MemoryRouter>,
);

describe('HomePage', () => {
  it('제목이 보인다.', () => {
    const { getByRole } = renderPage();

    expect(getByRole('heading')).toHaveTextContent('Home');
  });

  it('홈페이지 메뉴들이 보인다.', () => {
    const { getByRole, getAllByRole } = renderPage();

    expect(getByRole('list')).toBeInTheDocument();
    expect(getAllByRole('link')[0]).toHaveTextContent('HOME');
  });
});
