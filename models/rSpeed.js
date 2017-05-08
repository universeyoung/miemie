/**
 * Created by Administrator on 2017/3/21.
 */
var Sequelize=require('sequelize');
var db=require('./db');
var RSModel=require('../model/rspeed');
var rsModel=RSModel(db,Sequelize.DataTypes);
function RSpeed(rSpeed,time) {
    this.rSpeed=rSpeed;
    this.changeTime=time;
}

RSpeed.select=function (cb) {
    rsModel.findOne({order:[['changeTime','DESC']]}).then(function (res) {
        cb(res);
    }).catch(function (err) {
        cb(err);
    })
};

RSpeed.insert=function (rSpeed,time,cb) {
    rsModel.create({
        rSpeed:rSpeed,
        changeTime:time
    }).then(function (res) {
        cb(res);
    }).catch(function (err) {
        cb(err);
    })
};


module.exports=RSpeed;
module.exports.select=RSpeed.select;
module.exports.insert=RSpeed.insert;