const getUserHandler = async (req, res) => {
  const { UserServices } = res.locals;
  const users = await UserServices.getAllUsers();
  const data = {
    title: 'User',
    users
  };
  res.render('contents/users/userView.html', data);
};

module.exports = getUserHandler;
