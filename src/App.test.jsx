import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 1, name: '서울' },
      ],
      categories: [
        { id: 1, name: '한식' },
      ],
      restaurants: [
        { id: 1, name: '마법사주방' },
      ],
    }));
  });

  it('에러없이 store의 내용을 출력한다.', () => {
    const { queryByText } = render((
      <App />
    ));

    expect(dispatch).toBeCalled();

    expect(queryByText('서울')).not.toBeNull();
    expect(queryByText('한식')).not.toBeNull();
    expect(queryByText('마법사주방')).not.toBeNull();
  });

  context('존재하지 않는 URL로 접근시 404페이지를 노출한다', () => {
    const { queryByText } = render((
      <MemoryRouter initialEntries={['/404']}>
        <App />
      </MemoryRouter>
    ));
    expect(queryByText('404 Not Found')).not.toBeNull();
  });
});
