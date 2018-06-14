class Task {

  /**
    *  constructoR
    *  @param taskId: number
    *  @param action: function
  */

  constructor(taskId, action) {
    this.taskId = taskId;
    this.action = action;
  }
}

module.exports = Task;
