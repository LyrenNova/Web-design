var express = require('express');
var router = express.Router();

//增加引用函式
const student = require('./utility/student');

//接收POST請求
router.post('/', function(req, res, next) {
    var stuno = req.body.stuno;                  //取得產品編號
    var name = req.body.name;              //取得產品名稱
    var division = req.body.division;
    var department = req.body.department;
    var birthday = req.body.birthday;
    var intern = Number(req.body.intern);          

    // 建立一個新資料物件
    var newData={
        stuno:stuno,
        name:name,
        division:division,
        department:department,
        birthday:birthday,
        intern:intern
    } 
    
    student.add(newData).then(d => {
        if (d==0){
            res.render('addSuccess');  //傳至成功頁面
        }else{
            res.render('addFail');     //導向錯誤頁面
        }  
    })
});

module.exports = router;