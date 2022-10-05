const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tasks");

let taskSchema = mongoose.Schema({
  task: String,
});

let Task = mongoose.model("Task", taskSchema);

let saveTask = (taskObj) => {
  // TODO: Your code here
  console.log(taskObj);
  let task = new Task({
    task: taskObj.value
  });
  task.save((err) => {
    if (err) {
      console.log(err);
    }
  });
};

module.exports.saveTask = saveTask;
module.exports.Task = Task;