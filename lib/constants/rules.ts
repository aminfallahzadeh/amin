// IMPORTS
import { EMAIL_REGEX } from "./regex";
import { REQUIRED_MESSAGE, NOT_VALID_EMAIL_MESSAGE } from "./messages";

export const requiredRule = { required: REQUIRED_MESSAGE };

export const emailRule = {
  pattern: {
    value: EMAIL_REGEX,
    message: NOT_VALID_EMAIL_MESSAGE,
  },
};
