let tasks = [
    {
        id: 1,
        name: "Belajar DOM",
        status: true
    },
    {
        id: 2,
        name: "Kerjakan latihan",
        status: false
    },
    {
        id: 3,
        name: "Explore JS DOM",
        status: true
    }
]

const add_btn = document.querySelector('#add_btn');

add_btn.style.background = 'green';
add_btn.style.color = 'white';

add_btn.addEventListener('click', () => {
    let task_input = document.querySelector('#task_input').value;
    
    if(task_input !== '') {
        let id = tasks[tasks.length - 1].id + 1;
        let tempObj = {
            id,
            name: task_input,
            status: false
        }
        tasks.push(tempObj);
        getTasks();
        document.querySelector('#task_input').value = '';
    } else {
        alert('Task kosong. harap diisi.');
    }
})

function getTasks() {
    let tBody = document.querySelector('#tBody');
    tBody.innerHTML = '';
    
    tasks.forEach(task => {
        tBody.innerHTML += `<tr>
            <td>${task.id}</td>
            <td>${task.name}</td>
            <td>${task.status}</td>
        </tr>`;
    })
}
getTasks();
