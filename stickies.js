// to-do:
// style textbox text
// add button to delete textarea

// feature:
// "save notes": clicking save bookmarks the browser page with your note as the description.
// window vs. tab notes
// "title this tab" feature
// ctrl-B to bold, ctrl-I to italicize

// bugs
// styling of note strange and terrible on stackoverflow...why?

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    addSticky();
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
      return true;
});

function addSticky(e) {
    //e.preventDefault();

    // create notes container if not already present
    let notes = document.querySelector(`div#stickynotes`);
    if(!notes) {
      notes = document.createElement('div');
      notes.setAttribute('id', 'stickynotes');
      document.body.insertBefore(notes, document.body.firstChild);
    }

    // create sticky and add to top of notes container
    const note = document.createElement('div');
    note.classList.add('stickynote');

    const text = document.createElement('textarea');
    text.addEventListener('mousedown', startDrag);
    text.classList.add('stickynote__textarea');

    note.appendChild(text);
    notes.insertBefore(note, notes.firstChild);

}

// click and drag functionality
let isDown = false;
let startCoords = {};
let shift = {};
let coords;

function startDrag(e) {

  isDown = true;
  let note = this.parentElement;
  note.classList.add('active');

  if(document.activeElement.tagName === 'TEXTAREA') {
    stopDrag();
  };

  const noteCoords = note.getBoundingClientRect();
  // stop dragging to allow for note resize
  if(noteCoords.width - e.offsetX < 15 && noteCoords.height - e.offsetY < 15) {
    stopDrag();
  };

  coords = {
    top: noteCoords.top + (noteCoords.height / 2),
    left: noteCoords.left + (noteCoords.width / 2)
  };

  [shift.left, shift.top] = (note.dataset.top || note.dataset.left) ? [Number(note.dataset.left), Number(note.dataset.top)] : [0,0];
  [startCoords.left, startCoords.top] = [coords.left, coords.top];
}

function drag(e) {
  if(!isDown) return;
  e.preventDefault();

  const note = document.querySelector('.active');
  let coords = note.getBoundingClientRect();
  if(coords.top <= 0 || coords.left <= 0 || coords.right >= window.innerWidth || coords.bottom >= window.innerHeight) {
    // return;
  }

  const [x,y] = [e.pageX, e.pageY];
  const [walkX, walkY] = [(x + shift.left - startCoords.left),(y + shift.top - startCoords.top)]

  note.style.setProperty('transform', `translate(${walkX}px, ${walkY}px)`);
  note.dataset['left'] = walkX;
  note.dataset['top'] = walkY;
}

function stopDrag() {
  isDown = false;

  const note = document.querySelector('.active');
  if(note) {
    note.classList.remove('active');
  }
}

// Event Listeners
// upon mousemove, drag the note
document.addEventListener('mousemove', drag);

// upon mouseup or mouseleave, stop dragging
document.addEventListener('mouseleave', stopDrag);
document.addEventListener('mouseup', stopDrag);
