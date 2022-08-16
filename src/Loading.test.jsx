import { render } from '@testing-library/react';

import Loading from './Loading';

describe('Loading', () => {
  it('renders', () => {
    const { queryByText } = render(<Loading />);

    expect(queryByText('Now Loading...')).not.toBeNull();
  });
});
