import { render } from '@testing-library/react';

import AboutPage from './AboutPage';

describe('AboutPage', () => {
  it('shows AboutPage description', () => {
    const { queryByText } = render(<AboutPage />);

    expect(queryByText('About')).not.toBeNull();
  });
});
