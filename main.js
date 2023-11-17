const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.classList.add('selected-card');
        cards.forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.classList.remove('selected-card');
            }
        });
    });
});

function onScroll() {
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    var sections = document.querySelectorAll('.scrollspy a');
    sections.forEach(function (current) {
        var currLink = current;
        var targetSection = document.querySelector(currLink.getAttribute('href'));
        if (targetSection.offsetTop <= scrollPos && targetSection.offsetTop + targetSection.offsetHeight > scrollPos) {
            document.querySelectorAll('.scrollspy a').forEach(function (el) {
                el.classList.remove('active');
            });
            currLink.classList.add('active');
        } else {
            currLink.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', onScroll);