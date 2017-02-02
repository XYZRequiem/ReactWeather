var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next) {
  if (req.headers['x-forward-proto'] === 'http') {
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
