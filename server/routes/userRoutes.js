const router = require('express').Router();
const {
  login,
  signup,
  logout,
  edit,
  remove
} = require('./../controllers/userController');

// router.get('/users/authorized', authorized);
// /authorized route takes signedCookies from request object and token from signedCookies
// tokenService.validToken(token).then(user)
// grab username and hashed password from user from token
// check that user in db with both values exists (hardcoded hashed password) (would never get to this point anyways but serves as extra security)
// get user back from db
// send user.username and user.email back to front end
// =============================
router.post('/login', login);
router.get('/logout', logout);
router.post('/signup', signup);
// router.put('/edit/:id', edit);
// router.delete('/remove/:id', remove);

module.exports = router;
