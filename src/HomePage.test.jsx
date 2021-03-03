import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import HomePage from './HomePage';

describe('HomePage', () => {
  it('초기 렌더링 후 요소를 검사한다.', () => {
    const { queryByText } = render((
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    ));

    expect(queryByText('About')).not.toBeNull();
    expect(queryByText('Restaurants')).not.toBeNull();
  });
});
