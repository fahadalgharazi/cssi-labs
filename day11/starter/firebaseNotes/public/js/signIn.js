const signIn = ()=>{
    console.log("calling sign in")
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth()
        .signInWithPopup(provider)
        .then(result =>{
            //do something with result
            console.log(`result is: ${result}`);
            const credential = result.credential;
            const token = credential.accessToken;
            const user = result.user;
            // console.log(token);
            // console.log(credential);
            console.log(user.uid);
            window.location = 'writeNote.html'
        })
        .catch(error =>{
            console.log(error);
        })
};
