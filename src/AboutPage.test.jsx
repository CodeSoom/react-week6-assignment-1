import { render } from '@testing-library/react';

import AboutPage from './AboutPage';

describe('AboutPage', () => {
  function renderAboutPage() {
    return render((<AboutPage />));
  }

  it('AboutPage를 랜더링한다.', () => {
    const { getByText } = renderAboutPage();

    expect(getByText('About 페이지입니다.')).not.toBeNull();
  });
});
