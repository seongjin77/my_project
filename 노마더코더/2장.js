const loginForm = document.querySelector('#login-form');
const logInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

function btn(e){
    e.preventDefault();
    loginForm.classList.add('hidden');
    const username = logInput.value;
    localStorage.setItem('username', username);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove('hidden');

}

loginForm.addEventListener('submit', btn);