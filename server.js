const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const validEmail = process.env.EMAIL;
  const validPassword = process.env.PASSWORD;

  if (email === validEmail && password === validPassword) {
    res.send('<h2 style="color:green;text-align:center;">Login Successful ✅</h2>');
  } else {
    res.send('<h2 style="color:red;text-align:center;">Invalid email or password ❌</h2>');
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
