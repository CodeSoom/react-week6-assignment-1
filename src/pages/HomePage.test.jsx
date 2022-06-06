import { render } from '@testing-library/react';

import HomePage from './HomePage';

describe('HomePage', () => {
  const renderHomepage = () => render(<HomePage />);

  it('"About"이라는 텍스트를 출력한다', () => {
    const { container } = renderHomepage();

    expect(container).toHaveTextContent('About');
  });

  it('"Restaurants"라는 텍스트를 출력한다', () => {
    const { container } = renderHomepage();

    expect(container).toHaveTextContent('Restaurants');
  });
});
