function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

var myDate = new Date();
var myDay = myDate.getDay();

// Array of days.
var weekday = ['Sonntag', 'Montag', 'Dienstag',
    'Mittwoch', 'Donerstag', 'Freitag', 'Samstag'
];

// Array of closing time
var closingtime = ['geschlossen', 'bis 19:00 geöffnet', 'bis 19:00 geöffnet',
    'bis 19:00 geöffnet', 'bis 19:00 geöffnet', 'bis 19:00 geöffnet', 'bis 18:00 geöffnet']
document.getElementById("weekday[myDay]").innerHTML = weekday[myDay];
document.getElementById("closingtime[myDay]").innerHTML = closingtime[myDay];

// SLiderShow

let slideIndex = 1;
showSlides();

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}