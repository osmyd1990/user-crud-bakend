// export const PORT = process.env.PORT || 3000

// export const DB_HOST = process.env.DB_HOST || 'localhost'
// export const DB_USER = process.env.DB_USER || 'postgres'
// export const DB_PASSWORD = process.env.DB_PASSWORD || 'root'
// export const DB_NAME = process.env.DB_NAME || 'postgres'
// export const DB_PORT = process.env.DB_PORT || '5432'




// //! const dotenv = require('dotenv')
// //! dotenv.config()

require('dotenv').config()

const config = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || "development", //? dev, prod, test
  db: {
    development: {
      dialect: "postgres",
      host: "localhost",
      port: 5432,
      database: "crud",
      username: "postgres",
      password: "root",
      //Extra configs
      define: {
        timestamps: true,
        underscored: true,
      },
    },
    prod: {
      dialect: "postgres",
      host: process.env.DB_PROD_HOST,
      port: process.env.DB_PROD_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_PROD_USER,
      password: process.env.DB_PROD_PASS,
      //Extra configs
      define: {
        timestamps: true,
        underscored: true,
      },
      //Esta configuracion es para produccion
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    },
    test: {
      dialect: "postgres",
      host: "localhost",
      port: 5432,
      database: "users",
      username: "postgres",
      password: "root",
      //Extra configs
      define: {
        timestamps: true,
        underscored: true,
      },
    },
  },
};

module.exports = config