import React from 'react';

import { render } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

import regions from '../fixtures/regions';

test('RegionsContainer', () => {
  const { getByText } = render((
    <RegionsContainer
      regions={regions}
    />
  ));
  expect(getByText('서울')).not.toBeNull();
  expect(getByText('대전')).not.toBeNull();
});
