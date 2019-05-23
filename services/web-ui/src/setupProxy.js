const proxy = require('http-proxy-middleware');

// eslint-disable-next-line func-names
module.exports = function (app) {
    app.use(proxy(['/login', '/logout'], { target: 'http://iam.openintegrationhub.com', changeOrigin: true }));
};
