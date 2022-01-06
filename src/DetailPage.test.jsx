import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import DetailPage from './DetailPage';

describe('DetailPage', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      { id: 1, name: '마녀식당' },
    ],
  }));

  const renderDetailPage = ({ path }) => render((
    <MemoryRouter initialEntries={[path]}>
      <DetailPage />
    </MemoryRouter>
  ));

  context('with id of restaurant', () => {
    it('renders name of restaurant', () => {
      const { container } = renderDetailPage(
        { path: '/detail/1' },
      );

      expect(container).toHaveTextContent('마녀식당');
    });
  });
});
