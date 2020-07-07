import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import App from './App';

test('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) =>
    selector({
      regions: [{ id: 1, name: '서울' }],
      categories: [{ id: 1, name: '한식' }],
      restaurants: [{ id: 1, name: '마법사주방' }],
    }),
  );

  const { queryByText } = render(<App />, { wrapper: MemoryRouter });

  expect(dispatch).toBeCalled();

  expect(queryByText('서울')).not.toBeNull();
  expect(queryByText('한식')).not.toBeNull();
});

describe('App', () => {
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

    fireEvent.click(getByText('About'));

    expect(getByText('Home page')).not.toBeNull();
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

    expect(getByText('About page')).not.toBeNull();
  });

  it('관련 링크가 없을 시 Not Found 페이지가 보인다.', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/404']}>
        <App />
      </MemoryRouter>,
    );

    expect(getByText('Not Found')).not.toBeNull();
  });
});
