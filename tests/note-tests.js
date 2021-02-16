let ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

function testCircleRadiusDefaultsTo10() {
  let note = new Note();
  assert.isTrue(note.radius === 10);
};

function testHomePageHasTitle() {
  let title = document.getElementById("title")
  console.log(title)
  assert.isTrue(title !== "Hello World!")
}

function testIfAssertIsNeeded() {
  let title = document.getElementById("title")

  if (title.textContent.includes("My Notes")) {
    console.log("Title includes \"My Notes\".")
  };

  if !(title.textContent.includes("My Notes")) {
    throw new Error("Title does not include \"My Notes\".")
  };

}

ready(() => {
  testCircleRadiusDefaultsTo10();
  testHomePageHasTitle();
  testIfAssertIsNeeded();
});
