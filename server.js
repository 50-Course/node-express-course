const express = require('express');

const app = express();

const mockUserData = [
  { name: 'firecracker' },
  { name: 'rosaline' },
];

app.get('/users', (req, res) => {
  res.json({
    success: true,
    message: 'Successful got users. Nice!',
    data: mockUserData,
  });
});

app.listen(8000, () => console.log('Server is running'));
