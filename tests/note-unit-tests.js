function clear(){
  noteList = []
  clippedNoteList = []
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

function testCanSeeMultipleNotes() {
  create("Hello there!");
  create("Bye!")
  showNotes();
  let list = document.getElementById("list")
  if (list.children[0].innerText !== "Hello there!") {
    throw new Error("First note is not displayed")
  }
  if (list.children[1].innerText !== "Bye!") {
    throw new Error("Second note is not displayed")
  }
  clear();
}

function testChecksIfNoteIs20CharactersLong() {
  create("I hope that this string is longer than twenty characters")
  clippedString = clip(noteList[0])
  if (clippedString.length > 20) {
    throw new Error("Character Length is still greater than 20")
  }
  clear();
}

function testChecksIfNotesAre20CharactersLong() {
  create("I hope that this string is longer than x characters")
  create("I hope that this string is longer than y characters")
  if (clip(noteList[0]).length > 20) {
    throw new Error("Character Length of first element is still greater than 20")
  }
  if (clip(noteList[1]).length > 20) {
    throw new Error("Character Length of second element is still greater than 20")
  }
  clear();
}

ready(() => {
  testCreateNote()
  testCreateNoteTakesTextFromTheTextArea()
  testCanSeeOneNote()
  testCanSeeMultipleNotes()
  testChecksIfNoteIs20CharactersLong()
  testChecksIfNotesAre20CharactersLong()
})