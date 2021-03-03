import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import given from 'given2';

import restaurant from '../fixtures/restaurant';

import HeaderContainer from './HeaderContainer';

describe('HeaderContainer', () => {
  const dispatch = jest.fn();

  given('region', () => '서울');
  given('category', () => '양식');

  const renderHeaderContainer = () => render((
    <MemoryRouter>
      <HeaderContainer />
    </MemoryRouter>
  ));

  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      selectedRegion: given.region,
      selectedCategory: given.category,
      restaurant,
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders Header', () => {
    const { queryByText } = renderHeaderContainer();

    expect(queryByText('헤더')).not.toBeNull();
  });

  it('resets current state to initial state upon clicking 헤더', () => {
    const { queryByText } = renderHeaderContainer();

    fireEvent.click(queryByText('헤더'));

    expect(dispatch).toBeCalled();
  });
});
