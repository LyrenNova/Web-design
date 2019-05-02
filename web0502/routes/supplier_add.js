var express = require('express');
var router = express.Router();

//增加引用函式
const supplier = require('./utility/supplier');

//接收POST請求
router.post('/', function(req, res, next) {
    var supno = req.body.supno;         
    var supname = req.body.supname;
    var contactor = req.body.contactor;
    var address = req.body.address;        
    var tel = req.body.tel;  

    // 建立一個新資料物件
    var newData={
        supno:supno,
        supname:supname,
        contactor:contactor,
        address:address,
        tel:tel
    } 
    
    supplier.add(newData).then(d => {
        if (d==0){
            res.render('addSuccess');  //傳至成功頁面
        }else{
            res.render('addFail');     //導向錯誤頁面
        }  
    })
});

module.exports = router;