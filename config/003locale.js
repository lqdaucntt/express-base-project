/**
 * Created by daulq on 3/27/18.
 */
const i18n = require('i18n-2');
const { app } = require('./001app');

const options = {
  default: 'en',
  locales: ['en', 'vi'],
};
i18n.expressBind(app, options);
app.use((req, res, next) => {
  req.i18n.setLocaleFromCookie();
  next();
});