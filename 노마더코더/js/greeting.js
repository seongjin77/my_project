const loginForm = document.querySelector('#login-form');
const logInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

function btn(e){
    e.preventDefault();
    loginForm.classList.add('hidden');
    const username = logInput.value;
    localStorage.setItem('username', username);
    paintGreetings(username)
}

loginForm.addEventListener('submit', btn);

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove('hidden');

}

const saveUsername = localStorage.getItem('username');

if(saveUsername === null) {
    loginForm.classList.remove('hidden');
    loginForm.addEventListener('submit', btn);
}
else{
    paintGreetings(saveUsername);
}