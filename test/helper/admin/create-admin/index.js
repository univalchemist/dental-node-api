const generateRandomEmail = include("test/helper/common/generate-random-email");
const AdminModel = include('domain/models/admin');

module.exports = async () => {
  let email = await generateRandomEmail();
  let profile = await AdminModel.create({
    firstName: "First",
    lastName: "Last",
    email: email.toLowerCase(),
    password: "samplepassword"
  });
  return profile;
};
