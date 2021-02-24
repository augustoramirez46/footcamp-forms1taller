var buttonHandle = document.querySelector(".leftDiv__button");

buttonHandle.addEventListener('click', () => {
        
        window.alert('¡Si hay Polas! 🍻🍻');
        rotateImage();
    });

function rotateImage() {
    var myImage = document.querySelector(".rightDiv__img");
    myImage.style.transform = 'rotate(180deg)';
    setTimeout(() => myImage.style.transform = '', 1150);
}