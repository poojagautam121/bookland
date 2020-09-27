// const config = {
//         "development": {
//             "port": "1300",
//             db: {
//                 "username": "root",
//                 "password": "jftdefault",
//                 "database": "database_development",
//                 "host": "127.0.0.1",
//                 "dialect": "mysql",
//                 "operatorsAliases": false,
//                 "models":"alter",
//                 logging:false
//             }

//         },
//         "test": {
//             "port": "1300",
//             db: {
//                 "username": "root",
//                 "password": null,
//                 "database": "database_test",
//                 "host": "127.0.0.1",
//                 "dialect": "mysql",
//                 "operatorsAliases": false,
//                 logging:false
//             }
//         },
//         "production": {
//             "port": "1400",
//             db: {
//                 "username": "root",
//                 "password": "jftdefault",
//                 "database": "database_production",
//                 "host": "127.0.0.1",
//                 "dialect": "mysql",
//                 "operatorsAliases": false,
//                 "models":"alter"
//             }
//         }
// };
// const NODE_ENV = process.env.NODE_ENV || 'development';
// const environment = config[NODE_ENV];
// config.port = environment.port;
// config.DB_CONFIG = environment.db;
// config.NODE_ENV = NODE_ENV;
// module.exports = config;

const config = {
  development: {
    port: "1300",
    db: {
      username: "SA",
      password: "jftdefault@123",
      database: "ecommerce",
      host: "127.0.0.1",
      dialect: "mssql",
      operatorsAliases: false,
      models: "alter",
      logging: false,
    },
  },
  test: {
    port: "1300",
    db: {
      username: "SA",
      password: null,
      database: "ecommerce",
      host: "127.0.0.1",
      dialect: "mssql",
      operatorsAliases: false,
      logging: false,
    },
  },
  production: {
    port: "1400",
    db: {
      username: "SA",
      password: "jftdefault@123",
      database: "ecommerce",
      host: "127.0.0.1",
      dialect: "mssql",
      operatorsAliases: false,
      models: "alter",
    },
  },
};
const NODE_ENV = process.env.NODE_ENV || "development";
const environment = config[NODE_ENV];
config.port = environment.port;
config.DB_CONFIG = environment.db;
config.NODE_ENV = NODE_ENV;
module.exports = config;
