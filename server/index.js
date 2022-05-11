const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

const routerApi = require('./routes');

const { errorHandler, logErrors, boomErrorHandler } = require('./middlewares/error.handler')


app.use(cors());
app.use(express.json());

// Error handling
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

routerApi(app);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('server is listening on port 3000');
}).on('error', (error) => {
  // eslint-disable-next-line no-console
  console.error(error);
});
