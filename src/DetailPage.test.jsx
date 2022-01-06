import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import DetailPage from './DetailPage';

describe('DetailPage', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      { id: 1, name: '마법사주방' },
    ],
  }));

  it('renders contents of restaurants', () => {
    const { container } = render((<DetailPage />));

    expect(container).toHaveTextContent('마법사주방');
  });
});
