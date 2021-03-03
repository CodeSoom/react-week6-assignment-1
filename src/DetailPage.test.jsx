import React from 'react';

import { render } from '@testing-library/react';

import DetailPage from './DetailPage';

import detail from '../fixtures/detail'

test('DetailPage', () => {
  const { container } = render((
    <DetailPage detail={detail}/>
  ));

  expect(container).toHaveTextContent('양천주가');
  expect(container).toHaveTextContent('주소: 서울 강남구');
  expect(container).toHaveTextContent('비빔밥');
  expect(container).toHaveTextContent('육개장');
});
