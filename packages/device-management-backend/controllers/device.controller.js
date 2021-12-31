const db = require("../models");
const Device = db.devices;
const Category = db.categories;
const Sequelize = db.Sequelize;

exports.create = (req, res) => {
  if (!req.body.category_id) {
    res.status(400).send({
      message: "Category cannot be empty!",
    });
    return;
  }

  const device = {
    category_id: req.body.category_id,
    color: req.body.color,
    partNumber: req.body.partNumber,
  };

  Device.create(device)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the device.",
      });
    });
};

exports.findAll = (req, res) => {
  Device.findAll({ include: ["category"] })
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving devices.",
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Device.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Device was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Device with id=${id}. Maybe Device was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Device with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Device.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Device was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Device with id=${id}. Maybe Device was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Device with id=" + id,
      });
    });
};
