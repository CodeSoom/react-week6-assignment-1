import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

describe('<List />', () => {
  const renderComponent = (restaurants) => render((
    <List items={restaurants} />
  ));

  const items = [
    { id: 1, name: '아이템 이름 1' },
    { id: 2, name: '아이템 이름 2' },
    { id: 3, name: '아이템 이름 3' },
  ];

  context('with items', () => {
    it('display list', () => {
      const { getByRole, getAllByRole } = renderComponent(items);
      expect(getByRole('list').children).toHaveLength(items.length);
      expect(getAllByRole('listitem')).toHaveLength(items.length);
    });
  });

  context('without items', () => {
    it('display empty list', () => {
      const { getByRole } = renderComponent([]);
      expect(getByRole('list').children).toHaveLength(0);
    });
  });
});
