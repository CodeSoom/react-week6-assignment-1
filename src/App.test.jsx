import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import App from './App';

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions: [
      { id: 1, name: '서울' },
    ],
    categories: [
      { id: 1, name: '한식' },
    ],
    restaurants: [
      { id: 1, name: '마법사주방' },
    ],
  }));

  const renderComponent = ({ path }) => render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );

  it('renders App', () => {
    renderComponent({ path: '/' });
  });

  context('with path /', () => {
    it('renders the home page', () => {
      const { getByText } = renderComponent({ path: '/' });
      expect(getByText('홈페이지')).toBeInTheDocument();
    });
  });
});
