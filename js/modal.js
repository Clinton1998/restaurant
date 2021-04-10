let imagenes = document.querySelectorAll('.gallery__img');
let modal = document.querySelector('#modal');
let img = document.querySelector('#modal__img');
let boton = document.querySelector('#modal__boton');

imagenes.forEach(function(image){
    image.addEventListener('click', function(){
        img.setAttribute('src', this.src);
        modal.classList.toggle('modal--open');
    });
});

boton.addEventListener('click',function(){
    modal.classList.toggle('modal--open');
});