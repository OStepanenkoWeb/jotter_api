// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

export default {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV,
  mongoUrl: process.env.MONGO_URL,
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET || 'accesstokensecret',
  refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET || 'refereshtokensecret',
  bcryptSalt: 10,
};
