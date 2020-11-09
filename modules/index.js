const isAuthenticated = include("middlewares/is-authenticated");

const AuthModule = include("modules/auth/");
const CMSModule = include("modules/cms/");
const CategoryModule = include("modules/category/");
const ProfileModule = include("modules/profile");
const UploadModule = include("modules/upload/");
const ProductModule = include("modules/product");
const BrandModule = include("modules/brand");
const SubCategoryModule = include("modules/sub-category");
const RicModule = include("modules/ric");
const PaoModule = include("modules/pao");
const ViewModule = include("modules/views/");
const GroupModule = include("modules/group/");

module.exports = app => {
  app.use("/api/category", CategoryModule.router);
  app.use(
    "/api/profile",
    isAuthenticated,
    ProfileModule.sanitizer,
    ProfileModule.router
  );
  app.use("/api/auth", AuthModule.sanitizer, AuthModule.router);
  app.use("/api/upload", UploadModule.sanitizer, UploadModule.router);
  app.use("/api/product", ProductModule.router);
  app.use(
    "/api/brand/",
    isAuthenticated,
    BrandModule.sanitizer,
    BrandModule.router
  );
  app.use(
    "/api/sub-category/",
    isAuthenticated,
    SubCategoryModule.sanitizer,
    SubCategoryModule.router
  );
  app.use("/api/ric/", isAuthenticated, RicModule.sanitizer, RicModule.router);
  app.use("/api/pao/", isAuthenticated, PaoModule.sanitizer, PaoModule.router);
  app.use("/views", ViewModule.router);
  app.use("/api/group", isAuthenticated, GroupModule.sanitizer, GroupModule.router);

  CMSModule(app);
};
