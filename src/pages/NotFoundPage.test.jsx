import { render } from '@testing-library/react';

import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  it('"요청하신 페이지를 찾을 수 없습니다."라는 문구를 출력한다', () => {
    const { container } = render(<NotFoundPage />);

    expect(container).toHaveTextContent('요청하신 페이지를 찾을 수 없습니다');
  });
});
