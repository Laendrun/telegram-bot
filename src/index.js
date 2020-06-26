require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const morgan_type = process.env.NODE_ENV = 'dev' ? 'dev' : 'tiny';

const botRoutes = require('./api/routes/bot.routes.js');

app.use(morgan(morgan_type));
app.use(cors());
app.use(express.json());

app.use('/bot', botRoutes);

function notFound(req, res, next) {
    res.status(404);
    const error = new Error('Not Found - ' + req.originalUrl);
    next(error);
}

function errorHandler(err, req, res, next) {
    res.status(res.statusCode || 500);
    res.json({
        error: err.message
    });
}

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 4040;
app.listen(port, () => {
    console.log(`App listening on port ${port}...`);
});