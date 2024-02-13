const express = require('express')
const sql = require('sqlite3').verbose();
const db = new sql.Database('loan.db')
// db.run("drop table user_transactions",(err)=>{
//     if(err) throw err
// })

// db.run("create table user1 (user_id varchar(30) PRIMARY KEY,firstname VARCHAR(30), lastname VARCHAR(30),username VARCHAR(30) UNIQUE,  DOB DATE,  created_by VARCHAR(30) NULL, created_date DATE,  modified_by VARCHAR(30) NULL,  modified_date DATE)",(err)=>{
//     if(err) throw err;
//     else{
//         console.log("creates")
//     }
// })

db.run("create table user_transactions (user_id integer,created_by varchar(30) , created_date DATE,modifided_by varchar(30), modified_date DATE, status varchar(30))",(err)=>{
    if(err) throw err;
    else{
        console.log("creates")
    }
})

// db.run("create table user_details (username varchar(30), address1 varchar(30), address2 varchar(30), city varchar(20), state varchar(30), country varchar(30))",(err)=>{
//     if(err) throw err;
//     else{
//         console.log("creates")
//     }
// })