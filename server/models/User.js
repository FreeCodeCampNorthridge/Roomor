const { Schema, model } = require('mongoose');
const {
  hashPassword,
  comparePassword
} = require('../utilities/passwordService');

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  userCreated: { type: Date, default: Date.now }
});

// before saving user to DB
UserSchema.pre('save', async function(next) {
  // if the users password is not modified move onto next
  if (!this.isModified('password')) return next();
  // hash the password
  try {
    let hash = await hashPassword(this.password);
    this.password = hash;
    next();
  } catch (err) {
    if (err) throw err;
  }
});

// create comparePassword method
UserSchema.methods.checkPassword = async function(potentialPassword) {
  try {
    // compare potential password to this password
    let match = await comparePassword(potentialPassword, this.password);
    return match;
  } catch (err) {
    if (err) throw err;
  }
};

module.exports = model('User', UserSchema);
