import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

describe('App', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [],
      categories: [],
      restaurants: [],
    }));
  });

  it('renders App', () => {
    const { getByText } = render((
      <MemoryRouter>
        <App />
      </MemoryRouter>
    ));

    expect(dispatch).toBeCalled();
    expect(getByText('헤더')).not.toBeNull();
  });

  context('with path /', () => {
    it('renders the Home page', () => {
      const { container } = render((
        <MemoryRouter>
          <App />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('Home');
    });
  });

  context('with path /about', () => {
    it('renders the About page', () => {
      const { container } = render((
        <MemoryRouter initialEntries={['/about']}>
          <App />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('About');
    });
  });
  // expect(queryByText('서울')).not.toBeNull();
  // expect(queryByText('한식')).not.toBeNull();
});
