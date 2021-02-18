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
   list.innerHTML += `<div class= "list-item"><span class="short">${clip(noteList[i])}</span><span class="long">${noteList[i]}</span></div>`
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

let createButton = document.getElementById("create-button");
createButton.addEventListener("click", createNote);
createButton.addEventListener("click", clearTextBox);
createButton.addEventListener("click", showNotes);




