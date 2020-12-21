let toggle = document.querySelector('.toggle');
    bgTop = document.querySelector('.bg-top');
    container = document.querySelector('.container');
    toggleBall = document.querySelector(".toggle-ball");
    toggleBallHide = document.querySelector(".toggle-ball-hide"); squares = document.querySelectorAll(".big-square, .small-square");
    squaresHover = document.querySelector(".big-square:hover");
    textItems = document.querySelectorAll(".header h4, .handle, .big-square-h4, .small-square-text");


toggle.addEventListener('click', function(){
    
    bgTop.classList.toggle("bg-top-light");
    container.classList.toggle("container-light");
    toggleBallHide.classList.toggle("toggle-show");
    toggleBall.classList.toggle("toggle-hide");
    
    squares.forEach(square => {
        
        square.classList.toggle("square-light");
    })
    
    textItems.forEach(textItem => {
        
        textItem.classList.toggle("text-light");
    });
    
    toggle.classList.toggle("bg-image-light");
     
})