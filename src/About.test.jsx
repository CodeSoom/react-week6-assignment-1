import { render } from '@testing-library/react';

import About from './About';

describe('About', () => {
  function renderAbout() {
    return render((
      <About />
    ));
  }

  it('Homepage가 렌더링된다', () => {
    const { container } = renderAbout();

    expect(container).toHaveTextContent('About 페이지입니다.');
    expect(container).toHaveTextContent('About');
  });
});
