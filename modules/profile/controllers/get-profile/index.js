module.exports = async (req, res) => {
  const { user } = req;
  return res.status(200).json({ data: user });
};
