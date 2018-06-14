const EventEmitter = require('events');

class TaskScheduler extends EventEmitter{

  /**
    *  constructoR
    *  @param {Object} opts
  */
  constructor(opts = {}) {

    super();

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
    return this.tasks.pop().action();
  }

}

module.exports = TaskScheduler
