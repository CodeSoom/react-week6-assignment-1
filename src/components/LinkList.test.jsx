import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import LinkList from './LinkList';

describe('<LinkList />', () => {
  const renderComponent = (restaurants) => render((
    <MemoryRouter>
      <LinkList items={restaurants} />
    </MemoryRouter>
  ));

  const itemsWithLink = [
    { id: 1, name: '아이템 이름 1', link: '아이템 링크 1' },
    { id: 2, name: '아이템 이름 2', link: '아이템 링크 2' },
    { id: 3, name: '아이템 이름 3', link: '아이템 링크 3' },
  ];

  context('with items', () => {
    it('display list', () => {
      const { getByRole, getAllByRole } = renderComponent(itemsWithLink);
      expect(getByRole('list').children).toHaveLength(itemsWithLink.length);
      expect(getAllByRole('listitem')).toHaveLength(itemsWithLink.length);
    });
  });

  context('without items', () => {
    it('display empty list', () => {
      const { getByRole } = renderComponent([]);
      expect(getByRole('list').children).toHaveLength(0);
    });
  });
});
