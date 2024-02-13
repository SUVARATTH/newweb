const { REPL_MODE_SLOPPY } = require('repl');
const db = require('../utills/utils')
const crypto = require('crypto');

function generateUserId(userName, userDOB) {
  const concatenatedString = `${userName}${userDOB}`;
  const hash = crypto.createHash('sha256').update(concatenatedString).digest('hex');
  const userId = hash.substring(0, 6).toUpperCase();
  return userId;
}
function check(name,dob){
    db.get("select * from user1 where username=? ",[generateUserId(name,dob)],(err,row)=>{
        if(err) throw err;
        if(row){
            return true
        }
        else{
            return false
        }

    })
}
module.exports={check,generateUserId}