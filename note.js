noteList = [];

function createNote() {
  let noteInput = document.getElementById("text-box");
  noteList.push(noteInput.value);
}

function showNotes() {
  let list = document.getElementById("list")
  let notes = ''
  for (let i = 0; i < noteList.length; i++) {
    notes += `<p>${noteList[i]}</p>`
  }
  list.innerHTML = notes
}

let createButton = document.getElementById("create-button");
createButton.addEventListener("click", createNote);
createButton.addEventListener("click", showNotes);
