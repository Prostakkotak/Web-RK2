document.addEventListener('click', function(e) {
    let target = e.target;

    while (target != this) {

        if (target == document.getElementById('theme-switch')) {
            document.getElementsByClassName('wrapper')[0].classList.toggle('black')
        }

        target = target.parentNode;
    }
})