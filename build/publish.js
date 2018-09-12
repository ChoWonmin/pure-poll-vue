const compression = require('compression');
const express = require('express');
const config = require('../config');
const port = config.publish.port;
const app = express();
const cors = require('cors');
const chalk = require('chalk')

app.use(require('connect-history-api-fallback')());
app.use(compression());
app.use(cors(config.publish.cors));


const cacheDuration = 1000 * 60 * 60;
app.use(express.static('./dist' , {maxAge: cacheDuration} ));
console.log(chalk.cyan('Server start with Express , port : ' + port));
console.log(chalk.cyan('The build must be done before publishing. If you have not built it, run \'npm run build\' in the current state.'));
app.listen(port);
