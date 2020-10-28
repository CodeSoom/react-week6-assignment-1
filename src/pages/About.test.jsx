import React from 'react';

import { render } from '@testing-library/react';

import About from './About';

test('About', () => {
  const { container } = render((
    <About />
  ));

  expect(container).toHaveTextContent('About 페이지 입니다.');
});
