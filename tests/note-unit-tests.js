function clear(value){
  noteList = []
  noteInput = document.getElementById("text-box")
  noteInput.value = ""
  notes = document.getElementById("list")
  notes.innerHTML = ""
}

function errorTest(title, customText) {
  throw new Error("❌" + title + "," + customText)
}

function passTest(title) {
  console.log("✅ Passed " + title)
}

// Only for running tests
function steamedHam() {
  testCreateNote()
  clear()
  testCreateNoteTakesTextFromTheTextArea()
  clear()
  testCanSeeOneNote()
  clear()
  testCanSeeMultipleNotes()
  clear()
}

// Keeps code DRY
function create(text) {
  noteInput = document.getElementById("text-box")
  noteInput.value = text
  createNote();
}

function testCreateNote(){
  title = "testCreateNote"
  createNote();
  if (noteList.length < 1) {
    errorTest(title, "note list is empty")
  } else {
    passTest(title)
  }
}

function testCreateNoteTakesTextFromTheTextArea() {
  title = "testCreateNoteTakesTextFromTheTextArea"
  create("Hello there!");
  if (noteList.includes("Hello there!")) {
    passTest(title)
  } else {
    errorTest(title, "Text area note was not added")
  }
  clear();
}

function testCanSeeOneNote() {
  title = "testCanSeeOneNote"
  create("Hello there!");
  showNotes();
  let list = document.getElementById("list")
  if (list.children[0].innerText !== "Hello there!") {
    errorTest(title, "Note not displayed")
  } else {
    passTest(title)
  }
}

function testCanSeeMultipleNotes() {
  title = "testCanSeeMultipleNotes"
  create("Hello there!");
  create("Bye!")
  showNotes();
  let list = document.getElementById("list")
  if (list.children[0].innerText !== "Hello there!") {
    errorTest(title, "First note is not displayed")
  }
  if (list.children[1].innerText !== "Bye!") {
    errorTest(title, "Second note is not displayed")
  } else {
    passTest(title)
  }
}

// function testChecksIfNoteIs20CharactersLong() {
//   create("I hope that this string is longer than twenty characters")
//   clip()
//   if (noteList.checkLength) {
//     throw new Error("Character Length is still greater than 20")
//   }
// }
