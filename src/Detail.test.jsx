import React from 'react';

import { render } from '@testing-library/react';

import Detail from './Detail';

import restaurant from '../fixtures/restaurant';

describe('Detail', () => {
  it('shows restaurant name, address and menu items', () => {
    const { queryByText } = render((<Detail restaurant={restaurant} />));

    expect(queryByText('우리집')).not.toBeNull();
    expect(queryByText('성남시')).not.toBeNull();
    expect(queryByText('버내너')).not.toBeNull();
  });
});
