const getUserHandler = async (req, res) => {
  const { UserDbConnector } = res.locals;
  const users = await UserDbConnector.find();
  const response = {
    data: users
  };
  res.send(response);
};

module.exports = getUserHandler;
