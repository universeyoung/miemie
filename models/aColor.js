/**
 * Created by Administrator on 2017/3/21.
 */
var Sequelize=require('sequelize');
var db=require('./db');
var ACModel=require('../model/acolor');
var acModel=ACModel(db,Sequelize.DataTypes);
function AColor(aColor,time) {
    this.aColor=aColor;
    this.changeTime=time;
}

AColor.select=function (cb) {
    acModel.findOne({order:[['changeTime','DESC']]}).then(function (res) {
        cb(res);
    }).catch(function (err) {
        cb(err);
    })
};

AColor.insert=function (aColor,time,cb) {
    acModel.create({
        aColor:aColor,
        changeTime:time
    }).then(function (res) {
        cb(res);
    }).catch(function (err) {
        cb(err);
    })
};


module.exports=AColor;
module.exports.select=AColor.select;
module.exports.insert=AColor.insert;