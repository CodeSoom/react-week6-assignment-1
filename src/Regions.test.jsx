import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Regions from './Regions';

import regions from '../fixtures/regions';

describe('Regions', () => {
  const REGION = regions[0]; 
  const handleClick = jest.fn();
  test('when nothing is selected', () => {
    const { getByText } = render((
      <Regions
        regions={regions}
        onClick={handleClick}
        selectedId={null}
      />
    ));
    expect(getByText('서울')).not.toBeNull();
  });
  test('when something is selected', () => {
    const { getByText } = render((
      <Regions
        regions={regions}
        onClick={handleClick}
        selectedId={REGION.id}
      />
    ));
    expect(getByText(`${REGION.name}(v)`)).not.toBeNull();
  });

  // test('when clicked', () => {
  //   fireEvent.click(getByText('서울'));
  //   expect(handleClick).toBeCalled();
  // });  
 
});
