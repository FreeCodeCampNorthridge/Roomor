const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  userCreated: { type: Date, default: Date.now }
});

// UserSchema.pre('save', function(next) {
//   var user = this;
//   if (!user.isModified('password')) return next();
//   bcrypt.genSalt(SALT_ROUNDS, function(err, salt) {
//     if (err) return next(err);
//     bcrypt.hash(user.password, salt, function(err, hash) {
//       if (err) return next(err);
//       user.password = hash;
//       next();
//     });
//   });
// });

// UserSchema.methods.comparePassword = function(candidatePassword, cb) {
//   bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
//     if (err) throw err;
//     cb(null, isMatch);
//   });
// };

module.exports = model('User', userSchema);
