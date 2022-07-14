// eslint-disable-next-line import/no-extraneous-dependencies
import { setupWorker } from 'msw';

import getRegions from './regions';

import getCategories from './categories';

const worker = setupWorker(...getRegions, ...getCategories);

export default worker;
