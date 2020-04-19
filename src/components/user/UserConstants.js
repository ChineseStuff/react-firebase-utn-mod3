export const ERROR_SIGNUP_EMPTY_NAME = "Name cannot be empty";
export const ERROR_SIGNUP_EMPTY_LASTNAME = "Lastname cannot be empty";
export const ERROR_SIGNUP_EMPTY_EMAIL =
  "Email will be your user credential, it cannot be empty";
export const ERROR_SIGNUP_EMPTY_PASSWORD = "You must enter a password";
export const ERROR_SIGNUP_EMPTY_REPASSWORD = "You must confirm your password";

export const ERROR_SIGNUP_ALPHABET_NOTMATCH =
  "Please enter alphabet characters only.";
export const ERROR_SIGNUP_PHONE_NOTMATCH =
  "Please enter valid phone. 10 digits";
export const ERROR_EMAIL_PATTERN_NOTMATCH = "Please enter a valid email.";
export const ERROR_SIGNUP_PASSWORD_NOTMATCH =
  "The password confirmation does not match with original one";
export const ERROR_SIGNUP_PASSWORD_NOTSTRONG =
  "Please enter secure and strong password";

export const ALPHABET_PATTERN = /^[a-zA-Z ]*$/;
export const PHONE_PATTERN = /^[0-9]{10}$/;
export const EMAIL_PATTERN = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
export const PASSWORD_PATTERN = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})";

export const ERROR_LOGIN_EMPTY_EMAIL = "Please, provide your email";
export const ERROR_LOGIN_EMPTY_PASSWORD = "Please, provide your password";
export const ALERT_USER_LOGGED =
  "You are already registered and logged in our App";
export const ALERT_CONTENT_NOT_ALLOWED =
  "This content is only allowed for registered users, If you don't have account yet, please sign up";
