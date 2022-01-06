import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';
import App from './App';

import REGIONS from '../../fixtures/regions';
import CATEGORIES from '../../fixtures/categories';
import RESTAURANTS from '../../fixtures/restaurants';

jest.mock('react-redux');
describe('App', () => {
  const renderApp = (path) => (render((
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>)));

  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    dispatch.mockClear();
  });

  it('renders Home', () => {
    const { queryByText } = renderApp('/');

    expect(queryByText('헤더'));
    expect(queryByText('About'));
    expect(queryByText('Restaurant'));

    expect(dispatch).toBeCalled();
  });

  it('renders  About', () => {
    const { queryByText } = renderApp('/about');

    expect(queryByText('About'));
    expect(queryByText('About 페이지 입니다.'));

    expect(dispatch).toBeCalled();
  });

  it('renders Restaurant', () => {
    useSelector.mockImplementation((selector) => selector({
      regions: REGIONS,
      categories: CATEGORIES,
      restaurants: RESTAURANTS,
    }));

    const { container } = renderApp('/restaurants');

    expect(container).toHaveTextContent('서울');
    expect(container).toHaveTextContent('한식');
    expect(container).toHaveTextContent('김밥제국');

    expect(dispatch).toBeCalled();
  });

  it('renders Home', () => {
    const { queryByText } = renderApp('/wrong');

    expect(queryByText('404 Not Found'));
    expect(dispatch).toBeCalled();
  });
});
