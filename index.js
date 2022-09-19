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