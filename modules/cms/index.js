const AuthModule = include("modules/cms/auth/");
const ProfileModule = include("modules/cms/profile/");
const UserModule = include("modules/cms/user/");
const isAuthenticatedAdmin = include("middlewares/is-authenticated-admin");

module.exports = app => {
  app.use("/api/cms/auth/", AuthModule.sanitizer, AuthModule.router);
  app.use(
    "/api/cms/profile/",
    isAuthenticatedAdmin,
    ProfileModule.sanitizer,
    ProfileModule.router
  );
  app.use(
    "/api/cms/user/",
    isAuthenticatedAdmin,
    UserModule.sanitizer,
    UserModule.router
  );
};
