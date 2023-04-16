const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); // parse incoming requests with JSON payloads

app.post('/login', (req, res) => {
  const { username, password } = req.body; // get username and password from JSON payload

  // perform some validation checks
  if (username === 'admin' && password === 'password') {
    // valid credentials
    res.json({ success: true, message: 'Credentials are valid' });
  } else {
    // invalid credentials
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
