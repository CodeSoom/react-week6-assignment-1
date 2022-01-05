import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import HomePage from './HomePage';

test('HomePage', () => {
  render(<HomePage />);
});
