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
var closingtime = ['Heute Geschlossen', '19:00', '19:00',
    '19:00', '19:00', '19:00', '18:00']
document.getElementById("weekday[myDay]").innerHTML = weekday[myDay];
document.getElementById("closingtime[myDay]").innerHTML = closingtime[myDay];

// SLiderShow

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
}