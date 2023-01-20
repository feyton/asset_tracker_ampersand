/*
This utility wrap around a view function and prevent our application from 
stopping when an error is thrown on database level
*/

const asyncHandler = (func) => (req, res, next) =>
  Promise.resolve(func(req, res, next)).catch(next);

export default asyncHandler;
