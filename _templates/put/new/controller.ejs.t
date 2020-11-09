---
to: modules/<%= h.changeCase.paramCase(module) %>/controllers/<%= h.changeCase.paramCase(name) %>/index.js
---

const errorsCodes = include("modules/error/codes");
const errorsMessages = include("modules/error/messages");

module.exports = async (req, res, service) => {
  const { body, user } = req;
  try {
    let data = await service.<%= h.changeCase.camel(name) %>({body, user});
    if (data.error) {
      return res.status(data.code || errorsCodes.BAD_REQUEST).json({
        message: data.message,
        error: data.error
      });
    } else {
      return res.status(200).json({data});
    }
  } catch (err) {
    log.error("[CONTROLLER][EXCEPTION][<%= h.changeCase.title(name) %>] error", err);
    const { code, error } = errorsCodes.SERVER_ERROR;

    return res.status(code).json({
      error,
      message: errorsMessages.SERVER_ERROR
    });
  }
};



static async <%= h.changeCase.camel(name) %>(req, res) {
  controllers.<%= h.changeCase.camel(name) %>(req, res, service);
}

router.put(
  "/<%= h.changeCase.paramCase(name) %>",
  controller.<%= h.changeCase.camel(name) %>
);
