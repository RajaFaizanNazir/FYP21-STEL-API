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
  return [body("phone").exists()];
};
/**************************************** */
const profilePictureValidator = () => {
  return [body("profilePicture").exists().isString()];
};
/**************************************** */
const cnicValidator = () => {
  return [body("cnic").exists()];
};
/**************************************** */
const licenseValidator = () => {
  return [body("license").exists()];
};
/**************************************** */
const experienceValidator = () => {
  return [body("experience").exists().isNumeric({ min: 0, max: 50 })];
};
/**************************************** */
const busNumberValidator = () => {
  return [body("busnumber").exists()];
};
/**************************************** */
const busChaseNumberValidator = () => {
  return [body("chasenumber".exists)];
};
/**************************************** */
const busCapacityValidator = () => {
  return [body("capacity").exists().isNumeric({ min: 0 })];
};
/**************************************** */
const busMillageValidator = () => {
  return [body("millage").exists().isNumeric({ min: 0 })];
};
/**************************************** */
const busAcValidator = () => {
  return [body("ac").exists().isString().isIn(["ac", "non-ac"])];
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
  licenseValidator,
  busNumberValidator,
  busChaseNumberValidator,
  busCapacityValidator,
  busMillageValidator,
  busAcValidator,
};
/**************************************** */
