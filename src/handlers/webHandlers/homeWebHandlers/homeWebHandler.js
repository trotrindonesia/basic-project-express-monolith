const homeWebHandler = (req, res) => {
  const data = {
    message: 'Coming Soon!'
  };
  res.render('contents/home/index.html', data);
};

module.exports = homeWebHandler;
