// step-01 add click event handler with the submit button

document.getElementById('btn-submit').addEventListener('click',function(){
    // console.log('clicked')

// step 02 get the email address inside the email field
//  always remember to use .value to get text from an input field
const emailField = document.getElementById('user-email');
const email = emailField.value;
console.log(email);


})

