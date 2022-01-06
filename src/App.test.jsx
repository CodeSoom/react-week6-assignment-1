import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';

import App from './App';

describe('App', () => {
  useSelector.mockImplementation((selector) => selector({
    regions: [],
    categories: [],
    restaurants: [],
  }));

  it('renders header', () => {
    const { container } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    expect(container).toHaveTextContent('헤더');
  });

  context('with path /', () => {
    it('renders HomePage', () => {
      const { container } = render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>,
      );

      expect(container).toHaveTextContent('Home');
    });

    context('with path /about', () => {
      it('renders AboutPage', () => {
        const { container } = render(
          <MemoryRouter initialEntries={['/about']}>
            <App />
          </MemoryRouter>,
        );

        expect(container).toHaveTextContent('About 페이지 입니다.');
      });
    });

    context('with path /restaurants', () => {
      it('renders RestaurantsPage', () => {
        const { container } = render(
          <MemoryRouter initialEntries={['/restaurants']}>
            <App />
          </MemoryRouter>,
        );

        expect(container).toHaveTextContent('서울');
      });
    });

    context('with path /xxx', () => {
      it('renders NotFoundPage', () => {
        const { container } = render(
          <MemoryRouter initialEntries={['/xxx']}>
            <App />
          </MemoryRouter>,
        );

        expect(container).toHaveTextContent('Not Found 404');
      });
    });
  });
});
