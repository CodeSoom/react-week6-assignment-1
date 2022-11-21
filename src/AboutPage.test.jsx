import { render } from '@testing-library/react';

import AboutPage from './AboutPage';

describe('AboutPage', () => {
  function renderAboutPage() {
    return render((<AboutPage />));
  }
  it('AboutPage를 렌더링한다.', () => {
    const { getByText } = renderAboutPage();

    expect(getByText('About페이지 입니다.')).not.toBeNull();
  });
});
