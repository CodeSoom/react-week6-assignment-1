import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

describe('App', () => {
  beforeEach(() => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [],
      categories: [],
      restaurants: [],
    }));
  });

  it('renders header', () => {
    const { container } = render((
      <MemoryRouter>
        <App />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('헤더');
  });

  it('goes to home page when header is clicked', () => {
    const { container, getByText } = render((
      <MemoryRouter>
        <App />
      </MemoryRouter>
    ));

    fireEvent.click(getByText('헤더'));

    expect(container).toHaveTextContent('Home');
  });

  context('with path /', () => {
    it('renders home page', () => {
      const { container } = render((
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('Home');
      expect(container).toHaveTextContent('About');
      expect(container).toHaveTextContent('Restaurants');
    });
  });
});
