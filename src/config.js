require('babel/polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'Automation of Things',
    description: 'All the modern best practices in one example.',
    head: {
      titleTemplate: 'Automation of Things: %s',
      meta: [
        {name: 'description', content: 'AoT website.'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'Automation of Things'},
        {property: 'og:image', content: 'https://react-redux.herokuapp.com/logo.jpg'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'Automation of things'},
        {property: 'og:description', content: 'AoT website.'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: ''},
        {property: 'og:creator', content: ''},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment);
