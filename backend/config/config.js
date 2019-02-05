const dbUser = "mernstackappuser";
const dbPassword = "mongo3.0.7";

module.exports = {
  PORT: process.env.PORT || 3100,
  host: `http://localhost:${this.PORT}`,
  dbURI: `mongodb://${dbUser}:${dbPassword}@ds119085.mlab.com:19085/mernstackappdb`,
  secretKey: "mernstack-app"
};
