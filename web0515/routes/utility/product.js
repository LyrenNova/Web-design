'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');

//------------------------------------------
// 取出型態資料
//------------------------------------------
var getDropdownData = async function(){
    //儲存下拉式選單資料
    var protype, supplier;
    
    //取回protype資料
    await sql('SELECT * FROM protype ORDER BY typno')
        .then((data) => {
            protype = data.rows;  
        }, (error) => {
            result = [];
        });
    //取回protype資料
    await sql('SELECT * FROM supplier ORDER BY supno')
        .then((data) => {
            supplier = data.rows;  
        }, (error) => {
            result = [];
        });
    //設定回傳資料    
    var result = {};
    result.protype = protype;
    result.supplier=supplier;
    //回傳
    return result;
}

//------------------------------------------
// 新增商品
//------------------------------------------
var add = async function(newData){
    var result;

    await sql('INSERT INTO product (prono, proname, supno, typno, price) VALUES ($1, $2, $3, $4, $5)', [newData.prono, newData.proname, newData.supno, newData.typno, newData.price])
        .then((data) => {
            result = 0;  
        }, (error) => {
            result = -1;
        });
		
    return result;
}

//匯出
module.exports = {getDropdownData, add};