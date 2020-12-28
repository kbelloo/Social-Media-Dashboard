let lightMode = localStorage.getItem('lightMode');

let toggle = document.querySelector('.toggle');
bgTop = document.querySelector('.bg-top');
container = document.querySelector('.container');
toggleBall = document.querySelector(".toggle-ball");
toggleBallHide = document.querySelector(".toggle-ball-hide");
squares = document.querySelectorAll(".big-square, .small-square");
squaresHover = document.querySelector(".big-square:hover");
textItems = document.querySelectorAll(".header h4, .handle, .big-square-h4, .small-square-text");

const enableLightMode = () => {

    bgTop.classList.add("bg-top-light");
    container.classList.add("container-light");
    toggleBallHide.classList.add("toggle-show");
    toggleBall.classList.add("toggle-hide");

    squares.forEach(square => {

        square.classList.add("square-light");
    });

    textItems.forEach(textItem => {

        textItem.classList.add("text-light");
    });

    toggle.classList.add("bg-image-light");

    localStorage.setItem('lightMode', 'enabled');
};


const disableLightMode = () => {

    bgTop.classList.remove("bg-top-light");
    container.classList.remove("container-light");
    toggleBallHide.classList.remove("toggle-show");
    toggleBall.classList.remove("toggle-hide");

    squares.forEach(square => {

        square.classList.remove("square-light");
    });

    textItems.forEach(textItem => {

        textItem.classList.remove("text-light");
    });

    toggle.classList.remove("bg-image-light");

    localStorage.setItem('lightMode', null);
};

if (lightMode === 'enabled') {
    
    enableLightMode();
}


toggle.addEventListener('click', function () {
    
    lightMode = localStorage.getItem('lightMode')

    if (lightMode !== 'enabled') {

        enableLightMode();

    }else {
        
        disableLightMode();
    }

});
