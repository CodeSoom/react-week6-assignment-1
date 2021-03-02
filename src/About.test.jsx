import React from 'react';

import { render } from '@testing-library/react';

import About from './About';

describe('About', () => {
  it('초기 렌더링 후 요소를 검사한다.', () => {
    const { queryByText } = render((
      <About />
    ));

    expect(queryByText('About this..')).not.toBeNull();
  });

});
