import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

const renderApp = (path = '') => render(
  <MemoryRouter initialEntries={[path]}>
    <App />
  </MemoryRouter>,
);

describe('App', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      regions: [{ id: 1, name: '서울' }],
      categories: [{ id: 1, name: '한식' }],
      restaurants: [{ id: 1, name: '마법사주방' }],
    }));
  });

  afterEach(() => {
    dispatch.mockClear();
  });

  it('Home 링크가 있다', () => {
    const { getByText } = renderApp();

    expect(getByText('Home')).not.toBeNull();
  });

  it('Home 링크를 클릭 시 home 페이지가 보인다.', () => {
    const { getByText } = renderApp();

    fireEvent.click(getByText('Home'));

    expect(getByText('Home Page')).not.toBeNull();
  });

  it('About 링크가 있다', () => {
    const { getByText } = renderApp();

    expect(getByText('About')).not.toBeNull();
  });

  it('About 링크를 클릭 시 about 페이지가 보인다.', () => {
    const { getByText } = renderApp();

    fireEvent.click(getByText('About'));

    expect(getByText('About Page')).not.toBeNull();
  });

  it('관련 링크가 없을 시 Not Found 페이지가 보인다.', () => {
    const { getByText } = renderApp('/404');

    expect(getByText('404 Not Found')).not.toBeNull();
  });

  it('RestaurantsPage 링크가 있다.', () => {
    const { getByText } = render(<App />, { wrapper: MemoryRouter });

    expect(getByText('Restaurants')).not.toBeNull();
  });

  it('RestaurantsPage 링크를 클릭 시 RestaurantsPage 페이지가 보인다.', () => {
    const { getByText } = renderApp();

    fireEvent.click(getByText('Restaurants'));

    expect(getByText('Restaurants Page')).not.toBeNull();
  });

  it('검색된 레스토랑이 있다.', () => {
    const { getByText } = renderApp('/restaurants');

    expect(getByText('마법사주방')).not.toBeNull();
  });

  it('레스토랑을 클릭시 상세페이지로 이동한다.', () => {
    const { getByText, container } = renderApp('/restaurants');

    fireEvent.click(getByText('마법사주방'));

    expect(container).toHaveTextContent(/Restaurants Detail/);
    expect(container).toHaveTextContent(/상호명/);
    expect(container).toHaveTextContent(/주소/);
    expect(container).toHaveTextContent(/메뉴/);
  });
});
