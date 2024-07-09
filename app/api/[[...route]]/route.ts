import { z } from 'zod';
import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { zValidator } from '@hono/zod-validator';
import { clerkMiddleware, getAuth } from '@hono/clerk-auth'
import { error } from 'console';
import authors from './authors'
import books from './books'

export const runtime = 'edge'

const app = new Hono().basePath('/api')

app
  .get('/hello',
    clerkMiddleware(),
    (c) => {
      const auth = getAuth(c);

      if (!auth?.userId) {
        return c.json({error : "Unauthoriazed"});
      }

    return c.json({
      message: 'Hello Next.js!',
      userId : auth.userId,
    })
  });

app.route('/authors', authors)
app.route('/books', books)

export const GET = handle(app)
export const POST = handle(app)