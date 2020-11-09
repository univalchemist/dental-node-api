"use strict";

module.exports = class {
  constructor(data, needPassword) {
    this._id = data._id;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.email = data.email;
    this.username = data.username;
    this.avatar = data.avatar;
    this.signedVia = data.signedVia;
    this.status = data.status;
    this.typeAccount = data.typeAccount;
    if (needPassword) {
      this.password = data.password;
    }
  }
};
