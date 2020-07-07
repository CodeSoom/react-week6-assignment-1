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

  context('/에 접속하면', () => {
    it('기본 메인 페이지가 나온다.', () => {
      const { getByText } = render((
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      ));

      expect(getByText('Home')).toBeInTheDocument();
      expect(getByText('About')).toBeInTheDocument();
      expect(getByText('Restaurants')).toBeInTheDocument();
    });
  });

  context('/about에 접속하면', () => {
    it('About 페이지로 들어간다.', () => {
      const { getByText } = render((
        <MemoryRouter initialEntries={['/about']}>
          <App />
        </MemoryRouter>
      ));

      expect(getByText('About')).toBeInTheDocument();
      expect(getByText('About 페이지 입니다.')).toBeInTheDocument();
    });
  });
});
