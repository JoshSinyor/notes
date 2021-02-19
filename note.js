noteList = [];

function createNote() {
  let noteInput = document.getElementById("text-box");
  noteList.push(noteInput.value);
}

function showNotes() {
  let list = document.getElementById("list")
  list.innerHTML = ''
  for (let i = 0; i < noteList.length; i++) {
    console.log(list)
   list.innerHTML += `<ul class= "list-item"><span class="short">${clip(noteList[i])}</span><span class="long">${noteList[i]}</span></ul>`
  }
}

function clip(text) {
  if (text.length > 20) {
    let clippedString = text.slice(0, 17)
    return clippedString + "..."
  } else {
    return text
  }
}

function clearTextBox() {
  let noteInput = document.getElementById("text-box");
  noteInput.value = ''
}

function expandNote() {
  console.log("clicking on a note")
  let shortNote = document.getElementsByClassName('short')
  shortNote.display= "none";
}

let createButton = document.getElementById("create-button");
createButton.addEventListener("click", createNote);
createButton.addEventListener("click", clearTextBox);
createButton.addEventListener("click", showNotes);


let notes = document.getElementById("list");
notes.addEventListener("click", expandNote);


