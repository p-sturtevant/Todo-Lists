const express = require("express");
const path = require("path");
const { saveTask, Task } = require('../db/index.js')
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

app.use(express.json());

//REQUEST HANDLERS
app.post('/tasks', (req, res) => {
  //console.log(req.body);
  saveTask(req.body);
  res.send();
})

app.get('/tasks', (req, res) => {
  Task.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    })
})
//
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});