// DS and ALGO

class TaskRunner {
    constructor(props) {
      this.asyncTasks = props.asyncTasks || [];
      this.limit = props.limit || 10;
      this.isExecuting = 0;
    }
  
    push(task) {
      this.asyncTasks.push(task);
      performAsyncTask(task);
    }
  
    performAsyncTask(asyncTask) {
      this.isExecuting = this.asyncTasks.length;
  
      Promise.race([task])
        .then((result) => {
          // we can do some success actions
          // call the callback
        })
        .catch((err) => err)
        .finally(() => {
          this.isExecuting = false;
        });
    }
  }
  
  const result = new TaskRunner();
  
  // result.push(asynTask, (output) => ...); // 10 [fetchUsers, fetch]
  // result.push(asynTask, (output) => ...); // 5
  // result.push(asynTask, (output) => ...);
  
  
//   Inputs from and to (HH:MM format to HH:MM format)
  
//   First shift - 6AM to 2PM - 13$
//   Second shift - 2PM to 9PM - 12$
//   Third shift - 9PM to 5AM - 14$
  
//   8AM - 4:30PM - 6*13 + 2.5 * 12$
  
  
//   1. set of 3 shift values
//   2. in the first loop, min max, result {13: 6}
  
  
  const calculateSalary = (from, to) => {
      const range = (from, length) => Array.from({ length }, (_, i) => from > 24 ? i : from + i );
      const result = {}
  
      const shift1 = range(6, 8); // 
      const shift2 = range(14, 8); // 
      const shift3 = range(21, 8);
  
      if (from <= Math.max(shift1) || to > Math.min(shift1)) {
          // result.shift1
      }   
  }
  