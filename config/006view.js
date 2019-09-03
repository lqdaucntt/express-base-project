/**
 * Created by daulq on 3/27/18.
 */
const path = require('path');
const { app } = require('./001app');
// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
