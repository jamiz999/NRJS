document.addEventListener("DOMContentLoaded", function () {
    animateText("#ada", "slideInLeft");
    animateText(".Introduction", "fadeIn");
});

function animateText(selector, animationClass) {
    const element = document.querySelector(selector);
    element.style.opacity = 0;

    anime({
        targets: selector,
        opacity: 1,
        translateX: animationClass.includes("Left") ? [-20, 0] : 0,
        easing: "easeInOutQuad",
        duration: 1000,
        delay: 200,
        complete: function(anim) {
            element.style.transition = "none"; 
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const teamName = document.querySelector('.Introduction');
    const teamNames = ['Team 11', 'NRJS'];
    let currentNameIndex = 0;

    setInterval(function () {
        anime({
            targets: teamName,
            opacity: 0,
            duration: 1000, 
            easing: 'easeInOutQuad', 
            complete: function () {
                teamName.textContent = `We are ${teamNames[currentNameIndex]}`;
                anime({
                    targets: teamName,
                    opacity: 1,
                    duration: 1000, 
                    easing: 'easeInOutQuad'
                });
            }
        });

        currentNameIndex = (currentNameIndex + 1) % teamNames.length;
    }, 3000); 
});

nextButton.addEventListener("click", () => {
    document.querySelector('.slider').scrollLeft += 800; 
});

prevButton.addEventListener("click", () => {
    document.querySelector('.slider').scrollLeft -= 800;
});

