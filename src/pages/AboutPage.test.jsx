import React from 'react';

import { render } from '@testing-library/react';

import AboutPage from './AboutPage';

describe('AboutPage', () => {
  it('내용을 출력합니다.', () => {
    const { queryByText } = render(<AboutPage />);

    expect(queryByText('About page')).not.toBeNull();
  });
});
