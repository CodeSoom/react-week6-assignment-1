import React from 'react';

import { render } from '@testing-library/react';

import AboutPage from './AboutPage';

const customRender = () => render(<AboutPage />);

describe('AboutPage', () => {
  context('with path /about', () => {
    it('shows HOME heading', () => {
      const { queryByText } = customRender();

      expect(queryByText('About 페이지입니다.')).not.toBeNull();
    });
  });
});
