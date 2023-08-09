const menuItem = document.querySelectorAll('.menu.item');

menuItem.forEach(function(item){
    item.addEventListener('click', function(e){
        const activeItem= document.querySelector('.active');
        activeItem.classList.remove('active');
        e.target.classList.add('active');
    });

});

//Menú hamburguesa
const menuHamburg = document.querySelector('#menu_hamburguer');

menuHamburg.addEventListener('click', function () {
  document.body.classList.toggle('mobile-menu-active');
});

/* Modo Oscuro*/

const modoOscuro = document.querySelector('#modo-oscuro');

modoOscuro.addEventListener('click', function () {
  document.body.classList.toggle('modo-oscuro');
});