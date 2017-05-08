/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bspeed', {
    bspeed: {
      type: "DOUBLE",
      allowNull: true
    },
    changeTime: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'bspeed'
  });
};
