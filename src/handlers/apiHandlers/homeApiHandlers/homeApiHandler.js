const homeApiHandler = (req, res) => {
  const data = {
    message: 'Coming Soon!'
  };
  res.send(data);
};

module.exports = homeApiHandler;
