const jwt = require('jsonwebtoken'),
  SECRET = process.env.SECRET;

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
