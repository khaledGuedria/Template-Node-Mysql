const express = require('express')
const mysql = require('mysql')
var uuidv4 = require('uuid/v4')



const router = express.Router()

const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    database: "myNode"
})

function getConnection(){
    return pool
}



//--------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------

    //TO DO
//GET
//print msg
router.get("/printMSG", (req, res) => {
    console.log("Hello World WS");
})


//--------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------





    
module.exports = router;