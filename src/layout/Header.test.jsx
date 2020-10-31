import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import Header from './Header';

describe('Header', () => {
  const renderHeader = () => render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  );
  context('when pathname is "/"', () => {
    it('renders not "홈으로"', () => {
      renderHeader();

      expect(screen.queryByText('홈으로')).toBeNull();
    });
  });

  context('when pathname is not "/"', () => {
    it('renders "홈으로"', () => {
      renderHeader();

      expect(screen.getByText('홈으로')).toBeInTheDocument();
    });
  });
});
