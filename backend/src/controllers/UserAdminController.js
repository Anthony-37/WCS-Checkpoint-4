const models = require("../models");
// const { hashPassword } = require("../helpers/argonHelper");

class UserAdminController {
  static browse = (req, res) => {
    models.user
      .findAll()
      .then(([users]) => res.send(users))
      .catch((err) => res.status(500).send(err));
  };

  static read = (req, res) => {
    models.user
      .find(req.params.id)
      .then(([user]) => {
        if (user.length === 0) {
          res.sendStatus(404);
        } else {
          res.send(user);
        }
      })
      .catch((err) => res.status(500).send(err));
  };

  static add = (req, res) => {
    const newUser = req.body;

    models.user
      .insert({ ...newUser })
      .then(() => {
        console.error(newUser);
        return res.status(201).json({ ...newUser });
      })
      .catch((err) => {
        return res.status(500).send({ err });
      });
  };

  static edit = (req, res) => {
    const newUser = req.body;
    models.user
      .update(newUser, req.params.id)
      .then(([result]) => {
        console.error(newUser);
        if (result.affectedRows === 0) throw new Error("no change affected");
        res.status(201).send({ ...newUser });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send({ err });
      });
  };

  static delete = (req, res) => {
    models.user
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = UserAdminController;
