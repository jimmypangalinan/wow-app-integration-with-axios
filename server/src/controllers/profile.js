const { profile, user } = require("../../models");

//  get data profile user
exports.getProfile = async (req, res) => {
  try {
    const dataProfile = await profile.findOne({
      where: {
        idUser: req.user.id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      include: {
        model: user,
        as: "user",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    if (!dataProfile) {
      res.send({
        status: "Profile Masih Kosong nih",
      });
    } else {
      dataProfiles = JSON.parse(JSON.stringify(dataProfile));
      res.status(200).send({
        status: "Success",
        dataProfiles,
      });
    }
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
    });
  }
};

//  add profle user
exports.addProfile = async (req, res) => {
  try {
    const newProfile = req.body;
    await profile.findAll(newProfile);
    res.send({
      status: "Success",
      newProfile,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
    });
  }
};
