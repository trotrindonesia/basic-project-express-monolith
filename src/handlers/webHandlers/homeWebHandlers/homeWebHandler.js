const homeWebHandler = (req, res) => {
  const data = {
    message: 'Coming Soon!'
  };
  res.render('web/home/index', data);
};

module.exports = homeWebHandler;
