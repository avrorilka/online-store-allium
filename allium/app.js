const path = require('path');
const adminBroRouter = require('./routes/adminRouter.js');
const viewRouter = require('./routes/viewRoutes');
const AppError = require('./utils/appError');

const express = require("express");
const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', viewRouter);
app.use('/admin', adminBroRouter);
app.all('*', (req, res, next) => {
  next(
    new AppError(`Не можу знайти ${req.originalUrl} на цьому сервері!`, 404)
  );
});

app.listen(3000, () => console.log("Running on localhost:3000"));
