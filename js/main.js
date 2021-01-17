var dstask = new TaskList();
var validation = new Validation();
getEle("addItem").addEventListener("click", function(){
    var themTask = getEle("newTask").value;
    var isValid = true;
    isValid &= validation.kiemTraRong(id, "newTask", "(*) Vui lòng nhập task").validation.kiemTraTrungTenTask(
        id,
        "newTask",
        "(*) Id đã tồn tại",
        taskList.arr
      );
    if (!isValid) return;
    var task = new Task(id, taskName, status);
})

function addTask(){

}

function deleteTask(){
    taskList._deleteTask(id);
    createTable(taskList.arr);
    setLocalStorage();
}

function changeStatus(){
    var task = taskList.getTaskById(id);
}

taskList.addTask(task);

createTable(taskList.arr);

function createTable(arr){
    var content = "";
    arr.forEach(function(item){
        content += `
            <tr>
                <td>${item.id}</td>
                <td>${item.taskName}</td>
                <td>${item.status}</td>
                <td>
                    <button class="btn btn-info" onclick="updateTask('${item.id}')">Sửa</button>
                </td>
            </tr>
        `
    })
}

function setLocalStorage(){
    var arr = JSON.stringify(taskList.arr);
    localStorage.setItem("TaskList", arr);
}

function getLocalStorage(){
    if (localStorage.getItem("TaskList")) {
        taskList.arr = JSON.parse(localStorage.getItem("TaskList"));
        taoBang(taskList.arr);
      }
    }


function getEle(id){
    return document.getElementById(id);
}