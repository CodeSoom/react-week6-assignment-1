import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

describe('App', () => {
  it('초기 렌더링 후 요소를 검사한다.', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [],
      categories: [],
      restaurants: [],
    }));

    const { queryByText } = render((
      <App />
    ));

    expect(queryByText('헤더')).not.toBeNull();
  });
});
