var express = require('express');
var router = express.Router();

//增加引用函式
const customer = require('./utility/customer');

//接收POST請求
router.post('/', function(req, res, next) {
    var cusno = req.body.cusno;   //取得產品編號

    var newData={
        cusno:cusno,                   //產品編號
        cusname: req.body.cusname,     //取得產品名稱
        address: req.body.address, //取得價格
        tel: req.body.tel  //取得盤點日期
    } 
    
    customer.update(newData).then(d => {
        if (d>=0){
            res.render('updateSuccess', {results:d});  //傳至成功頁面
        }else{
            res.render('updateFail');     //導向錯誤頁面
        }  
    })
});

module.exports = router;