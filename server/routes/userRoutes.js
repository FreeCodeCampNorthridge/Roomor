const router = require('express').Router();
const {
  login,
  signup,
  edit,
  remove
} = require('./../controllers/userController');

router.post('/login', login);
router.post('/signup', signup);
router.put('/edit/:id', edit);
router.delete('/remove/:id', remove);

module.exports = router;
