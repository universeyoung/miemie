/**
 * Created by Administrator on 2017/3/21.
 */
var Sequelize=require('sequelize');
module.exports=new Sequelize('threejs','root','123456',{
    host:'127.0.0.1',
    dialect:'mysql',
    port:3306
});