import { fireEvent, render, screen } from '@testing-library/react';
import HomePage from './HomePage';
import { MemoryRouter } from 'react-router-dom';

describe('HomePage', () => {
  const renderHomePage = ({ path }) =>
    render(
      <MemoryRouter initialEntries={[path]}>
        <HomePage />
      </MemoryRouter>
    );

  const links = [
    { path: '/about', title: 'About' },
    { path: '/restaurants', title: 'Restaurants' },
    { path: '/404', title: '멸망의 길' },
  ];

  it('Home 타이틀이 보인다.', () => {
    const { container } = renderHomePage({ path: '/home' });
    expect(container).toHaveTextContent('Home');
  });

  it('Link들이 보인다.', () => {
    const { container, getByText } = renderHomePage({ path: '/home' });
    links.forEach(({ path, title }) => {
      expect(container).toHaveTextContent(title);
      expect(getByText(title).closest('a')).toHaveAttribute('href', path);
    });
  });
});
