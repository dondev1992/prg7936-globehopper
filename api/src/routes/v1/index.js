const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const docsRoute = require('./docs.route');
const countryRoute = require('./country.route');
const cityRoute = require('./city.route');
const continentRoute = require('./continent.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/countries',
    route: countryRoute,
  },
  {
    path: '/continents',
    route: continentRoute,
  },
  {
    path: '/cities',
    route: cityRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });

  router.use('/test', (req, res) => {
    res.send({ message: 'HURACHI!' });
  });
}

module.exports = router;
