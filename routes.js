const nextRoutes = require('next-routes-t')
const routes = module.exports = nextRoutes()

routes.add('login', '/login/:token', 'login')
