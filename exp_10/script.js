let currentUser = "";
let myTasks = [];
function openUser() {
  currentUser = document.getElementById("user").value;

  if (currentUser === "") {
    alert("Enter name");
    return;
  }

  myTasks = JSON.parse(localStorage.getItem(currentUser)) || [];
  showList(myTasks);
}
function saveTask() {
  if (currentUser === "") {
    alert("Open user first");
    return;
  }

  let t = document.getElementById("task").value;
  if (t === "") return;

  myTasks.push({ text: t, status: false });
  document.getElementById("task").value = "";

  localStorage.setItem(currentUser, JSON.stringify(myTasks));
  showList(myTasks);
}
function showList(arr) {
  let ul = document.getElementById("list");
  ul.innerHTML = "";

  arr.forEach((x, i) => {
    let li = document.createElement("li");
    li.innerText = x.text;

    if (x.status) li.className = "done";

    li.onclick = function () {
      myTasks[i].status = !myTasks[i].status;
      localStorage.setItem(currentUser, JSON.stringify(myTasks));
      showList(myTasks);
    };

    ul.appendChild(li);
  });
}
function showAll() {
  showList(myTasks);
}

function showDone() {
  showList(myTasks.filter(t => t.status));
}

function showLeft() {
  showList(myTasks.filter(t => !t.status));
}

async function getTasks() {
  document.getElementById("msg").innerText = "";

  try {
    let randomId = Math.floor(Math.random() * 200) + 1;

    let r = await fetch(
      "https://jsonplaceholder.typicode.com/todos/" + randomId
    );

    if (!r.ok) throw "Network Error";

    let d = await r.json();

    myTasks.push({
      text: d.title,
      status: d.completed
    });

    localStorage.setItem(currentUser, JSON.stringify(myTasks));
    showList(myTasks);

  } catch (e) {
    document.getElementById("msg").innerText = "Unable to load online task";
  }
}

