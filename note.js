noteList = [];

function createNote() {
  let noteInput = document.getElementById("text-box");
  noteList.push(noteInput.textContent);
}

let createButton = document.getElementById("create-button");
createButton.addEventListener("click", createNote);
