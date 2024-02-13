const db=require('./utils')
function insert(tableName, columns, values) {
    // Generate placeholders for the values in the query
    const placeholders = Array.from({ length: values.length }, () => '?').join(', ');
  
    // Construct the SQL query
    const query = `INSERT INTO ${tableName} (${columns.join(', ')}) VALUES (${placeholders})`;
  
    // Run the query with the provided values
    db.run(query, values,err=> {
      if (err) {
        console.log(err)
        return false
      } else {
        return true
      }
    });
  }
module.exports= {insert}