import { render } from '@testing-library/react';

import ButtonList from './Buttons';

describe('buttonList', () => {
  const items = [
    { id: 1, name: '서울' },
    { id: 2, name: '부산' },
  ];

  function renderButtonList({ selected }) {
    return render((
      <ButtonList
        items={items}
        onClick={jest.fn()}
        selected={selected}
      />
    ));
  }

  context('when nothing is selected', () => {
    it('renders buttons with name', () => {
      const { getAllByRole, queryByText } = renderButtonList(
        { selected: null },
      );

      expect(getAllByRole('button')).toHaveLength(items.length);
      expect(queryByText(/(V)/)).not.toBeInTheDocument();
    });
  });

  context('when something is selected', () => {
    it('renders buttons and adds (V) to selected one', () => {
      const { getAllByRole, getByText } = renderButtonList(
        { selected: '서울' },
      );

      expect(getAllByRole('button')).toHaveLength(items.length);
      expect(getByText('서울(V)')).toBeInTheDocument();
    });
  });
});
