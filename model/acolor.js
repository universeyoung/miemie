/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acolor', {
    aColor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    changeTime: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'acolor'
  });
};
