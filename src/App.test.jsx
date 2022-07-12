import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import App from './App';

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  const { container } = render((
    <MemoryRouter>
      <App />
    </MemoryRouter>
  ));

  it('app이 렌더링된다', () => {
    expect(container).toHaveTextContent('헤더');
  });
});
