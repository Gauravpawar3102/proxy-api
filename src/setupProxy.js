const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = {
  target: 'https://jsonplaceholder.typicode.com',
  changeOrigin: true,
};
module.exports = function (app) {
  app.use(['/todos/1', '/todos/2'], createProxyMiddleware(proxy));
};
