// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

const regions = [
  { name: '서울', id: 1 },
  { name: '대전', id: 2 },
  { name: '대구', id: 3 },
  { name: '부산', id: 4 },
  { name: '광주', id: 5 },
  { name: '강원도', id: 6 },
  { name: '인천', id: 7 },
  { name: '제주도', id: 8 },

];

const getRegions = [
  rest.get('/regions', (req, res, ctx) => res(ctx.status(200), ctx.json(regions))),
];

export default getRegions;
