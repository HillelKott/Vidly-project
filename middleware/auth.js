const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).send('Access denied. No token provided.');

  try {
    const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
    req.user = decoded;
    next();
  }
  catch (ex) {
    res.status(400).send('Invalid token.');
  }
}

// token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDk3MmE5ZjFjYjRhNzA3ZWNkZTk0MzYiLCJpYXQiOjE1NzAxODc5MzV9.B_OOTNxWXif3imi7GLnesnLyYzDFzO50oYjm0wllldE
