import { render } from '@testing-library/react';

import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  const renderNotFoundPage = () => render(<NotFoundPage />);

  it('"404 Not Found" 텍스트를 화면에 보여준다.', () => {
    const { getByText } = renderNotFoundPage();

    expect(getByText('404 Not Found')).not.toBeNull();
  });

  it('"헤더를 통해 홈으로 이동하세요." 텍스트를 화면에 보여준다.', () => {
    const { getByText } = renderNotFoundPage();

    expect(getByText('헤더를 통해 홈으로 이동하세요.')).not.toBeNull();
  });
});
