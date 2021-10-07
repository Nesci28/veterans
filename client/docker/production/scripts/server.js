const express = require('express');
const app = express();
app.use(express.static('/var/html/www'));
app.get('/*', (_, res) => {
  res.sendFile('/var/html/www/index.html');
});
app.listen(process.env.PORT || 80);
