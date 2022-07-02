const h1 = document.querySelector('h1');
h1.innerText='Hello!'


function hand(){
    // const clickedClass = 'clicked';
    // if(h1.classList.contains(clickedClass)) {
    //     h1.classList.remove(clickedClass);
    // }else{
    //     h1.classList.add(clickedClass);
    // }
    h1.classList.toggle('clicked');

}

h1.addEventListener('click',hand )