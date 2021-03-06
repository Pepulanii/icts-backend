const parse = require("pg-connection-string").parse;
const config = parse(process.env.DATABASE_URL);
module.exports = ({ env }) => ({
  connection: {
    client: "postgress",
    connection: {
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});
