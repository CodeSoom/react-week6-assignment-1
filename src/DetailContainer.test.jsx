import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import DetailContainer from './DetailContainer';

import restaurant from '../fixtures/restaurant';

describe('DetailContainer', () => {
  it('renders restaurant', () => {
    useSelector.mockImplementation((selector) => selector({ restaurant }));

    const { queryByText } = render(<DetailContainer />);

    expect(queryByText(/우리집/)).not.toBeNull();
  });
});
