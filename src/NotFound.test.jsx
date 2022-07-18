import { render } from '@testing-library/react';

import NotFound from './NotFound';

describe('NotFound', () => {
  it('404 NotFound가 보여집니다.', () => {
    const { container } = render(
      <NotFound />,
    );

    expect(container).toHaveTextContent('404 NotFound');
  });
});
