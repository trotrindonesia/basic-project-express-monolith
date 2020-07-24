const getUserHandler = async (req, res) => {
  const { UserDbConnector } = res.locals;
  const users = await UserDbConnector.find();
  const data = {
    users
  };
  res.render('web/users/index', data);
};

module.exports = getUserHandler;
