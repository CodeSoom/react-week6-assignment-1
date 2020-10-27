import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

describe('<App />', () => {
  const renderApp = (initialEntries) => render((
    <MemoryRouter initialEntries={initialEntries}>
      <App />
    </MemoryRouter>
  ));

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

  it('renders header', () => {
    // When
    const { getByText } = renderApp();

    // Then
    expect(getByText('헤더')).toBeInTheDocument();
  });

  context('with path /', () => {
    it('renders the home page', () => {
      // When
      const { getByText } = renderApp(['/']);

      // Then
      expect(getByText('Home')).toBeInTheDocument();
    });
  });

  context('with path /about', () => {
    it('renders the about page', () => {
      // When
      const { queryByText } = renderApp(['/about']);

      // Then
      expect(queryByText('Home')).not.toBeInTheDocument();
      expect(queryByText('About')).toBeInTheDocument();
    });
  });

  context('with path /restaurants', () => {
    it('renders the restaurants page', () => {
      // When
      const { queryByText } = renderApp(['/restaurants']);

      // Then
      expect(queryByText('Home')).not.toBeInTheDocument();
      expect(queryByText('서울')).toBeInTheDocument();
      expect(queryByText('한식')).toBeInTheDocument();
    });
  });
});
