// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

const restaurants = [
  { name: '양천주가', id: 1 },
  { name: '한국식 초밥', id: 2 },
];

const getRestaurants = [
  rest.get('/restaurants', (req, res, ctx) => res(ctx.status(200), ctx.json(restaurants))),
];

export default getRestaurants;
