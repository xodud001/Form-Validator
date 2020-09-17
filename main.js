const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const btn = document.getElementById('test');

var checker = 0;
// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
  
  // Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function click(){
    const message =""
    console.log(message);
    showError(username, message);
}

btn.addEventListener('click', function(e){
    if(checker == 0){
        click();
        checker = 1;
    }
    else if(checker == 1){
        const formControl = username.parentElement;
        formControl.className = 'form-control';
        checker = 0;
    }
});