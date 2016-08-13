import * as _ from './src/constants';

import http from 'http';
import express from 'express';
import compression from 'compression';
import helmet from 'helmet';

const port = process && process.env && process.env.PORT || _.PORT;
const app = express();

app.server = http.createServer(app);

// Toggle secure headers.
app.use(helmet());

// Use gzip to send all content compressed.
app.use(compression());

app.use('/', express.static(__dirname + '/build'));

app.server.listen(process.env.PORT || _.PORT);

console.log(`Started on port ${port}`);
