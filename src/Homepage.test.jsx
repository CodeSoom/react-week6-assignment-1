import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import Homepage from './Homepage';

describe('Homepage', () => {
  function renderHomepage() {
    return render((
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    ));
  }

  it('Homepage가 렌더링된다', () => {
    const { container } = renderHomepage();

    expect(container).toHaveTextContent('Home');
    expect(container).toHaveTextContent('About');
    expect(container).toHaveTextContent('Restaurants');
  });
});
