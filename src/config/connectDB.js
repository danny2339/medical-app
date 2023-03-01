const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("project_test", "root", null, {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connect has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database: ", error);
  }
};

module.exports = connectDB;
