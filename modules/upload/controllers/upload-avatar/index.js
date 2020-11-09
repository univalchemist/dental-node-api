const errorsCodes = include("modules/error/codes");
const errorsMessages = include("modules/error/messages");
const config = include("common/config");

module.exports = async (req, res, service) => {
  const uploader = await service.uploader(config.aws.avatarBucket);
  const uploadAvatar = uploader.single("avatar");
  uploadAvatar(req, res, async err => {
    if (err || !req.file) {
      log.error("No file receive", err);
      const { error, code } = errorsCodes.UNPROCESSABLE_ENTITY;

      return res.status(code).json({
        error,
        message: "File missing"
      });
    } else {
      const { file } = req;
      return res.status(200).json({
        data: {
          avatar: file.location
        }
      });
    }
  });
};
