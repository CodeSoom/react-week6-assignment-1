import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';

import DetailPage from './DetailPage';

import DETAIL from '../../../fixtures/detail';

test('DetailPage', () => {
  useSelector.mockImplementation((selector) => selector({
    detail: DETAIL,
  }));
  const { container } = render((
    <MemoryRouter>
      <DetailPage />
    </MemoryRouter>
  ));

  expect(container).toHaveTextContent(DETAIL.name);
  expect(container).toHaveTextContent(DETAIL.address);
});
