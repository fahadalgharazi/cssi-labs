// when the page loads, check user logged in state

window.onload = () => {
    firebase.auth().onAuthStateChanged((user) => {
  if (user) {
// If logged in, user's notes from db
//      Display notes on page 
    const googleUserId = user.uid;

    getNotes(googleUserId);



  } else {
    // If not logged redirect to log in page
    window.location = 'index.html'
  }
});

};

const getNotes = (userId) =>{
    console.log(userId)
    const userRef = firebase.database().ref(`users/${userId}`);
    userRef.on('value', snapshot => {
        writeNotesToHtml(snapshot.val());
    });
};

const writeNotesToHtml = (data) => {
    const noteRenderArea = document.querySelector("#app");
    for (let noteKey in data ){
        //Create html string for one note
        let noteHtml = createHtmlForNote(data[noteKey])
        noteRenderArea.innerHTML += noteHtml;
        console.log(noteHtml)
    }
    //put all html into page at once

};

const createHtmlForNote = (note) => {
    //TODO create the element and put in the note data
    // return `${note.title},${note.note}`;
    return `
    
        <div class:"column is-one-third>
            <div class="card">
  <div class="card-image">
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
      </div>
      <div class="media-content">
        <p class="title is-4">${note.title}</p>
      </div>
    </div>

    <div class="content">
      ${note.note}
      <br>
      <time datetime="2016-1-1">${note.date}</time>
    </div>
  </div>
</div>

    
        </div>
    `;
}