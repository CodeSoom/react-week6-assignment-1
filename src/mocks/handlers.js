/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';

import REGIONS from '../../fixtures/regions';
import CATEGORIES from '../../fixtures/categories';
import RESTAURANTS from '../../fixtures/restaurants';

const handlers = [
  rest.get('/regions', (req, res, ctx) => res(ctx.status(200), ctx.json(REGIONS))),
  rest.get('/categories', (req, res, ctx) => res(ctx.status(200), ctx.json(CATEGORIES))),
  rest.get('/restaurants', (req, res, ctx) => res(ctx.status(200), ctx.json(RESTAURANTS))),
];

export default handlers;
