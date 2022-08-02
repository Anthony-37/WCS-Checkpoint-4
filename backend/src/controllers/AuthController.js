const models = require("../models");
const { verifyPassword } = require("../helpers/argonHelper");
const { encodeJwt } = require("../helpers/jwtHelpers");

exports.login = (req, res) => {
  const { firstname, email, password } = req.body;

  models.user.findByUserEmail(email).then((user) => {
    console.error(user);
    if (!user) {
      return res.status(401).send("Invalid credentials");
    }
    return verifyPassword(password, user[0].hash_password).then(
      (verification) => {
        if (verification) {
          const userAnswer = user[0];
          const token = encodeJwt(userAnswer);
          res.cookie("token", token, { httpOnly: true, secure: false });
          res.status(200).send(`Great, ${firstname} is login`);
        } else {
          res.status(401).send("Invalid credentials");
        }
      }
    );
  });
};

exports.logout = (req, res) => {
  res.clearCookie("token").status(200).send(`GoodBy, is logout`);
};
