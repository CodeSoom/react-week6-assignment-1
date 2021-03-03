import React from 'react';

import { render } from '@testing-library/react';

import NotFoundPage from './NotFoundPage';

function renderNotFoundPage() {
  return render((
    <NotFoundPage />
  ));
}

describe('NotFoundPage', () => {
  it('NotFoundPage를 그려준다.', () => {
    const { container } = renderNotFoundPage();

    expect(container).toHaveTextContent('해당 페이지가 존재하지 않습니다.');
  });
});
