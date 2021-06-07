import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import App from './App';

describe('App', () => {
  const dispatch = jest.fn();
  const assignMock = jest.fn();

  function mockLocation({ pathname }) {
    delete window.location;
    window.location = { assign: assignMock, pathname };
  }

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 1, name: '서울' },
      ],
      categories: [],
      restaurants: [],
    }));
  });

  context('with invalid path', () => {
    beforeEach(() => {
      mockLocation({ pathname: '/123123123' });
    });

    it('renders the not found page', () => {
      const { getByRole } = render(<App />);

      expect(getByRole('heading', { name: '404 Not Found' })).toBeInTheDocument();
    });
  });

  context('with valid path', () => {
    context('with path /', () => {
      beforeEach(() => {
        mockLocation({ pathname: '/' });
      });

      it('renders the home page', () => {
        const { getByRole } = render(<App />);

        expect(getByRole('link', { name: 'About' })).toBeInTheDocument();
        expect(getByRole('link', { name: 'Restaurants' })).toBeInTheDocument();
      });
    });

    context('with path /about', () => {
      beforeEach(() => {
        mockLocation({ pathname: '/about' });
      });

      it('renders the about page', () => {
        const { getByRole, getByText } = render(<App />);

        expect(getByRole('heading', { name: 'About' })).toBeInTheDocument();
        expect(getByText('About 페이지입니다.')).toBeInTheDocument();
      });
    });

    context('with path /restaurants', () => {
      beforeEach(() => {
        mockLocation({ pathname: '/restaurants' });
      });

      it('renders the restaurants page', () => {
        const { queryByRole } = render(<App />);

        expect(dispatch).toBeCalled();

        expect(queryByRole('button', { name: '서울' })).toBeInTheDocument();
      });
    });
  });
});
