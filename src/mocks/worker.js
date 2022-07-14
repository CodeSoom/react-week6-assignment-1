// eslint-disable-next-line import/no-extraneous-dependencies
import { setupWorker } from 'msw';

import getRegions from './regions';

import getCategories from './categories';

import getRestaurants from './restaurants';

const worker = setupWorker(...getRegions, ...getCategories, ...getRestaurants);

export default worker;
