const submitMessage = () => {
    console.log('submitting message...')
    const passcodeInput = document.querySelector('#passcode'); // <input>
    const messageInput = document.querySelector('#message')
    const passcodeValue = passcodeInput.value;
    const messageValue = messageInput.value;

    //send to firebase
    firebase.database().ref().push({
        message: messageValue,
        passcode: passcodeValue,
    });

    passcodeInput.value = '';
    messageInput.value = '';
}

// const sendMessageButton = document.querySelector(".button")
// console.log(sendMessageButton);
// sendMessageButton.addEventListener('click', submitMessage);
