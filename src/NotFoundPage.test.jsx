import { render } from '@testing-library/react';

import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  function renderNotFoundPage() {
    return render((
      <NotFoundPage />
    ));
  }

  it('페이지가없어요! 가 렌더링된다', () => {
    const { container } = renderNotFoundPage();

    expect(container).toHaveTextContent('페이지가없어요!');
  });
});
