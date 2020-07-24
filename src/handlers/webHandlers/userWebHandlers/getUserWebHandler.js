const getUserHandler = async (req, res) => {
  const { UserDbConnector } = res.locals;
  const users = await UserDbConnector.find();
  const data = {
    title: 'User',
    users
  };
  res.render('contents/users/userView.html', data);
};

module.exports = getUserHandler;
