require('dotenv').config();
const jwt = require('jsonwebtoken'),
  { SECRET } = process.env;

async function createToken(user) {
  try {
    let token = await jwt.sign(
      { user, exp: Math.floor(Date.now() / 1000) + 60 * 60 },
      SECRET
    );
    return token;
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
  createToken
};
