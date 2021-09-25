// $(window).scroll(function() {
//     // imageScrollingStrip();
//     // treeScrolling();
// });


/**
 *  Handle mobile menu toggle
 */
let openMenu = document.getElementById("menu-toggle");
openMenu.addEventListener("click", openMobileMenu);

let closeMenu = document.getElementById("close-menu");
closeMenu.addEventListener("click", closeMobileMenu);

function openMobileMenu() {
    let mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.add("menu-open");
}

function closeMobileMenu() {
    let mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.remove("menu-open");
}

/**
 *  Initialize the countdown timer
 */
var countdown = document.getElementById("jdsc_countdown");

if (countdown) {
    document.getElementById("jdsc_days").innerHTML = '12';
    
    // Set the default date we're counting down to
    var countDownDate = new Date("November 28, 2021").getTime();

    // Update the timer for first load
    updateCountdown(countDownDate);
    
    // Update the count down every 1 second
    var x = setInterval(function() {
        
        // Update timer each second
        updateCountdown(countDownDate);

    }, 1000);
} else {
    console.log('Cannot find Timer');
}

// Handles the countdown timer updates
function updateCountdown(countDownDate) {
    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("jdsc_days").innerHTML = (days < 10) ? "0" + days : days;
    document.getElementById("jdsc_hours").innerHTML = (hours < 10) ? "0" + hours : hours;
    document.getElementById("jdsc_min").innerHTML = (minutes < 10) ? "0" + minutes : minutes;
    document.getElementById("jdsc_sec").innerHTML = (seconds < 10) ? "0" + seconds : seconds;
    countdown.classList.add("loaded");
}

// 
// Handle form conditionals
// 
let guestTwo = document.getElementById("guest2");
let plusOneRadios = document.querySelectorAll('.plus-one');
plusOneRadios.forEach( radio => radio.addEventListener("change", () => {
    if (radio.value === "yes") {
        guestTwo.style.display = "block";
    } else {
        guestTwo.style.display = "none";
    }
}));

// 
// Handle contact form submissions
// 
let form = document.getElementById("rsvp-form");

async function handleSubmit(event) {
    event.preventDefault();

    let status = document.getElementById("formResponse");
    status.style.display = "none";

    let data = new FormData(event.target);
    let attending = data.get("attending");
    let meal = data.get("meal-preference");
    let guest = data.get("plus-one");

    let message;
    if (attending === "yes") {
        message = "Thank you for your RSVP! We can't wait to see you there!";
    } else {
        message = "Thank you for your RSVP! We're sorry you can't make it, but we understand!";
    }

    if (! attending || !meal || !guest) {
        status.innerHTML = "Please fill in the RSVP fields before submitting.";
        status.style.display = "block";
        return false;
    }
    
    
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            "Accept": "application/json"
        }
    }).then(response => {
        status.innerHTML = message;
        status.style.display = "block";
        form.reset()
        form.style.display = "none";
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your rsvp. Do you mind trying again?"
        status.style.display = "block";
    });
}

if (form) {
    form.addEventListener("submit", handleSubmit);
}


/**
 *  Smoothscrolling for in-page target links
 * 
 *  Requires jQuery
 *  Needed for save-the-date website
 */
// $('a[href*="#"]')
//     // Remove links that don't actually link to anything
//     .not('[href="#"]')
//     .not('[href="#0"]')
//     .click(function(event) {
//     // On-page links
//     if (
//         location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
//         && 
//         location.hostname == this.hostname
//     ) {
//         // Figure out element to scroll to
//         var target = $(this.hash);
//         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//         // Does a scroll target exist?
//         if (target.length) {
//         // Only prevent default if animation is actually gonna happen
//         event.preventDefault();
//         $('html, body').animate({
//             scrollTop: target.offset().top
//         }, 1000, function() {
//             // Callback after animation
//             // Must change focus!
//             var $target = $(target);
//             $target.focus();
//             if ($target.is(":focus")) { // Checking if the target was focused
//             return false;
//             } else {
//             $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
//             $target.focus(); // Set focus again
//             };
//         });
//         }
//     }
// });

// Parallax Scrolling effects for save-the-date website
function imageScrollingStrip() {
    var wScroll = $(window).scrollTop() / 1.35;
    $('.image-strip').css('top','-'+ wScroll +'px');
}

function treeScrolling() {
    var foreground = $(window).scrollTop() * 0.25;
    var midground = $(window).scrollTop() * 0.1;
    var background = $(window).scrollTop() * 0.05;
    var mountains = $(window).scrollTop() * 0.03;
    $('.t-one').css('bottom','calc(-200px + '+ foreground +'px)');
    $('.t-two').css('bottom','calc(-125px + '+ foreground +'px)');
    $('.t-three').css('bottom','calc(-85px + '+ midground +'px)');
    $('.t-four').css('bottom','calc(-85px + '+ midground +'px)');
    $('.t-five').css('bottom','calc(-40px + '+ background +'px)');
    $('.mountains').css('bottom','calc(-20px + '+ mountains +'px)');
}