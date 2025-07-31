// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let msg = document.getElementById("formMsg");

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !email || !message) {
    msg.textContent = "Please fill in all fields.";
    msg.style.color = "red";
  } else if (!emailPattern.test(email)) {
    msg.textContent = "Please enter a valid email.";
    msg.style.color = "red";
  } else {
    msg.textContent = "Message sent successfully!";
    msg.style.color = "green";
    this.reset();
  }
});

// To-Do List
function addTask() {
  let input = document.getElementById("todoInput");
  let taskText = input.value.trim();
  if (taskText === "") return;

  let li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", function () {
    li.classList.toggle("done");
  });

  let delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.style.marginLeft = "10px";
  delBtn.style.background = "none";
  delBtn.style.border = "none";
  delBtn.style.cursor = "pointer";

  delBtn.onclick = () => li.remove();

  li.appendChild(delBtn);
  document.getElementById("todoList").appendChild(li);
  input.value = "";
}
