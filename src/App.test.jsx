import React from 'react';

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
      <App />
    ));

    expect(container).toHaveTextContent('헤더');
  });

  it('goes to home page when header is clicked', () => {
    const { container, getByText } = render((
      <App />
    ));

    fireEvent.click(getByText('헤더'));

    expect(container).toHaveTextContent('Home');
  });
});
