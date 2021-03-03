import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import DetailContainer from './DetailContainer';

import detail from '../fixtures/detail';

jest.mock('react-redux');

describe('DetailContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  })

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    detail,
  }))

  it('renders detail', () => {
    const { container } = render(<DetailContainer />);
  
    expect(container).toHaveTextContent('양천주가');
    expect(container).toHaveTextContent('주소: 서울 강남구');
    expect(container).toHaveTextContent('비빔밥');
    expect(container).toHaveTextContent('육개장');
  })
})
