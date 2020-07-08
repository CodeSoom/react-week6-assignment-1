import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

describe('App', () => {
  const dispatch = jest.fn();

  function renderComponent({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      regions: [],
      categories: [],
      restaurants: [],
    }));
  });

  it('with path /', () => {
    const { queryByText } = renderComponent({ path: '/' });

    expect(queryByText('헤더')).not.toBeNull();
  });

  it('with path /about', () => {
    const { queryByText } = renderComponent({ path: '/about' });

    expect(queryByText('헤더')).not.toBeNull();
  });

  it('with path /restaurants', () => {
    const { queryByText } = renderComponent({ path: '/restaurants' });

    expect(queryByText('헤더')).not.toBeNull();
  });
});
