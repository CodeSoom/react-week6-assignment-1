import React from 'react';
import { render, screen } from '@testing-library/react';

import GoToHome from './GoToHome';

describe('GoToHome', () => {
  context('when in "/" page', () => {
    it('renders not "홈으로"', () => {
      render(<GoToHome />);

      expect(screen.queryByText('홈으로')).not.toBeInTheDocument();
    });
  });

  context('when not in "/" page', () => {
    it('renders "홈으로"', () => {
      render(<GoToHome />);

      expect(screen.queryByText('홈으로')).toBeInTheDocument();
    });
  });
});
