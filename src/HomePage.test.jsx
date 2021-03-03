import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import HomePage from './HomePage';

describe('HomePage', () => {
  const dispatch = jest.fn();

  const renderHomPage = () => render((
    <MemoryRouter initialEntries={['/']}>
      <HomePage />
    </MemoryRouter>
  ));

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders Home Page', () => {
    const { container } = renderHomPage();

    expect(container).toHaveTextContent('About');
    expect(container).toHaveTextContent('Restaurants');
  });

  it('resets current state to initial state', () => {
    renderHomPage();

    expect(dispatch).toBeCalled();
  });
});
