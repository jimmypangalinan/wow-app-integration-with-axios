const { transaction, user } = require("../../models");

// add new transaction
exports.addTransaction = async (req, res) => {
  const detailTrans = await transaction.findOne({
    where: {
      idUser: req.user.id,
    },
  });

  if (detailTrans) {
    return res.status(400).send({
      Status: "failed",
      message: "you still have an unfinished transaction, please wait !!",
    });
  }
  console.log(req.user.id);

  try {
    console.log(req.body);
    const createTransaction = await transaction.create({
      idUser: req.user.id,
      transferProof: req.file.filename,
      accountNumber: req.body.accountNumber,
      remainingActive: 0,
      startDate: "",
      endDate: "",
      userStatus: "Not Active",
      paymentStatus: "Pending",
    });

    res.send({
      status: "Success",
      data: {
        transaction: {
          createTransaction,
          transferProof:
            "http://localhost:5000/uploads/transferproof/" +
            createTransaction.transferProof,
        },
      },
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      status: "Bad Request",
      message: "Please Login to make transaction",
    });
  }
};

// get transactions
exports.getTransactions = async (req, res) => {
  try {
    const transactionExist = await transaction.findAll({
      include: {
        model: user,
        as: "user",
        attributes: {
          exclude: [
            "role",
            "email",
            "status",
            "password",
            "createdAt",
            "updatedAt",
          ],
        },
      },
      attributes: {
        exclude: ["idUser", "createdAt", "updatedAt"],
      },
    });

    if (!transactionExist) {
      res.send({
        status: "Transaction No Exist",
      });
    } else {
      res.status(200).send({
        status: "Success",
        data: {
          transaction: transactionExist,
        },
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({
      status: "Bad Request",
    });
  }
};

// get transaction by id
exports.getTransaction = async (req, res) => {
  try {
    const transactionExist = await transaction.findOne({
      where: {
        id: req.params.id,
      },
      include: {
        model: user,
        as: "user",
        attributes: {
          exclude: [
            "role",
            "email",
            "status",
            "password",
            "createdAt",
            "updatedAt",
          ],
        },
      },
      attributes: {
        exclude: ["idUser", "createdAt", "updatedAt"],
      },
    });

    if (!transactionExist) {
      res.send({
        status: "Transaction No Exist",
      });
    } else {
      res.status(200).send({
        status: "Success",
        data: {
          transaction: transactionExist,
        },
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({
      status: "Bad Request",
    });
  }
};

// update transaction by id
exports.updateTransaction = async (req, res) => {
  try {
    newUpdate = req.body;
    console.log(newUpdate);
    const updateTransaction = await transaction.update(
      {
        ...newUpdate,
      },
      {
        where: {
          id: req.params.id,
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      }
    );

    const dataUpdate = await transaction.findOne({
      where: {
        id: req.params.id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    if (dataUpdate.paymentStatus == "Approved") {
      await user.update(
        {
          status: "Subscribe",
        },
        {
          where: {
            id: dataUpdate.idUser,
          },
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        }
      );
    } else {
      await user.update(
        {
          status: "Not subscribe",
        },
        {
          where: {
            id: dataUpdate.idUser,
          },
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        }
      );
    }
    res.status(200).send({
      status: "Success",
      data: {
        dataUpdate,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      status: "Bad Request",
    });
  }
};

// Delete transaction by id
exports.deleteTransaction = async (req, res) => {
  try {
    const deleteTransaction = await transaction.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deleteTransaction) {
      res.send({
        status: "Transaction not found",
      });
    } else {
      res.send({
        status: "Success",
        data: {
          id: req.params.id,
        },
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({
      status: "Bad Request",
    });
  }
};
