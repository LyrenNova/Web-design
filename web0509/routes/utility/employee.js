'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');

//------------------------------------------
//執行資料庫動作的函式-取出單一商品
//------------------------------------------
var query = async function(empno){
    var result={};
    
    await sql('SELECT * FROM employee WHERE empno = $1', [empno])
        .then((data) => {
            if(data.rows.length > 0){
                result = data.rows[0];   
            }else{
                result = -1;
            }    
        }, (error) => {
            result = null;
        });
		
    return result;
}
var remove = async function(empno){
    var result;

    await sql('DELETE FROM employee WHERE empno = $1', [empno])
        .then((data) => {
            result = data.rowCount;  
        }, (error) => {
            result = -1;
        });
        
    return result;
}
//匯出
module.exports = {query};
module.exports = {remove};