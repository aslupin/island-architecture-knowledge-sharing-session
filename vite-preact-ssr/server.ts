import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import polka from 'polka'
import { createServer as createViteServer } from 'vite'

const __dirname = path.dirname(
  fileURLToPath(import.meta.url)
)

async function createServer() {
  const app = polka()
  
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom'
  })

  app.use(vite.middlewares)

  app.get('*', async (req: any, res: any, next: any) => {
    const url = req.originalUrl

    try {
      let template = fs.readFileSync(
        path.resolve(__dirname, 'index.html'),
        'utf-8',
      )

      // load index.html
      template = await vite.transformIndexHtml(url, template)
      // use render() func from entry-server
      const { renderToString } = await vite.ssrLoadModule('src/entry-server.tsx')
      // server rendered
      const appHtml = await renderToString(url)
      // replace outlet with html rendered
      const html = template.replace(`<!--ssr-outlet-->`, appHtml)
      // send HTML to browser
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html')
      res.end(html)
    } catch (e) {
      console.error(e)

      vite.ssrFixStacktrace(e as Error)
      next(e)
    }
  })

  app.listen(5173, () => {
    console.log('listening on port 5173 (http://localhost:5173/)')
  })
}

createServer()
