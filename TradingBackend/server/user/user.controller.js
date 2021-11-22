const User = require('./user.model');
const crypto = require('crypto');
const nodemailer = require('nodemailer')

const FRONTEND_URL = 'https://tradingbackend.herokuapp.com'
/**
 * Load user and append to req.
 */
function load(req, res, next, id) {
  User.get(id)
    .then((user) => {
      req.user = user; // eslint-disable-line no-param-reassign
      return next();
    })
    .catch(e => next(e));
}

/**
 * Get user
 * @returns {User}
 */
function get(req, res) {
  return res.json(req.user);
}

/**
 * Create new user
 * @returns {User}
 */
async function register(req, res, next) {
  const verificationCode = crypto.randomBytes(30).toString('hex');
  const { firstName, lastName, email, birthday, password } = req.body
  let user = await User.findOne({ email })
  if (user) {
    return res.json({
      error: 'User Already Exists'
    })
  }
  user = new User({
    firstName,
    lastName,
    email,
    birthday,
    password,
    verificationCode,
    activated: false
  });

  user.save()
    .then(usr => {
      const mailOptions = {
        from: 'tradingbackend.herokuapp.com',
        to: email,
        subject: 'Trading Platform Signup Success',
        text: `<div>Congratulations. You have signed up to our trading platform.<br/>You can now enjoy trading.<br/>Please verify your email.</div><a href='${FRONTEND_URL}/verification/${verificationCode}'>Verify Email</a>`,
        html: `<div>Congratulations. You have signed up to our trading platform.<br/>You can now enjoy trading.<br/>Please verify your email.</div><a href='${FRONTEND_URL}/verification/${verificationCode}'>Verify Email</a>`,
      };
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        name: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: 'geniusdev1108@gmail.com',
          pass: 'QWER!@#$qwer1234'
        },
        tls: {
          rejectUnauthorized: false,
        },
      });
      transporter.verify((err, success) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Server is ready to take our message");
        }
      });
      transporter.sendMail(mailOptions, res => console.log(res))
      res.json(usr.toAuthJSON())
    })
    .catch(e => {
      console.log("failed register")
      return next(e)
    });
}

/**
 * Update existing user
 * @property {string} req.body.username - The username of user.
 * @property {string} req.body.mobileNumber - The mobileNumber of user.
 * @returns {User}
 */
function update(req, res) {
  const { firstName, lastName, birthday, password, currentPassword } = req.body;
  const { userId } = req.params;
  console.log(currentPassword)
  if (currentPassword) {
    console.log(currentPassword)
    User.findById(userId)
      .then(user => {
        if (user.password == currentPassword) {
          user.password = password;
          user.save()
            .then(updateUser => {
              res.json(updateUser.toAuthJSON())
            })          
        }
        else {
          res.json("incorrect");
        }
      })
      .catch((e) => next(e));
  } else {
    console.log(currentPassword)
    User.findById(userId)
      .then(user => {
        user.firstName = firstName;
        user.lastName = lastName;
        user.birthday = birthday;
        user.save()
          .then(updateUser => {
            res.json(updateUser.toAuthJSON())
          })
      })
      .catch((e) => next(e));
  }

}

/**
 * Get user list.
 * @property {number} req.query.skip - Number of users to be skipped.
 * @property {number} req.query.limit - Limit number of users to be returned.
 * @returns {User[]}
 */
function list(req, res, next) {
  const { limit = 50, skip = 0 } = req.query;
  User.list({ limit, skip })
    .then(users => res.json(users))
    .catch(e => next(e));
}

/**
 * Delete user.
 * @returns {User}
 */
function remove(req, res, next) {
  const user = req.user;
  user.remove()
    .then(deletedUser => res.json(deletedUser))
    .catch(e => next(e));
}

/**
 * Login user.
 * @returns {User}
 */

module.exports = { load, get, register, update, list, remove };
