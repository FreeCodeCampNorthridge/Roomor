const jwt = require('jsonwebtoken'),
  SECRET = process.env.SECRET;

const cookieOptions = {
  httpOnly: true,
  // secure: true, on deployment
  signed: true,
  maxAge: (1000 * 60) ^ 60,
  expiresIn: new Date(Date.now() + 90000)
};

const createToken = user => {
  jwt.sign({ user, exp: Math.floor(Date.now() / 1000) + 60 * 60 }, SECRET);
};

const validToken = token => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, SECRET, (err, user) =>
      err ? reject(err) : resolve(user)
    );
  });
};

module.exports = {
  validToken,
  createToken
};
