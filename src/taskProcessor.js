const EventEmitter = require('events');

class TaskProcessor extends EventEmitter {

  /**
    *  constructor
    *  @param {Object} opts
  */
  constructor(opts = {}) {

    super();
    // data structure to hold all the tasks
    this.tasks = [];
  }

  /**
   * Returns the tasks length
   * @return {Number}
   */

  getTaskSize() {
    return this.tasks.length;
  }

  /**
   * Insert a task to tasks array
   * emit 'addTask'
   * @param {Task}
   */

  addTask(task) {
    this.tasks.push(task);
    this.emit('addTask', this);
  }

  /**
   * Process a task and removes it from the array
   * @return task action
   */

  processTask() {

    if (this.tasks.length > 0) {
      return this.tasks.shift().action();
    }
  }
}

module.exports = TaskProcessor
