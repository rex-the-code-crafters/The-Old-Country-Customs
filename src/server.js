import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import app from './app.js'

// Serve static files from public/ in local dev
app.use('/uploads/*', serveStatic({ root: './public' }))

const port = process.env.PORT || 3000

serve({ fetch: app.fetch, port }, (info) => {
  console.log(`\n  The Old Country Customs`)
  console.log(`  Running at http://localhost:${info.port}\n`)
})
