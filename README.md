# task-scheduler

### Exercise

Using node.js, write a simple event based system. It should have "tasks" that can be added to the system. It should be able to process the tasks (could be just writing something to the command line), and it should be built in an extensible manner so it can be used for a variety of tasks.


### Solution

A task scheduler is responsible for managing the tasks, where a task is composed of a `taskId` and `action`. Every time a task is added, an event is emitted, which in turn triggers `processTask` that will process the action defined for each task.

### Setup

* `npm i` to install the dependencies
* `node index.js` for a simple node app
* `node run test` to run test along with coverage
