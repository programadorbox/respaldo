// models/bootcamp.model.js
module.exports = (sequelize, DataTypes) => {
    const Bootcamp = sequelize.define('Bootcamp', {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      cue: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    });
    return Bootcamp;
  };
  