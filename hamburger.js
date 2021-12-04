const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('unOrdered');

hamburger.addEventListener('click', function () {
    navUl.classList.toggle('show');
})