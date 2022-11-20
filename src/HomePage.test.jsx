import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import HomePage from './HomePage';

describe('HomePage', () => {
  function renderHomePage() {
    return render((
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>));
  }
  it('HomePage를 랜더링한다.', () => {
    const { getByText } = renderHomePage();

    expect(getByText('HomePage')).not.toBeNull();
    expect(getByText('About')).not.toBeNull();
    expect(getByText('Restaurants')).not.toBeNull();
  });
});
