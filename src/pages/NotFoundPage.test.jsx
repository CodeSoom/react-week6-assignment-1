import { render } from '@testing-library/react';

import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  const renderNotFoundPage = () => render(<NotFoundPage />);

  it('화면에 특정한 텍스트를 보여준다.', () => {
    const { getByText } = renderNotFoundPage();

    ['404 Not Found', '헤더를 통해 홈으로 이동하세요.'].forEach((text) => {
      expect(getByText(text)).not.toBeNull();
    });
  });
});
