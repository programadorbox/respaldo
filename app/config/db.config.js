module.exports = {
    DB: 'dbb2',
    USER: 'postgres',
    PASSWORD: '1234',
    HOST: 'localhost',
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };