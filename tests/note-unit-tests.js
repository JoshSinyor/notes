function clear(){
  noteList = []
  noteInput = document.getElementById("text-box")
  noteInput.value = ""
  notes = document.getElementById("list")
  notes.innerHTML = ""
}

// Keeps code DRY
function create(text) {
  noteInput = document.getElementById("text-box")
  noteInput.value = text
  createNote();
}

function testCreateNote(){
  createNote();
  if (noteList.length !== 1) {
    throw new Error("note list is empty")
  }
  clear();
}

function testCreateNoteTakesTextFromTheTextArea() {
  create("Hello there!");
  if (noteList[0] !== "Hello there!") {
    throw new Error("Text area note was not added")
  }
  clear();
}

function testCanSeeOneNote() {
  create("Hello there!");
  showNotes();
  let list = document.getElementById("list")
  if (list.children[0].innerText !== "Hello there!") {
    throw new Error("Note not displayed")
  }
  clear();
}

ready(() => {
  testCreateNote()
  testCreateNoteTakesTextFromTheTextArea()
  testCanSeeOneNote()
})