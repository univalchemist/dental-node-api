const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const config = include("common/config");

const awsConfig = {
  credentials: {
    accessKeyId: config.aws.key,
    secretAccessKey: config.aws.secret
  },
  region: config.aws.region
};

aws.config.update(awsConfig);

const s3 = new aws.S3();
const uploader = (bucket = config.aws.defaultBucket) =>
  multer({
    storage: multerS3({
      s3,
      acl: "public-read",
      bucket: bucket,
      key: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
      }
    })
  });

module.exports = uploader;

// const uploader = require("./uploader");
