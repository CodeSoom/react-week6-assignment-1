import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

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
      const { getByText } = render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>,
      );
      expect(getByText('Home')).not.toBeNull();
      expect(getByText('About')).not.toBeNull();
      expect(getByText('Restaurants')).not.toBeNull();
    });
  });
  context('with path "/about"', () => {
    it('renders About Page', () => {
      const { getByText } = render(
        <MemoryRouter initialEntries={['/about']}>
          <App />
        </MemoryRouter>,
      );
      expect(getByText('About')).not.toBeNull();
    });
  });
  context('with path "/restaurant"', () => {
    it('redners Restaurant Page', () => {
      render(
        <MemoryRouter initialEntries={['/restaurant']}>
          <App />
        </MemoryRouter>,
      );
    });
  });
});
