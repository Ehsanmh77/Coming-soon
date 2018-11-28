// var navMenu = document.getElementsByClassName('nav_tab');
// var mainPage = document.getElementsByClassName('mainPage');

// navMenu[0].addEventListener('click' , () => {
//     mainPage[0].classList.add('active');
//     mainPage[1].classList.remove('active');
//     mainPage[2].classList.remove('active');
// });

// navMenu[1].addEventListener('click' , () => {
//     mainPage[1].classList.add('active');
//     mainPage[0].classList.remove('active');
//     mainPage[2].classList.remove('active');
// });

// navMenu[2].addEventListener('click' , () => {
//     mainPage[2].classList.add('active');
//     mainPage[0].classList.remove('active');
//     mainPage[1].classList.remove('active');
// });


/////////////////////////////////////

var navMenu = document.getElementsByClassName('nav_tab');
var navMenus = document.getElementsByClassName('nav_tabs');
var mainPage = document.getElementsByClassName('mainPage');

function changePage (index) {
    for(var i=0 ; i<3 ; i++){
        mainPage[i].classList.remove('active');
        navMenus[i].classList.remove('active');
    }

    mainPage[index].classList.add('active');
    navMenus[index].classList.add('active');
};

navMenu[0].addEventListener('click' , () => {
    changePage(0);
});

navMenu[1].addEventListener('click' , () => {
    changePage(1);
});

navMenu[2].addEventListener('click' , () => {
    changePage(2);
});

