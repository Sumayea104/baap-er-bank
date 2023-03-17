// step-01 add click event handler with the submit button

document.getElementById('btn-submit').addEventListener('click',function(){
    // console.log('clicked')

// step 02 get the email address inside the email field
//  always remember to use .value to get text from an input field
const emailField = document.getElementById('user-email');
const email = emailField.value;
// console.log(email);

// step 03 get the password address inside the email field
const passwordField = document.getElementById('user-password');
const password = passwordField.value;
// console.log(password);

// donot verify email password on the client side

// step-4 verify email and password

if(email === 'shontan@baap.com' && password === 'secret'){
    // console.log('valid user')
    window.location.href = 'bank.html'
}
else{
    alert('khamosh !!!! toke ami tajjo shontan ghoshona korlam. tui password vule gechos!!! type-shontan@baap.com secret')
}

})

