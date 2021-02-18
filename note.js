noteList = [];
clippedNoteList = [];

function createNote() {
  let noteInput = document.getElementById("text-box");
  noteList.push(noteInput.value);
}

function showNotes() {
  let list = document.getElementById("list")
  let notes = ''
  clipNoteList()
  for (let i = 0; i < clippedNoteList.length; i++) {
    notes += `<p>${clippedNoteList[i]}</p>`
  }
  list.innerHTML = notes
}

function clipNoteList() {
  for (let i = 0; i < noteList.length; i++) {
    clippedNoteList.push(clip(noteList[i]))
  }
  return clippedNoteList
}

function clip(text) {
  if (text.length > 20) {
    let clippedString = text.slice(0, 20)
    return clippedString
  } else {
    return text
  }
}

let createButton = document.getElementById("create-button");
createButton.addEventListener("click", createNote);
createButton.addEventListener("click", showNotes);
