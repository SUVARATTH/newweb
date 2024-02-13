const bodyParser = require('body-parser')
const express = require('express')
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
const db = require('../utills/utils');
const currentDate = new Date();
const formattedDate = currentDate.toISOString().slice(0, 10);
const { check,generateUserId} = require('./usercheck');
const {insert}=require('../utills/functions')
const index=(req,res)=>{

    res.render('index')
}
const user=(req,res)=>{
    const{firstName, lastName,username,dob}=req.body
    // console.log(firstName,lastName,username)

    if(check(username.toLowerCase(),dob)){
        console.log('User exists')
    }
    else{
        const userid=generateUserId(username.toLowerCase(),dob)
        // db.run("INSERT INTO user1(user_id,firstname,lastname,username,DOB,created_date,modified_date) VALUES (?, ?, ?, ?, ?, ?, ?)", [userid, firstName, lastName, username, dob, formattedDate, formattedDate], (err) => {
        //     if (err) throw err;
        //     console.log("User inserted");
        //   });
        values=[userid, firstName, lastName, username, dob, formattedDate, formattedDate]
        insertintousers(values)
        values2=[userid,address1,address2,city,state,country]
        insertintodetails(values2,userid)
        values3=[userid,formattedDate,formattedDate]
        insertintotransactions(values3)
          
        }

 }
 const details=(req,res)=>{
    const {dob,username,address1,address2,city,state,country}=req.body
    const userid=generateUserId(username.toLowerCase(),dob)
    values=[userid,address1,address2,city,state,country]
    insertintodetails(values)
 }
 function insertintousers(values){
    db.run("INSERT INTO user1(user_id,firstname,lastname,username,DOB,created_date,modified_date) VALUES (?, ?, ?, ?, ?, ?, ?)", values, (err)=>{
        if(!err){
            console.log("inerted")}        
    })

 }
 function insertintodetails(values){
    db.get("select * from user_details where username=?",values[0],(err,row)=>{
        if(err){
            throw err
        }
        if(!row){
            db.run("insert into user_details (username,address1,address2,city,state,country) values(?,?,?,?,?,?)",values,err=>{
                if(err) throw err
                else{
                    console.log("inserted")
                }
            })
        }
        else{
            temp=values.shift()
            values.push(temp)
            db.run("update user_details set address1=?,address2=?,city=?,state=?,country=? where username=?",values,err=>{
                if(err) throw err
                else{
                    console.log("user updated")
                }
            })
        }
    })
 }
 function insertintotransactions(values){
    db.run("insert into user_transactions(user_id,created_date,modified_date) values(?,?,?)",values,(err)=>{
        if(!err){
            console.log("inserted")
        }
        else{console.log(err)}
    }) }
  
module.exports={user,index,details}