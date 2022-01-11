const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

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

app.get('/users/:id', (req, res) => {
  console.log(req.params);
  res.json({
    success: true,
    message: 'got one user',
    data: req.params.id,
  });
});

app.post('/users', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const mockUsername='billGates';
    const mockPassword='billythegoat';

    if (username===mockUsername && password===mockPassword) {
        res.json({
            success: true,
            message: 'Welcome User ${username}!',
            token: 'jwt token comes here'
        })
    } else {
        res.json({
            success: false,
            message: 'login details do not match our records'
        })
    }
});

app.listen(8000, () => console.log('Server is running'));
