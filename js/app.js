particlesJS('starry-night', {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 900
            }
        },
        "color": {
            "value": "#233B45"
        },
        "shape": {
            "type": [
                "circle",
                "image",
            ],
            "image": {
                "src": "http://cuppajoey.com/shareimg/star.png",
                "width": 15,
                "height": 15
            }
        },
        "size": {
            "value": 5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 10,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.20844356791251797,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 0.2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
        "onhover": {
            "enable": false,
            "mode": "repulse"
        },
        "onclick": {
            "enable": false,
            "mode": "push"
        },
        "resize": false
        },
        "modes": {
        "grab": {
            "distance": 400,
            "line_linked": {
            "opacity": 1
            }
        },
        "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
        },
        "repulse": {
            "distance": 200,
            "duration": 0.4
        },
        "push": {
            "particles_nb": 4
        },
        "remove": {
            "particles_nb": 2
        }
        }
    },
    "retina_detect": false,
    "config_demo": {
        "hide_card": false,
        "background_color": "#b61924",
        "background_image": "",
        "background_position": "50% 50%",
        "background_repeat": "no-repeat",
        "background_size": "cover"
    }
});

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
    $('.t-one').css('bottom','calc(-200px + '+ foreground +'px)');
    $('.t-two').css('bottom','calc(-125px + '+ foreground +'px)');
    $('.t-three').css('bottom','calc(-85px + '+ midground +'px)');
    $('.t-four').css('bottom','calc(-85px + '+ midground +'px)');
    $('.t-five').css('bottom','calc(-40px + '+ background +'px)');
}
