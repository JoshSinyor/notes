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

// function clip() {
//   if (noteList.every(checkLength(text))) {

//   }
// }

// function checkLength(text) {
//   if (text.length > 20) {

//   }
// }

let createButton = document.getElementById("create-button");
createButton.addEventListener("click", createNote);
createButton.addEventListener("click", showNotes);
