import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 1, name: '서울' },
      ],
      categories: [],
      restaurants: [],
      restaurant: {
        id: 1,
        name: '양천주가',
        menuItems: [
          { id: 1, name: '탕수육' },
          { id: 2, name: '팔보채' },
        ],
      },
    }));
  });

  context.each`
    pagename | path |  expected
    ${'home'} |${'/'} | ${'Home'}
    ${'about'} | ${'/about'} |  ${'About...'}
    ${'restaurants list'} |${'/restaurants'} |  ${'서울'}
    ${'restaurant infomation'} |${'/restaurants/1'} |  ${'양천주가'}
    ${'invalid'} | ${'/invalid'} | ${'Not Found'}
  `('with path $path', ({ path, pagename, expected }) => {
    it(`renders the ${pagename} page`, () => {
      const { container } = render((
        <MemoryRouter initialEntries={[path]}>
          <App />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent(expected);
    });
  });
});
