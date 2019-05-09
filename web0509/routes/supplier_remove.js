var express = require('express');
var router = express.Router();

//增加引用函式
const supplier = require('./utility/supplier');

//接收POST請求
router.post('/', function(req, res, next) {
    var supno = req.body.supno;   //取得產品編號
   
    supplier.remove(supno).then(d => {
        if(d>=0){
            res.render('removeSuccess', {results:d});  //傳至成功頁面     
        }else{
            res.render('removeFail');     //導向錯誤頁面
        }
    })    
});

module.exports = router;