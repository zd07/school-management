
const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId),
        bodypd = document.getElementById(bodyId),
        headerpd = document.getElementById(headerId)

    // Validate that all variables exist
    if (toggle && nav && bodypd && headerpd) {
        toggle.addEventListener('click', () => {
            // show navbar
            nav.classList.toggle('show')
            // change icon
            toggle.classList.toggle('bx-x')
            // add padding to body
            bodypd.classList.toggle('body-pd')
            // add padding to header
            headerpd.classList.toggle('body-pd')
        })
    }
}


showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')
const nav1=document.getElementById('nav-bar');
const navBar=document.getElementById('navbar-toggler')
    navBar.addEventListener('click',()=>{
        nav1.classList.toggle('show1');
    })
/*===== LINK ACTIVE =====*/
const linkColor = document.querySelectorAll('.nav_link')

function colorLink() {
    if (linkColor) {
        linkColor.forEach(l => l.classList.remove('active'))
        this.classList.add('active')
    }
}
linkColor.forEach(l => l.addEventListener('click', colorLink))
const studentCount = document.getElementById('student-count');
let count = 0;

const incrementCount = () => {
    if (count < 500) {
        count+=5;
        studentCount.textContent = count;
        setTimeout(incrementCount, 10); // Adjust the delay (in milliseconds) for the counting speed
    }
};

// Start counting when the page loads
incrementCount();