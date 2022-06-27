import { render } from '@testing-library/react';

import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  it('"404 Not Found"라는 문구를 출력한다', () => {
    const { container } = render(<NotFoundPage />);

    expect(container).toHaveTextContent('404 Not Found');
  });
});
