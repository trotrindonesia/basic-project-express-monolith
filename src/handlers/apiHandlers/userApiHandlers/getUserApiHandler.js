const getUserHandler = async (req, res) => {
  const { UserServices } = res.locals;
  const users = await UserServices.getAllUsers();
  const response = {
    data: users
  };
  res.send(response);
};

module.exports = getUserHandler;
