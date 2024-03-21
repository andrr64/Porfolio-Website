var navMenu = document.getElementById('navbarNav').getElementsByTagName('li');
function changeMenu(menuName){
    for(var i = 0; i < navMenu.length; i++){
        navMenu[i].classList.remove("active");
    }
    document.getElementById(menuName).classList.add("active");
}
