import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import given from 'given2';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    given('initialEntries', () => ['/']);
  });
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
    restaurant: {
      id: 1,
      categoryId: 5,
      name: '마법사주방',
      address: '서울 강남구 강남대로94길 21',
      menuItems: [],
      reviews: [],
      information: '성전떡볶이 in 서울 강남구 강남대로94길 21',
    },
  }));

  const renderApp = () => render((
    <MemoryRouter initialEntries={given.initialEntries}>
      <App />
    </MemoryRouter>
  ));

  it('renders header', () => {
    const { container } = renderApp();

    expect(container).toHaveTextContent('헤더');
  });

  context('when route "/"', () => {
    it('renders HomePage', () => {
      const { container } = renderApp();

      expect(container).toHaveTextContent('Home');
      expect(container).toHaveTextContent('About');
      expect(container).toHaveTextContent('Restaurants');
    });
  });

  context('when route /about', () => {
    it('renders RoutePage', () => {
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
  });

  context('when route "/restaurants"', () => {
    it('renders RestaurantsPage', () => {
      const { container, getByText } = renderApp();

      fireEvent.click(getByText('Restaurants'));

      expect(container).toHaveTextContent('서울');
      expect(container).toHaveTextContent('한식');
      expect(container).toHaveTextContent('마법사주방');
    });
  });

  context('when route "/restaurants/[id]"', () => {
    it('renders RestaurantPage', () => {
      const { container, getByText } = renderApp();

      fireEvent.click(getByText('Restaurants'));
      fireEvent.click(getByText('마법사주방'));

      expect(container).toHaveTextContent('마법사주방');
    });
  });

  context('without exist url', () => {
    given('initialEntries', () => ['/any_not_exist_url']);
    it('renders "404 Not Found"', () => {
      const { container } = renderApp();

      expect(container).toHaveTextContent('404 Not Found');
    });
  });
});
