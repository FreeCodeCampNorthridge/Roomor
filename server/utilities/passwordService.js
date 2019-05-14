const bcrypt = require('bcrypt');
const saltRounds = process.env.SALT_ROUNDS || 10;

const hashPassword = async function(myPlainTextPassword) {
  try {
    let hash = await bcrypt.hash(myPlainTextPassword, saltRounds);
    return hash;
  } catch (err) {
    if (err) throw err;
  }
};

const comparePassword = async function(myPlainTextPassword, hash) {
  try {
    let match = await bcrypt.compare(myPlainTextPassword, hash);
    return match;
  } catch (err) {
    if (err) throw err;
  }
};

module.exports = {
  hashPassword,
  comparePassword
};
