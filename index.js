const TaskProcessor = require('./src/taskProcessor');
const Task = require('./src/task');
const processor = new TaskProcessor();


processor.on('addTask', (e) => {
  e.processTask();
});

processor.addTask(new Task(123, () => {
  setTimeout(() => {
    console.log('FIRING AT TIME 1000ms');
  }, 1000)
}));

processor.addTask(new Task(456, () => {
  setTimeout(() => {
    console.log('FIRING AT TIME 500ms');
  }, 500)
}));

processor.addTask(new Task(789, () => {
  console.log('FIRING AT TIME 0ms!');
}));
