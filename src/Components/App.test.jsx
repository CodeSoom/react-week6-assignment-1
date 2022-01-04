import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';
import App from './App';

jest.mock('react-redux');
describe('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  it('renders Home', () => {
    const { queryByText } = render((
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    ));

    expect(queryByText('헤더'));
    expect(queryByText('About'));
    expect(queryByText('Restaurant'));

    expect(dispatch).toBeCalledTimes(1);
  });

  it('renders  About', () => {
    const { queryByText } = render((
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    ));

    expect(queryByText('About'));
    expect(queryByText('About 페이지 입니다.'));
    expect(dispatch).toBeCalledTimes(2);
  });

  it('renders Restaurant', () => {
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

    const { container } = render((
      <MemoryRouter initialEntries={['/restaurants']}>
        <App />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('서울');
    expect(container).toHaveTextContent('한식');
    expect(container).toHaveTextContent('마법사주방');
    expect(dispatch).toBeCalledTimes(3);
  });

  it('renders Home', () => {
    const { queryByText } = render((
      <MemoryRouter initialEntries={['/wrong']}>
        <App />
      </MemoryRouter>
    ));

    expect(queryByText('404 Not Found'));
    expect(dispatch).toBeCalledTimes(4);
  });
});
