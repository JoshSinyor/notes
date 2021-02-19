let ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

function testIfPageTitleIncludesTitleText() {
  let title = document.getElementById("header-text")

  if (title.textContent.includes("Notes")) {
  } else {
    throw new Error("Title does not include \"Notes\".")
  };
}

function testTextBox() {
  if (document.body.contains(document.getElementById("text-box"))) {
  } else {
    throw new Error("Box does not exist!")
  };
}

ready(() => {
  testIfPageTitleIncludesTitleText();
  testTextBox();
})
