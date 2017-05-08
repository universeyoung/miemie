var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/sd', function(req, res, next) {
   // for(var i=0;i<100000;i++){
     //   setTimeout(function () {
            var speed=Math.random()*100;
            console.log(speed);
            res.json({sp:speed});
       // }(),i*1000)

//    }
});
router.get('/sd', function(req, res, next) {
    // for(var i=0;i<100000;i++){
    //   setTimeout(function () {
    var speed=Math.random()*100;
    console.log(speed);
    res.json({sp:speed});
    // }(),i*1000)

//    }
});
// router.get('/s',function (req,res,next) {
//     // var speed=Math.ceil(Math.random()*10 );
//     var speed=200*Math.random()-100;
//     console.log('当前速度为：'+Math.round(speed));
//     res.render('s',{sp:speed});
//
// });
module.exports = router;
