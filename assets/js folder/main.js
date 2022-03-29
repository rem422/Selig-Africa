// Mobile menu
const menu_btn = document.querySelector('.navbar .menu-btn i');
const mobile_menu = document.querySelector('.navbar .menu')
const menu_items = document.querySelectorAll('.navbar .menu li a')

menu_btn.addEventListener('click', () => {
    menu_btn.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

menu_items.forEach(item =>{
    item.addEventListener('click', () => {
        menu_btn.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

// Navbar scroll animation
const navbar = document.querySelector('.navbar'); 

document.addEventListener('scroll', () => {
    let scrolled_Up = window.scrollY;

    if(scrolled_Up >= 40) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    };
});

// Back to home btn
const scroll_Up_Btn = document.querySelector('.scroll-up-btn');

document.addEventListener('scroll', () => {
    let scrolled = window.scrollY;

    if(scrolled >= 50) {
        scroll_Up_Btn.classList.add('show');
    } else {
        scroll_Up_Btn.classList.remove('show');
    }
})

scroll_Up_Btn.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
});

// Highlight nav menu on scroll
const sections = document.querySelectorAll('section');
const navList = document.querySelectorAll('.navbar .menu li');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });
    navList.forEach( li => {
        li.classList.remove('activated');
        if(li.classList.contains(current)) {
            li.classList.add('activated');
        };
    });
});;

/*Footer's Year autoupdate*/
year = document.getElementById('year');

currentYear = new Date().getFullYear();
newYear = new Date(`january 01 ${currentYear + 1} 00:00:00`);
year.innerText = currentYear;

























