const express = require('express');
 
const app = express();
 
app.get('/', (req, res) => {
  res.send('Hello Bye There!');
});
 
app.listen(8087, () => {
  console.log('Listening on port 8087');
});
