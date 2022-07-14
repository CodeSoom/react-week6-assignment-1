// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

const categories = [
  { name: '한식', id: 1 },
  { name: '중식', id: 2 },
  { name: '일식', id: 3 },
  { name: '양식', id: 4 },
  { name: '분식', id: 5 },
];

const getCategories = [
  rest.get('/categories', (req, res, ctx) => res(ctx.status(200), ctx.json(categories))),
];

export default getCategories;
