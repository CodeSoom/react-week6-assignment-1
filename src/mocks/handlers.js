import { rest } from 'msw';

import CATEGORIES from '../../fixtures/categories';
import REGIONS from '../../fixtures/regions';
import RESTAURANTS from '../../fixtures/restaurants';
import RESTAURANT from '../../fixtures/restaurant';

const handlers = [
  rest.get('https://eatgo-customer-api.ahastudio.com/regions', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json(REGIONS),
  )),

  rest.get('https://eatgo-customer-api.ahastudio.com/categories', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json(CATEGORIES),
  )),

  rest.get('https://eatgo-customer-api.ahastudio.com/restaurants', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json(RESTAURANTS),
  )),

  rest.get('https://eatgo-customer-api.ahastudio.com/restaurants/:restaurantId', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json(RESTAURANT),
  )),
];

export default handlers;
