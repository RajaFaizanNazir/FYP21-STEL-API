const { body, validationResult } = require("express-validator");
/**************************************** */
const credentialsValidator = () => {
  return [
    body("email").exists().isEmail(),
    body("password").exists().isLength({ min: 5 }),
  ];
};
/**************************************** */
const emailValidator = () => {
  return [body("email").exists().isEmail()];
};
/**************************************** */
const nameValidator = () => {
  return [body("name").exists().isString()];
};
/**************************************** */
module.exports = {
  credentialsValidator,
  emailValidator,
  body,
  validationResult,
  nameValidator,
};
/**************************************** */
