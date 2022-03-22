const UserModel = require("../Model/User.model");

exports.createUser = async (data) => {
  const { firstName, lastName, email, bank, mobile, ifsc } = data;
  try {
    const newUser = await new UserModel({
      firstName,
      lastName,
      email,
      bank,
      mobile,
      ifsc,
    }).save();
    return newUser;
  } catch (error) {
    throw { message: error.message, code: 402 };
  }
};
