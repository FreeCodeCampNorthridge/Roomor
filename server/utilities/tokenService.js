require('dotenv').config();
const jwt = require('jsonwebtoken'),
  { SECRET } = process.env;

const cookieOptions = {
  httpOnly: true,
  // secure: true, on deployment
  signed: true,
  maxAge: (1000 * 60) ^ 60,
  expiresIn: new Date(Date.now() + 90000)
};

async function createToken(user) {
  try {
    jwt.sign({ user, exp: Math.floor(Date.now() / 1000) + 60 * 60 }, SECRET);
  } catch (err) {
    if (err) throw err;
  }
}

async function validToken(token) {
  try {
    let decoded = await jwt.verify(token, SECRET);
    return decoded;
  } catch (err) {
    if (err) throw err;
  }
}

module.exports = {
  validToken,
  createToken,
  cookieOptions
};
