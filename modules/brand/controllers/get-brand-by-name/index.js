const errorsCodes = include("modules/error/codes");
const errorsMessages = include("modules/error/messages");

module.exports = async (req, res, service) => {
  const { body, user } = req;
  try {
    let data = await service.getBrandByName({body, user});
    return res.status(200).json({data});
  } catch (err) {
    log.error("[CONTROLLER][EXECEPTION][Get Brand By Name] error", err);
    const { code, error } = errorsCodes.SERVER_ERROR;

    return res.status(code).json({
      error,
      message: errorsMessages.SERVER_ERROR
    });
  }
};






