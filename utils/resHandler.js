const resHandler = (res, code, messageData) => {
  const message = code < 400 ? "success" : "fail";
  const response = { status: message, code };
  if (typeof messageData === "string") {
    response.data = {
      message: messageData,
    };
  } else {
    response.data = messageData;
  }
  return res.status(code).json(response);
};

export default resHandler;
