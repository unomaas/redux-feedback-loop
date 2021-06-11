//#region ⬇⬇ All document setup below:
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
//#endregion ⬆⬆ All document setup above. 


//#region ⬇⬇ All CRUD routes below:
/** ⬇ /feedback GET:
 * Router function to handle the GET part of the server-side logic.  Will send SQL query to pull all of the tasks from the DB to update on the DOM.
 */
router.get('/', (req, res) => {
  console.log('GET /feedback');
  // ⬇ Declaring SQL commands to send to DB: 
  const sqlText = `SELECT * from "feedback";`;
  // ⬇ Sending query to DB:
  pool.query(sqlText)
    .then((result) => {
      console.log('In /feedback GET, result:', result.rows);
      // ⬇ Sends back the results in an object, we always want rows:
      res.send(result.rows);
    }) // End .then
    .catch((error) => {
      console.log('In /feedback GET, error:', error);
      res.sendStatus(500); // Server error. 
    }); // End .catch
})


module.exports = router;