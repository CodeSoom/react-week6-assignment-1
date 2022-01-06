import { render } from '@testing-library/react';

import HomePage from '.';

describe('HomePage', () => {
  it('renders title and links', () => {
    const { getByText } = render(<HomePage />);
    expect(getByText('홈페이지')).toBeInTheDocument();
    expect(getByText('About')).toBeInTheDocument();
    expect(getByText('레스토랑 리스트')).toBeInTheDocument();
  });
});
