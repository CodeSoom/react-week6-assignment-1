import React from 'react';

import { 
  MemoryRouter, 
} from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

describe('App', () => {
  beforeEach(() => {
    const dispath = jest.fn();

    useDispatch.mockImplementation(() => dispath);
    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 1, name: '서울' },
      ],
      categories: [],
      restaurants: [],
    }));
  });

  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }
  
  context('with path /', () => {
    it('renders HomePage', () => {
      const { container } = renderApp({ path:'/' });
      expect(container).toHaveTextContent('Home');
    });
  });

  context('with path /about', () => {
    it('renders the about page', () => {
      const { container } = renderApp({ path:'/about' });
      expect(container).toHaveTextContent('화이팅!');
    });
  });

  context('with path /restaurants', () => {
    it('renders the restaurants page', () => {
      const { container } = renderApp({ path:'/restaurants' });
      expect(container).toHaveTextContent('서울');
    });
  });

  context('with invalid path', () => {
    it('renders the not found page', () => {
      const { container } = renderApp({ path:'/xxx' });
      expect(container).toHaveTextContent('404');
    });
  });
});
