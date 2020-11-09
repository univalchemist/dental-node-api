const config = include("common/config");
const ObjectId = require('mongoose').Types.ObjectId;

class GeneralHelper {
  static async sleep(s) {
    let ms = s * 1000;
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  static async asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }

  static isNotEmptyArray(array) {
    if (!GeneralHelper.isVariableExist(array)) {
      return false;
    }
    if (!(array instanceof Array)) {
      return false;
    }
    if (array.length == 0) {
      return false;
    }
    return true;
  }

  static isTrue(variable) {
    if (variable === true) {
      return true;
    }
    if (variable === "true") {
      return true;
    }
    if (variable === "TRUE") {
      return true;
    }
    if (variable === 1) {
      return true;
    }
    return false;
  }
  static isTesting() {
    console.log("cmm", config.env);
    console.log("cmm", config);
    if (config.env === "test" || config.env === "test-local") {
      return true;
    }
    return false;
  }

  static isVariableExist(variable) {
    if (typeof variable === "undefined") {
      return false;
    }
    if (variable === null) {
      return false;
    }

    if (variable === "") {
      return false;
    }
    return true;
  }

  static generateUniqueCode(size = 10) {
    let alphabet =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var id = "";
    while (size--) {
      id += alphabet[(Math.random() * alphabet.length) | 0];
    }
    return id;
  }

  static parseObjectId(objectId) {
    if (objectId && objectId._id) {
      return objectId._id + "";
    }
    return objectId + "";
  }

  static parseMongoUpdateObject(object, listKeys) {
    let returnData = {};
    listKeys.forEach(item => {
      if (typeof object[item] !== "undefined") {
        returnData[item] = object[item];
      }
    });
    return returnData;
  }

  static isEqualIds(first, second) {
    return (
      GeneralHelper.parseObjectId(first) == GeneralHelper.parseObjectId(second)
    );
  }

  static getListObjectIds(listObjects) {
    if (!listObjects) {
      return null;
    }
    return listObjects.map(object => GeneralHelper.parseObjectId(object));
  }

  static getIndexOfId(listObjects, id) {
    let listIds = GeneralHelper.getListObjectIds(listObjects);
    let objectId = GeneralHelper.parseObjectId(id);
    return listIds.indexOf(objectId);
  }

  static containsObjectId(listObjects, checkId) {
    if (!listObjects) {
      return false;
    }
    let listObjectIds = listObjects.map(object =>
      GeneralHelper.parseObjectId(object)
    );
    let checkExist = listObjectIds.find(objectId =>
      GeneralHelper.isEqualIds(objectId, checkId)
    );
    if (checkExist) {
      return true;
    }
    return false;
  }

  static isEqualEmails(first, second) {
    if (!GeneralHelper.isVariableExist(first)) {
      return false;
    }
    if (!GeneralHelper.isVariableExist(second)) {
      return false;
    }
    return (first + "").toLowerCase() === (second + "").toLowerCase();
  }

  static normalizeMongooseDoc(doc) {
    return JSON.parse(JSON.stringify(doc));
  }

  static formatStringError(error) {
    return error.split('"').join('');
  }

  static checkObjectIdValid(id){
    if(ObjectId.isValid(id)){
      if(new ObjectId(id) === id){
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    } }
}
module.exports = GeneralHelper;
