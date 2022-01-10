import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import HomePage from './HomePage';

describe('HomePage', () => {
  const renderHomePage = () => render(
    <MemoryRouter initialEntries={['/']}>
      <HomePage />
    </MemoryRouter>,
  );

  it('화면에 특정한 텍스트를 보여준다.', () => {
    const { container } = renderHomePage();

    ['About', 'Restaurants'].forEach((text) => {
      expect(container).toHaveTextContent(text);
    });
  });
});
