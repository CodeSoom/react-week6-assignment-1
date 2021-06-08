import { render } from '@testing-library/react';
import given from 'given2';

import ButtonList from './ButtonList';

describe('buttonList', () => {
  const items = [
    { id: 1, name: '서울' },
    { id: 2, name: '부산' },
  ];

  function renderButtonList() {
    const { selected } = given;

    const handleClick = jest.fn();

    return render((
      <ButtonList
        items={items}
        onClick={handleClick}
        selected={selected}
      />
    ));
  }

  context('when nothing is selected', () => {
    given('selected', () => null);

    it('renders buttons with name', () => {
      const { getAllByRole, queryByText } = renderButtonList();

      expect(getAllByRole('button')).toHaveLength(items.length);
      expect(queryByText(/(V)/)).not.toBeInTheDocument();
    });
  });

  context('when something is selected', () => {
    given('selected', () => '서울');

    it('renders buttons and adds (V) to selected one', () => {
      const { getAllByRole, getByText } = renderButtonList();

      expect(getAllByRole('button')).toHaveLength(items.length);
      expect(getByText('서울(V)')).toBeInTheDocument();
    });
  });
});
