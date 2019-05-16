var express = require('express');
var router = express.Router();

//增加引用函式
var moment = require('moment');
const customer = require('./utility/customer');

//接收GET請求
router.get('/', function(req, res, next) {
    var no = req.query.cusno;

    customer.query(no).then(d => {      
        if (d!=null){          
            var data = {
                cusno: d.cusno,
                cusname: d.cusname,
                address: d.address,
                tel: d.tel
            }

            res.render('customer_update_form', {item:data});  //將資料傳給更新頁面
        }else{
            res.render('notFound');  //導向找不到頁面
        }  
    })
});

module.exports = router;