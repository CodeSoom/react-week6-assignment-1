import { render } from '@testing-library/react';
import HomePage from './HomePage';

describe('HomePage', () => {
  it('제목이 보인다.', () => {
    const { getByRole } = render(<HomePage />);

    expect(getByRole('heading')).toHaveTextContent('HomePage');
  });

  it('홈페이지 메뉴들이 보인다.', () => {
    const { getByRole, getAllByRole } = render(<HomePage />);

    expect(getByRole('list')).toBeInTheDocument();
    expect(getAllByRole('link')[0]).toHaveTextContent('HOME');
  });
});
