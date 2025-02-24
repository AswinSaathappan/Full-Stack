class TaskManager {
    constructor() {
        this.tasks = [];
    }

    add(task) {
        if (task.trim()) {
            this.tasks.push(task);
            this.show();
        } else {
            alert("Task cannot be empty!");
        }
    }

    del(i) {
        this.tasks.splice(i, 1);
        this.show();
    }

    upd(i) {
        let newTask = prompt("Update task:", this.tasks[i]);
        if (newTask?.trim()) {
            this.tasks[i] = newTask;
            this.show();
        }
    }

    show() {
        let list = document.getElementById("list");
        list.innerHTML = "";

        for (let i = 0; i < this.tasks.length; i++) {
            let li = document.createElement("li");
            li.innerHTML = `${this.tasks[i]} 
                <button onclick="tm.upd(${i})">Update</button>
                <button onclick="tm.del(${i})">Delete</button>`;
            list.appendChild(li);
        }
    }
}

const tm = new TaskManager();

function add() {
    let input = document.getElementById("input");
    tm.add(input.value);
    input.value = "";
}
