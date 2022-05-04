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
const genderValidator = () => {
  return [body("gender").exists().isString().isIn(["male", "female"])];
};
/**************************************** */
const phoneValidator = () => {
  return [body("phone").exists().isNumeric()];
};
/**************************************** */
const profilePictureValidator = () => {
  return [body("profilePicture").exists().isString()];
};
/**************************************** */
const cnicValidator = () => {
  return [body("cnic").exists().isNumeric()];
};
/**************************************** */
const lisenseValidator = () => {
  return [body("license").exists().isNumeric()];
};
/**************************************** */
const experienceValidator = () => {
  return [body("experience").exists().isNumeric({ min: 0, max: 50 })];
};
/**************************************** */
module.exports = {
  credentialsValidator,
  emailValidator,
  body,
  validationResult,
  nameValidator,
  genderValidator,
  phoneValidator,
  profilePictureValidator,
  cnicValidator,
  licenseValidator,
  experienceValidator,
};
/**************************************** */
