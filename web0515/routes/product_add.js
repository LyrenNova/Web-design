var express = require('express');
var router = express.Router();

//增加引用函式
const product = require('./utility/product');

//接收POST請求
router.post('/', function(req, res, next) {
    var prono = req.body.prono;           //取得產品編號
    var proname = req.body.proname;       //取得產品名稱
    var supno = req.body.supno;
    var typno = req.body.typno;           //取得型態編號    
    var price = Number(req.body.price);   //取得價格

    // 建立一個新資料物件
    var newData={
        prono:prono,
        proname:proname,
        supno:supno,
        typno:typno,
        price:price
    } 
    
    product.add(newData).then(d => {
        if (d==0){
            res.render('addSuccess');  //傳至成功頁面
        }else{
            res.render('addFail');     //導向錯誤頁面
        }  
    })
});

module.exports = router;