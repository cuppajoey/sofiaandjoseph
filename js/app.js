// particlesJS('starry-night', {
//     "particles": {
//         "number": {
//             "value": 80,
//             "density": {
//                 "enable": true,
//                 "value_area": 900
//             }
//         },
//         "color": {
//             "value": "#233B45"
//         },
//         "shape": {
//             "type": [
//                 "circle",
//                 "image",
//             ],
//             "image": {
//                 "src": "http://cuppajoey.com/shareimg/star.png",
//                 "width": 15,
//                 "height": 15
//             }
//         },
//         "size": {
//             "value": 5,
//             "random": true,
//             "anim": {
//                 "enable": false,
//                 "speed": 10,
//                 "size_min": 0.1,
//                 "sync": false
//             }
//         },
//         "line_linked": {
//             "enable": false,
//             "distance": 150,
//             "color": "#ffffff",
//             "opacity": 0.20844356791251797,
//             "width": 1
//         },
//         "move": {
//             "enable": true,
//             "speed": 0.2,
//             "direction": "none",
//             "random": false,
//             "straight": false,
//             "out_mode": "out",
//             "bounce": false,
//             "attract": {
//                 "enable": false,
//                 "rotateX": 600,
//                 "rotateY": 1200
//             }
//         }
//     },
//     "interactivity": {
//         "detect_on": "canvas",
//         "events": {
//         "onhover": {
//             "enable": false,
//             "mode": "repulse"
//         },
//         "onclick": {
//             "enable": false,
//             "mode": "push"
//         },
//         "resize": false
//         },
//         "modes": {
//         "grab": {
//             "distance": 400,
//             "line_linked": {
//             "opacity": 1
//             }
//         },
//         "bubble": {
//             "distance": 400,
//             "size": 40,
//             "duration": 2,
//             "opacity": 8,
//             "speed": 3
//         },
//         "repulse": {
//             "distance": 200,
//             "duration": 0.4
//         },
//         "push": {
//             "particles_nb": 4
//         },
//         "remove": {
//             "particles_nb": 2
//         }
//         }
//     },
//     "retina_detect": false,
//     "config_demo": {
//         "hide_card": false,
//         "background_color": "#b61924",
//         "background_image": "",
//         "background_position": "50% 50%",
//         "background_repeat": "no-repeat",
//         "background_size": "cover"
//     }
// });

$(window).scroll(function() {
    imageScrollingStrip();
    treeScrolling();
});

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

// document.onreadystatechange = () => {
  
//     if (document.readyState === 'complete') {
              
//       /**
//        * Setup your Lazy Line element.
//        * see README file for more settings
//        */

//       let el = document.querySelector('#sofia');
//       let myAnimation = new LazyLinePainter(el, {"ease":"easeInQuad","strokeWidth":2,"strokeOpacity":1,"strokeColor":"#682714","strokeCap":"round"}); 
//       myAnimation.paint(); 
//     }
// }

$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
            return false;
            } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
            };
        });
        }
    }
});

// document.addEventListener("DOMContentLoaded", function(){
	var countdown = document.getElementById("jdsc_countdown");

	if (countdown) {
	    document.getElementById("jdsc_days").innerHTML = '12';
        // Set the default date we're counting down to
        var countDownDate = new Date("November 28, 2021").getTime();

        // Update the count down every 1 second
        var x = setInterval(function() {

            // Get todays date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance > 0) {
                document.getElementById("jdsc_days").innerHTML = days;
                document.getElementById("jdsc_hours").innerHTML = hours;
                document.getElementById("jdsc_min").innerHTML = minutes;
                document.getElementById("jdsc_sec").innerHTML = seconds;
                countdown.classList.add("loaded");
            } else {
                clearInterval(x);
            }
        }, 1000);
	} else {
		console.log('Cannot find Timer');
	}
// });
