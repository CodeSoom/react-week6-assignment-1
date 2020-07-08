import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

function renderWithRouter(path) {
  return render(
    <MemoryRouter initialEntries={path}>
      <App />
    </MemoryRouter>,
  );
}

describe('App', () => {
  beforeEach(() => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 1, name: '서울' },
      ],
      categories: [
        { id: 1, name: '한식' },
      ],
      restaurants: [
        { id: 1, name: '마법사주방' },
      ],
    }));
  });

  context('with path "/"', () => {
    it('renders Home Page', () => {
      const { getByText } = renderWithRouter(['/']);

      expect(getByText('Home')).not.toBeNull();
      expect(getByText('About')).not.toBeNull();
      expect(getByText('Restaurants')).not.toBeNull();
    });
  });
  context('with path "/about"', () => {
    it('renders About Page', () => {
      const { getByText } = renderWithRouter(['/about']);

      expect(getByText('About')).not.toBeNull();
    });
  });
  context('with path "/restaurant"', () => {
    it('renders Restaurant Page', () => {
      const { getByText } = renderWithRouter(['/restaurants']);

      expect(getByText(/서울/)).not.toBeNull();
      expect(getByText(/한식/)).not.toBeNull();
    });
  });
});
