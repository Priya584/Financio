import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import accounts from './accounts';
import categories from './categories';
import summary from './summary';
<<<<<<< HEAD
import transactions from './transactions';
=======
>>>>>>> 75fc317388d910d825626fd58c53dbbc2a6cc5ef

export const runtime = 'edge';

const app = new Hono().basePath('/api');

const routes=app
    .route('/accounts', accounts)
    .route('/categories', categories)
<<<<<<< HEAD
    .route('/transactions', transactions)
=======
>>>>>>> 75fc317388d910d825626fd58c53dbbc2a6cc5ef
    .route('/summary', summary);

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);

export type AppType = typeof routes;