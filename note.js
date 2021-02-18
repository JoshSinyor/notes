noteList = [];

function createNote() {
  let noteInput = document.getElementById("text-box");
  noteList.push(noteInput.value);
  console.log(1)
}

function showNotes() {
  let list = document.getElementById("list")
  let notes = ''
  for (let i = 0; i < noteList.length; i++) {
    notes += `<p>${noteList[i]}</p>`
  }
  list.innerHTML = notes
  console.log(2)
}

// function clip() {
//   if (noteList.every(checkLength(text))) {

//   }
// }

// function checkLength(text) {
//   if (text.length > 20) {

//   }
// }


fetch('https://unpkg.com/emoji.json@13.1.0/emoji.json')
  .then(function(response) {
    console.log('API fetch was a success!', response);
    response.json().then(function(data) {
    console.log(data);
    console.log(data[1]);
    })
  })

  .catch(function (err) {
    console.warn('Something went wrong', err);
  });
 

let createButton = document.getElementById("create-button");
createButton.addEventListener("click", createNote);
createButton.addEventListener("click", showNotes);
