var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var arr1=[];
    var arr2=[];
    for(var i=0;i<50;i++){
      arr1[i]=i;
    }
    for(var i=48;i>0;i--){
        arr2[i]=49-i;
    }
    var arr=arr1.concat(arr2);
    var a=req.query.vall;
    var speed=arr[a%49];
    console.log(speed);
    res.json({sp:speed});

});

router.get('/time', function(req, res, next) {
    var date=Date.now();
    var speed=date%10000/10000 - 0.5;
    console.log(speed);
    res.json({sp:speed});

});
router.get('/test', function(req, res, next) {
    var date=Date.now();
    var speed=date%10000/10000;
    console.log(speed);
    res.json({sp:speed,cir:date%10000/1000});

});

module.exports = router;
