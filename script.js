// responsiveness for header
hamburger = document.querySelector(".hamburger");
        hamburger.onclick = function(){
            navBar = document.querySelector(".nav-bar");
            navBar.classList.toggle("active");
        }

        




// code for floating button
document.addEventListener('DOMContentLoaded', function() {
var button = document.getElementById('floatingbtn');
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;

    if (scrollPosition < 20) {
        button.style.opacity = '1';
    }else{
        button.style.opacity = '0';
    }});
});



   

// animate on scroll
const boxes = document.querySelectorAll('.animate')
window.addEventListener('scroll', checkBoxes)
checkBoxes()
function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 5
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < triggerBottom){
            box.classList.add('show')
        } else{
            box.classList.remove('show')
        }
    })
}   
