const homeHander = (req, res) => {
  const data = {
    message: 'Coming Soon!'
  };
  res.send(data);
};

module.exports = homeHander;
