import React from 'react';

import { render } from '@testing-library/react';

import NotFoundPage from './NotFoundPage';

const customRender = () => render(<NotFoundPage />);

describe('NotFoundPage', () => {
  context('without defined path', () => {
    it('shows description', () => {
      const { queryByText } = customRender();

      expect(queryByText('404 Not Found')).not.toBeNull();
    });
  });
});
