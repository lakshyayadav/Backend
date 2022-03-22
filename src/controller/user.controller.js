const { createUser } = require("../services/user.service");
const { userCreateValidator } = require("../validator/user.validator");

exports.createUser = async (req, res) => {
  try {
    userCreateValidator(req.body);
  } catch (error) {
    res.status(422).send(error);
    return;
  }
  try {
    const newUser = await createUser(req.body);
    res.json(newUser);
  } catch (error) {
    res.status(404).send(error);
  }
};
exports.downloadUserFile = async (req, res) => {
  // try {
  //   userCreateValidator(req.body);
  // } catch (error) {
  //   res.status(422).send(error);
  //   return;
  // }

  try {
    const element = document.createElement("a");
    element.setAttribute("href", "data:text/plain;charset=utf-8,");
    element.setAttribute(
      "download",
      `dome-add-to-calendar.ics`
    );

    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  } catch (error) {
    console.log(error);
    res.send(error?.message);
  }
};
