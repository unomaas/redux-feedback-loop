//#region ⬇⬇ All document setup below:
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
//#endregion ⬆⬆ All document setup above. 


//#region ⬇⬇ All CRUD routes below:
/** ⬇ GET /feedback:
 * Router function to handle the GET part of the server-side logic.  Will send SQL query to pull all of the entries from the DB to update on the DOM.
 */
router.get('/', (req, res) => {
  console.log('In GET /feedback');
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
}) // End GET /feedback

/** ⬇ POST /feedback:
 * Router function to handle the POST part of the server-side logic.  Will send SQL query to add new entries to the DB.
 */
 router.post('/', (req, res) => {
  console.log('In POST /feedback');
  // ⬇ Saving the req.body as a variable:
  let newFeedback = req.body;
  console.log(`Feedback to add is:`, newFeedback);
  // ⬇ Declaring the SQL commands:
  const sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);`;
  // ⬇ Sanitizing values, which need to be sent as an array:
  const values = [newFeedback.feeling, newFeedback.understanding, newFeedback.supported, newFeedback.comment]
  // ⬇ Sending query to DB:
  pool.query(sqlText, values)
    .then(result => {
      console.log('In /feedback POST, response:', res);
      res.sendStatus(201); // Created. 
    }) // End .then
    .catch(error => {
      console.log(`In /feedback POST, error:`, error);
      res.sendStatus(500);
    }); // End .catch
}); // End POST /feedback 
//#endregion ⬆⬆ All CRUD routes above. 


module.exports = router;