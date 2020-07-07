import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

describe('App', () => {
  beforeEach(() => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) =>
      selector({
        regions: [{ id: 1, name: '서울' }],
        categories: [{ id: 1, name: '한식' }],
        restaurants: [{ id: 1, name: '마법사주방' }],
      }),
    );
  });

  it('Home 링크가 있다', () => {
    const { getByText } = render(<App />, { wrapper: MemoryRouter });

    expect(getByText('Home')).not.toBeNull();
  });

  it('Home 링크를 클릭 시 home 페이지가 보인다.', () => {
    const { getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    fireEvent.click(getByText('Home'));

    expect(getByText('Home Page')).not.toBeNull();
  });

  it('About 링크가 있다', () => {
    const { getByText } = render(<App />, { wrapper: MemoryRouter });

    expect(getByText('About')).not.toBeNull();
  });

  it('About 링크를 클릭 시 about 페이지가 보인다.', () => {
    const { getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    fireEvent.click(getByText('About'));

    expect(getByText('About Page')).not.toBeNull();
  });

  it('관련 링크가 없을 시 Not Found 페이지가 보인다.', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/404']}>
        <App />
      </MemoryRouter>,
    );

    expect(getByText('Not Found')).not.toBeNull();
  });

  it('Restaurants 링크가 있다.', () => {
    const { getByText } = render(<App />, { wrapper: MemoryRouter });

    expect(getByText('Restaurants')).not.toBeNull();
  });
  it('Restaurants 링크를 클릭 시 Restaurants 페이지가 보인다.', () => {
    const { getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    fireEvent.click(getByText('Restaurants'));

    expect(getByText('Restaurants Page')).not.toBeNull();
  });

  it('검색된 레스토랑이 있다.', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/restaurants']}>
        <App />
      </MemoryRouter>,
    );

    expect(getByText('마법사주방')).not.toBeNull();
  });

  it('레스토랑을 클릭시 상세페이지로 이동한다.', () => {
    const { getByText, container } = render(
      <MemoryRouter initialEntries={['/restaurants']}>
        <App />
      </MemoryRouter>,
    );

    fireEvent.click(getByText('마법사주방'));

    expect(container.innerHTML).toMatch('Restaurants Detail');
    expect(container.innerHTML).toMatch('상호명');
    expect(container.innerHTML).toMatch('주소');
    expect(container.innerHTML).toMatch('메뉴');
  });
});
