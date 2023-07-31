const express = require('express');
const bodyParser = require('body-parser');
const { db, query } = require('./src/db_conn');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/tickets', async (req, res) => {
  try {
    var { title, description, active } = req.body;

    const sql = "INSERT INTO `tickets` (title, description, active) VALUES(?,?,?)";

    const result = await query(sql, [title, description, active]);
    res.status(201).send(`Ticket created with id ${result[0]}`);

  } catch (err) {
    console.error(err);
  }
});

db.connect((err) => {
  if (err) {
    console.log("Unable to connect to DB");
    return;
  }
  console.log('Database connected successfully');
  app.listen(3000, () => {
    console.log('Server listen on port 3000');
  });
});