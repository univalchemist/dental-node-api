module.exports = (body) => {
  if (body.quantity) {
    body.quantity = parseInt(body.quantity, 10);
  }

  if(body.size) {
    body.size = parseInt(body.size, 10);
  }

  return body;
};
