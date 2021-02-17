function clear(){
  noteList = []
  noteInput = document.getElementById("text-box")
  noteInput.value = ""
}

function testCreateNote(){
  createNote();
  if (noteList.length !== 1) {
    throw new Error("note list is empty")
  }
  clear();
}

function testCreateNoteTakesTextFromTheTextArea() {
  noteInput = document.getElementById("text-box")
  noteInput.value = "Hello there!"
  createNote();
  if (noteList[0] !== "Hello there!") {
    throw new Error("Text area note was not added")
  }
  clear();
}

ready(() => {
  testCreateNote()
  testCreateNoteTakesTextFromTheTextArea()
})