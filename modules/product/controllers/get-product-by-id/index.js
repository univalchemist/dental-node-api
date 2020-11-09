const errorsCodes = include("modules/error/codes");
const errorsMessages = include("modules/error/messages");

module.exports = async (req, res, service) => {
  const { body, user } = req;
  try {
    let data = await service.getProductById({body, user});
    if (data.error) {
      return res.status(data.code || errorsCodes.BAD_REQUEST).json({
        message: data.message,
        error: data.error
      });
    } else {
      return res.status(200).json({data});
    }
  } catch (err) {
    log.error("[CONTROLLER][EXECEPTION][Get Product By Id] error", err);
    const { code, error } = errorsCodes.SERVER_ERROR;

    return res.status(code).json({
      error,
      message: errorsMessages.SERVER_ERROR
    });
  }
};



// static async getProductById(req, res) {
//   controllers.getProductById(req, res, service);
// }
//
// router.post(
//   "/get-product-by-id",
//   controller.getProductById
// );
