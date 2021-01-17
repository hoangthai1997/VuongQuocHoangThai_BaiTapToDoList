function TaskList(){
    this.arr = [];
    this.addTask = function(ta){
        this.arr.push(ta);
    }
    this.timViTri = function (id) {
        return this.arr.findIndex(function (item) {
          return id === item.taskName;
        });
      };
    this._deleteTask = function (id) {
        var viTri = this.timViTri(id);
        if (viTri !== -1) {
          this.arr.splice(viTri, 1);
        }
      };
    this.getTaskById = function (id) {
        var viTri = this.timViTri(id);
        if (viTri !== -1) {
          return this.arr[viTri];
        }
      };
    this.updateTask = function (task) {
        var viTri = this.timViTri(task.taskName);
        if (viTri !== -1) {
          this.arr[viTri] = task;
        }
      };
}