import React from 'react';

import { render } from '@testing-library/react';

import About from './About';

test('About', () => {
  const { container, getByText } = render((
    <About />
  ));

  expect(getByText('About')).not.toBeNull();
  expect(container).toHaveTextContent('About 페이지 입니다.');
});
