const router = require('express').Router();
const {
  login,
  signup,
  logout,
  cookieChecker,
  edit,
  remove
} = require('./../controllers/userController');

router.get('/authorized', cookieChecker);
router.post('/login', login);
router.get('/logout', logout);
router.post('/signup', signup);
// router.put('/edit/:id', edit);
// router.delete('/remove/:id', remove);

module.exports = router;
