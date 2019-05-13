const logout = async function(req, res) {
  res.clearCookie('token');
  res.send('You have successfully logged out');
};

module.exports = logout;
