const createConnectionString = (config) => {
  const {
    instances,
    options,
    database,
    username,
    password
  } = config;
  const encodedPassword = encodeURIComponent(password);

  let connectionString = `mongodb://${instances}/${database}`;
  if (username && password) {
    //  Create the creds, return a connection string with the options if provided.
    const creds = `${username}:${encodedPassword}`;
    connectionString = `mongodb://${creds}@${instances}/${database}`;
  }
  return options ? `${connectionString}?${options}` : connectionString;
};

module.exports = createConnectionString;
