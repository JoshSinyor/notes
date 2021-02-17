function clear(){
  noteList = []
}

function testCreateNote(){
  createNote();
  if (noteList.length !== 1) {
    throw new Error("note list is empty")
  }
  clear();
}

ready(() => {
  testCreateNote()
})