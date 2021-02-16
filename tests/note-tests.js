var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

function testCircleRadiusDefaultsTo10() {
  let note = new Note();
  assert.isTrue(note.radius === 10);
};

function testHomePageHasTitle() {
  let title = document.getElementById("title")
  assert.isTrue(title)
}

ready(() => { 
  testCircleRadiusDefaultsTo10();
  testHomePageHasTitle();
});
