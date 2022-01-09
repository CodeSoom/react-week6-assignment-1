import { render } from '@testing-library/react';

import DetailPage from './DetailPage';

describe('DetailPage', () => {
  const params = { id: '1' };

  const renderDetailPage = () => render((
    <DetailPage params={params} />
  ));

  context('with id of restaurant', () => {
    it('renders name of restaurant', () => {
      const { container } = renderDetailPage();

      expect(container).toHaveTextContent('마녀식당 1');
    });
  });
});
