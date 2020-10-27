import React from 'react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      regions: [],
      categories: [],
      restaurants: [],
    }));
  });
  
  context('with path /', () => {
    it('renders HomePage', () => {
      const { container } = render((
        <MemoryRouter>
          <App />
        </MemoryRouter>
      ));
      expect(container).toHaveTextContent('Home');
    });
  });  

  context('with path /about', () => {
    it('renders About', () => {
      const { container } = render((
        <MemoryRouter initialEntries={['/AboutPage']}>
          <App />
        </MemoryRouter>
      ));
      expect(container).toHaveTextContent('About 페이지 입니다.');
    })  
  });
});
