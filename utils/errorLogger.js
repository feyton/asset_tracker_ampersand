/**
 * This utility help us report the errors that happened properly
 * By Tracing the error and return a human friendly message we
 * have better user experience
 *
 */

import resHandler from "./resHandler.js";

// Adding something fun like random message that have same message
// It is optional
const errorMessage = [
  "Something happened on our end. We have been notified",
  "These things happen sometimes. Try again after after some time.",
  "Ooops! Our problem. We are looking into this one",
];

const errLogger = (error, req, res, next) => {
  let at = error.stack.split(/\r\n|\r|\n/)[1];
  console.error(`${error.message}- happended at \n ${at}`);
  /* c8 ignore next 5 */
  if (error instanceof SyntaxError && error.status === 400 && "body" in error) {
    return resHandler(res, 406, error.message);
  } else {
    // All other errors resulting from sytem bugs of downtime
    return resHandler(
      res,

      500,
      errorMessage[Math.floor(Math.random() * errorMessage.length)]
    );
  }
};

export default errLogger;
