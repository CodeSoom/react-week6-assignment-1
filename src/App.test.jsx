import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import {
  render,
  fireEvent,
} from '@testing-library/react';

import { createMemoryHistory } from 'history';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

describe('App', () => {
  beforeEach(() => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [{
        id: 1, name: '서울',
      }],
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

  context('with header', () => {
    it('renders Header', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('HEADER');
    });

    it('renders Header in valid path', () => {
      const { container } = renderApp({ path: '/restaurants' });

      expect(container).toHaveTextContent('HEADER');
    });

    it('move to / when click the header', () => {
      const history = createMemoryHistory();
      history.push = jest.fn();

      // const { getByText } = render((
      //   <MemoryRouter
      //     history={history}
      //     initialEntries={['/']}
      //   >
      //     <App />
      //   </MemoryRouter>
      // ));

      // fireEvent.click(getByText('HEADER'));

      // expect(history.push).toHaveBeenCalledWith('/');
    });
  });

  context('with path /', () => {
    it('renders HomePage', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('HOME');
    });
  });

  context('with path /about', () => {
    it('renders About', () => {
      const { container } = renderApp({ path: '/about' });

      expect(container).toHaveTextContent('맛집 사랑꾼');
    });
  });

  context('with path /restaurants', () => {
    it('renders Restaurants', () => {
      const { container } = renderApp({ path: '/restaurants' });

      expect(container).toHaveTextContent('서울');
    });
  });

  context('with invalid path', () => {
    it('renders Restaurants', () => {
      const { container } = renderApp({ path: '/asdgsfa' });

      expect(container).toHaveTextContent('404');
    });
  });
});
