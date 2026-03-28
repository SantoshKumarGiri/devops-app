const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('DevOps Project is Live 🚀 and updated by Santosh Kumar Giri');

});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
