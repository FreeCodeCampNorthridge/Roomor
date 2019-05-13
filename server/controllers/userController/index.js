const login = require('./login'),
  signup = require('./signup'),
  edit = require('./edit'),
  logout = require('./logout'),
  cookieChecker = require('./cookieChecker'),
  remove = require('./remove');

module.exports = {
  login,
  signup,
  logout,
  cookieChecker,
  edit,
  remove
};
