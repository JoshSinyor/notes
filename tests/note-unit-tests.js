function testCreatenote(){
  createNote();
  if (noteList !== 1) {
    throw new Error("Our note list is empty")
  }
}
