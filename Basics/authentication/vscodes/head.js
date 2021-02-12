const express = require("express"),
      bodyParser = require('body-parser'),
      app = express();

app.listen(5000, () => {
    console.log('listening on port ' + 5000);
});