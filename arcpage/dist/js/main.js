let menuBtn = document.querySelectorAll('.menu-btn');
let element = document.querySelectorAll('.btnLine');
let menu = document.querySelectorAll('.menu');
let header = document.querySelectorAll('header');
let logo = document.querySelectorAll('.logo');

let showMenu = false;


function openMenu() {
    if (!showMenu) {
        //
        menuBtn[0].classList.add('close');
        menu[0].classList.add('show');
        header[0].classList.add('reduce');
        logo[0].classList.add('reduce');
        /*
        for(x = 0; x < element.length; x++){
            element[x].classList.add('close');
        }*/




        showMenu = true;

    } else {

        menuBtn[0].classList.remove('close');
        menu[0].classList.remove('show');
        header[0].classList.remove('reduce');
        logo[0].classList.remove('reduce');

        /*for(x = 0; x < element.length; x++){
            element[x].classList.remove('close');
        }
        */



        showMenu = false;
    }
}
