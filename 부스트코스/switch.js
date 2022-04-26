


    function alistColor(color){
        // var alist = document.querySelectorAll('a');
        // var i=0;
        // while(i<alist.length){

        // alist[i].style.color= color;
        // i = i+1;
        // }
        $('a').css('color', color);
};
/* 스위처함수 시작 */
    function switcher1(self){

    var target = document.querySelector('body');

    if(self.value === 'night'){

    target.style.backgroundColor='black';
    target.style.color='white';
    self.value= 'day';

    alistColor('green');
 

    }

    else {

    target.style.backgroundColor='white';
    target.style.color='black';
    self.value= 'night';
    alistColor('red');
 
    
}

    };


