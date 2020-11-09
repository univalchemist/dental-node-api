const errorsCodes = include("modules/error/codes");
const errorsMessages = include("modules/error/messages");

module.exports = async (req, res, service) => {
  const { body, user } = req;
  return res.status(200).json({ data: user });
};
