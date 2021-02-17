noteList = [];

function createNote() {
  let noteInput = document.getElementById("text-box");
  noteList.push(noteInput.value);
}

let createButton = document.getElementById("create-button");
createButton.addEventListener("click", createNote);
