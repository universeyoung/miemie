/**
 * Created by Administrator on 2017/3/21.
 */
var Sequelize=require('sequelize');
var db=require('./db');
var BSModel=require('../model/bspeed');
var bsModel=BSModel(db,Sequelize.DataTypes);
function BSpeed(bSpeed,time) {
    this.bspeed=bSpeed;
    this.changeTime=time;
}

BSpeed.select=function (cb) {
    bsModel.findOne({order:[['changeTime','DESC']]}).then(function (res) {
        cb(res);
    }).catch(function (err) {
        cb(err);
    })
};

BSpeed.insert=function (bSpeed,time,cb) {
    bsModel.create({
        bspeed:bSpeed,
        changeTime:time
    }).then(function (res) {
        cb(res);
    }).catch(function (err) {
        cb(err);
    })
};

module.exports=BSpeed;
module.exports.select=BSpeed.select;
module.exports.insert=BSpeed.insert;