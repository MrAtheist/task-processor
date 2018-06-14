const TaskScheduler = require('./src/taskScheduler');
const Task = require('./src/task');
const scheduler = new TaskScheduler();


scheduler.on('addTask', (e) => {
  e.processTask();
});

scheduler.addTask(new Task(123, () => {
  setTimeout(() => {
    console.log('FIRING AT TIME 1000ms');
  }, 1000)
}));

scheduler.addTask(new Task(456, () => {
  setTimeout(() => {
    console.log('FIRING AT TIME 500ms');
  }, 500)
}));

scheduler.addTask(new Task(789, () => {
  console.log('FIRING AT TIME 0ms!');
}));
