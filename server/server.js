const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.json({ users: ['user0', 'user1', 'user2', 'user3'] });
});

app.listen(5010, () => {
  console.log('Server started on port 5010');
});
