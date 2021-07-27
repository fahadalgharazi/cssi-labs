let googlerUser;
let userId;

window.onload = () =>{
    firebase.auth()
    .onAuthStateChanged(user =>{
        if(user){
            console.log(`logged in as: ${user.displayName}`);
            googleUser = user;
            userId = googleUser.uid;

        }else{
            window.location = 'index.html';
        }
    })
}

const submitNote = () =>{
    const note = document.querySelector("#noteText").value;
    const title = document.querySelector("#noteTitle").value;

    firebase.database().ref(`users/${userId}`).push(
        {
            title: title,
            note: note,
            date: new Date().toLocaleString()
        })
        .then(() =>{
            document.querySelector("#noteText").value = "";
            document.querySelector("#noteTitle").value = "";

        }).then(() =>{
            window.alert("submitted")
        })
}   