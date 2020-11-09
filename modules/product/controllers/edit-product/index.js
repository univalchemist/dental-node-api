const errorsCodes = include("modules/error/codes");
const errorsMessages = include("modules/error/messages");
const uploadService = include("modules/upload/service");
const config = include("common/config");

module.exports = async (req, res, service) => {
  const uploader = await uploadService.uploader(config.aws.productBucket);
  uploader.single("image")(req, res, async err => {
    if(err) {
      log.error("Error Edit Product", err);
      const { error, code } = errorsCodes.UNPROCESSABLE_ENTITY;
      return res.status(code).json({
        error,
        message: err.message,
      });
    } else {
      const { body, user, file, params } = req;
      if(file) {
        body.image = file.location;
      }

      try {
        let data = await service.editProduct({params, body, user});
        if (data.err) {
          return res.status(data.code || errorsCodes.BAD_REQUEST).json({
            message: data.message,
            error: data.error,
          });
        } else {
          return res.status(200).json({data});
        }
      } catch (err) {
        log.error("[CONTROLLER][EXECEPTION][Edit Product] error", err);
        const { code, error } = errorsCodes.SERVER_ERROR;

        return res.status(code).json({
          error,
          message: errorsMessages.SERVER_ERROR
        });
      }
    }
  });
};

