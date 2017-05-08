/**
 * Created by Administrator on 2017/4/21.
 */
var express = require('express');
var router = express.Router();
var BSpeed=require('../models/bSpeed');
var RSpeed=require('../models/rSpeed');
var AColor=require('../models/aColor');
router.post('/b',function (req,res,next) {
    BSpeed.insert(req.body.b,Date.now(),function (re) {
    });
    res.end('');
});

router.post('/r',function (req,res,next) {
    RSpeed.insert(req.body.r,Date.now(),function (re) {
    });
    res.end('');
});

router.post('/c',function (req,res,next) {
    AColor.insert(req.body.c,Date.now(),function (re) {
    });
    res.end('');
});

router.get('/getV',function (req,res,next) {
    BSpeed.select(function (b) {
        RSpeed.select(function (r) {
            AColor.select(function (c) {
                res.json({
                    sp:b.bspeed,
                    cir:r.rSpeed,
                    alc:c.aColor
                });
            })

        });
    });
    // var a1,a2,a3;
    // BSpeed.select(function (b) {
    //     a1=b;
    //
    //
    //
    //     });
    // RSpeed.select(function (r) {
    //     a2=r;
    // });
    // AColor.select(function (c) {
    //     a3=c;
    // });
    // res.json({
    //     sp:a1,
    //     cir:0.5,
    //     alc:'#030303'
    // });
});

module.exports = router;