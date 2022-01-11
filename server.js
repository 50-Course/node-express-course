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

app.get('/users/:id', (req, res)=>{
    console.log(req.params);
    res.json({
        success: true,
        message: 'got one user',
        data: req.params.id
    })
})
app.listen(8000, () => console.log('Server is running'));
