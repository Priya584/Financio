import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import accounts from './accounts';
import categories from './categories';
import { HTTPException } from 'hono/http-exception';

export const runtime = 'edge';

const app = new Hono().basePath('/api');

const routes=app
    .route('/accounts', accounts)
.route('/categories', categories);
export const GET = handle(app);
export const POST = handle(app);

export type Apptype = typeof routes;