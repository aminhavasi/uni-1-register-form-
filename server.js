const http = require('http');
const express = require('express');
const app = express();
const httpServer = http.createServer(app);
const helmet = require('helmet');
require('dotenv').config();
const rfs = require('rotating-file-stream');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const { mongoDb } = require('./src/db/mongodb');
//*------------------------------------------------------- */
mongoDb();
const port = process.env.PORT || 8008;

let accessLogStream = rfs.createStream('access.log', {
    interval: '24h',
    path: path.join(__dirname, 'src/log'),
    compress: true,
});

const corsOptions = {
    exposedHeaders: 'x-auth',
};
//*------------------------------------------------------- */
app.use(express.json());
app.use(helmet());
app.use(morgan('combined', { stream: accessLogStream }));
app.use(cors(corsOptions));

app.use('/api/auth', require('./src/routes/auth'));
//*------------------------------------------------------- */
httpServer.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
