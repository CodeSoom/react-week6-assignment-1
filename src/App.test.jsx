import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

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

  const renderApp = () => render((
    <MemoryRouter>
      <App />
    </MemoryRouter>
  ));

  it('renders header', () => {
    const { container } = renderApp();

    expect(container).toHaveTextContent('헤더');
  });

  it('renders HomePage', () => {
    const { container } = renderApp();

    expect(container).toHaveTextContent('Home');
    expect(container).toHaveTextContent('About');
    expect(container).toHaveTextContent('Restaurants');
  });

  it('listens for click event on route /about', () => {
    const { container, getByText } = renderApp();

    fireEvent.click(getByText('About'));

    expect(container).toHaveTextContent('About');
    expect(container).toHaveTextContent('About 페이지 입니다.');
  });

  it('listens for click event on route /', () => {
    const { container, getByText } = renderApp();

    fireEvent.click(getByText('About'));
    fireEvent.click(getByText('헤더'));

    expect(container).toHaveTextContent('Home');
  });

  it('listens for click event on route /restaurants', () => {
    const { container, getByText } = renderApp();

    fireEvent.click(getByText('Restaurants'));

    expect(container).toHaveTextContent('서울');
    expect(container).toHaveTextContent('한식');
    expect(container).toHaveTextContent('마법사주방');
  });
});
