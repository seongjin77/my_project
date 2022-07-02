const title = document.querySelector('.hello h1');
title.innerText='Hello!'


function hand(){
    title.style.color = 'blue';
};

function mouse(){
    console.log('mouse is here')
}
function windowhandle(){
    document.body.style.backgroundColor = 'tomato';
}
function copy(){
    alert('copy');
}
function offline(){
    alert('offline');
}
function online(){
    alert('online');
}
title.addEventListener('click',hand );
title.addEventListener('mouseenter',mouse );

window.addEventListener('resize',windowhandle );
window.addEventListener('copy',copy );
window.addEventListener('offline',offline );
window.addEventListener('online',online );