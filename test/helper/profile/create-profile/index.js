const Profile = include("domain/models/profile");
const generateRandomEmail = include("test/helper/common/generate-random-email");

module.exports = async () => {
  let email = await generateRandomEmail();
  let username = "t" + new Date().getTime();
  let profile = await Profile.create({
    firstName: "First",
    lastName: "Last",
    email: email.toLowerCase(),
    username,
    usernameSort: username.toLowerCase(),
    password: "samplepassword",
    signedVia: "email",
    identifier: username,
  });
  return profile;
};

// const createProfile = include("test/helper/profile/create-profile");
