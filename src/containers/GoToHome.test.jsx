import React from 'react';
import { render, screen } from '@testing-library/react';

import GoToHomeContainer from './GoToHome';

describe('GoToHomeContainer', () => {
  context('when in "/" page', () => {
    it('renders not "홈으로"', () => {
      render(<GoToHomeContainer />);

      expect(screen.queryByText('홈으로')).not.toBeInTheDocument();
    });
  });

  context('when not in "/" page', () => {
    it('renders "홈으로"', () => {
      render(<GoToHomeContainer />);

      expect(screen.queryByText('홈으로')).toBeInTheDocument();
    });
  });
});
