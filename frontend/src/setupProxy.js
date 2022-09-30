const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/accounts',
    createProxyMiddleware({
      target: 'https://www.identitytoolkit.googleapis.com/v1',
      changeOrigin: true,
    })
  )

  app.use(
    '/generated',
    createProxyMiddleware({
      target: 'https://images.wombo.art',
      changeOrigin: true,
    })
    )

  app.use(
    '/tasks',
    createProxyMiddleware({
      target: 'https://paint.api.wombo.ai/api',
      changeOrigin: true,
    })
    )
    
    // app.use(
    //   '/',
    //   createProxyMiddleware({
    //     target: 'https://app.wombo.art',
    //     changeOrigin: true,
    //   })

  // )
}