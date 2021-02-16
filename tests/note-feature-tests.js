let ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

function testIfPageTitleIncludesTitleText() {
  let title = document.getElementById("title")

  if (title.textContent.includes("My Notes")) {
    console.log("Title includes \"My Notes\".")
  }
  else {
    throw new Error("Title does not include \"My Notes\".")
  };
}

function testTextBox() {
  let box = document.getElementById("box")
  if (box !== Element) {
    throw new Error("Box does not exist!")
  }
}

ready(() => {
  testIfPageTitleIncludesTitleText();
  testTextBox();
})
