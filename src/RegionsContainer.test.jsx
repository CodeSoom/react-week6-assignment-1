import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

import regions from '../fixtures/regions';

import { useDispatch, useSelector } from 'react-redux';

jest.mock('react-redux');

test('RegionsContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector(
    {
      regions,
    }
  ));
  
  const { getByText } = render((
    <RegionsContainer />
  ));
  expect(getByText('서울')).not.toBeNull();
  expect(getByText('대전')).not.toBeNull();
  fireEvent.click(getByText('서울'));
  expect(dispatch).toBeCalledWith(
    {
      type: 'selectRegion',
      payload: {
        id:1,
      },
    },
  );
  expect(getByText('서울(v)')).not.toBeNull();
});
