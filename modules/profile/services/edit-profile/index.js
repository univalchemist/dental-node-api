const q = require("q");
const errorsCodes = include("modules/error/codes");
const errorsMessages = include("modules/error/messages");
const getProfileByEmail = require("../get-profile-by-email");

module.exports = async (params, validator, repository, cacheService) => {
  const defer = q.defer();
  const { body } = params;
  try {
    const validResult = await validator.validateEditProfileData(body);
    if (validResult.error) {
      defer.resolve({
        error: "VALIDATION_ERROR",
        message: validResult.error,
        code: 400
      });
      return defer.promise;
    }
    const { email, firstName, lastName } = validResult.value;

    if(!email && !firstName && !lastName) {
      defer.resolve({ message: "Update profile success" });
      return defer.promise;
    }

    // Check Exist Email
    if(email) {
      let profile = await getProfileByEmail(
        email,
        false,
        validator,
        repository,
        cacheService
      );

      console.log(profile);

      if (profile) {
        const { error, code } = errorsCodes.BAD_REQUEST;
        defer.resolve({
          error,
          message: "Email has been used",
          code
        });
        return defer.promise;
      }
    }

    let isUpdate = repository.editProfile(params);
    if(isUpdate) {
      defer.resolve({ success: true });
    } else {
      defer.resolve({ success: false });
    }
  } catch (err) {
    log.error("[SERVICE][EXECEPTION][Edit Profile] error", err);
    const { error, code } = errorsCodes.SERVER_ERROR;
    defer.resolve({
      error,
      message: errorsMessages.SERVER_ERROR,
      code
    });
    return defer.promise;
  }
  return defer.promise;
};

// const editProfile = require("./edit-profile");
