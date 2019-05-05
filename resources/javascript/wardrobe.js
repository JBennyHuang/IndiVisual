particlesJS("main-container", {
    "particles": {
        "number": {
            "value": 40,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#FFFFFF"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 0,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 80,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 300,
            "color": "#000000",
            "opacity": 0.4,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": 3,
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
    "retina_detect": true
});
var update;
update = function () {
    requestAnimationFrame(update);
};
requestAnimationFrame(update);

// wardrobe-item // temporary will move to database

var item_1 = {
    background_image: 'img1.jpg'
}

var item_2 = {
    background_image: 'img2.jpg'
}

var item_3 = {
    background_image: 'img3.png'
}

var items = [[item_1, item_1, item_1, item_1], [item_1, item_2, item_3], [item_2, item_2, item_2]];

var wardrobe = document.getElementById('container-wardrobe');

display_wardrobe_items = function (items) {
    for (var i = 0; i < items.length; i++) {
        var carousel_item = document.createElement('div');
        carousel_item.setAttribute('class', 'carousel-item' + (i == 0 ? ' active' : ''));

        var carousel_item_row = document.createElement('div');
        carousel_item_row.setAttribute('class', 'row')

        for (var j = 0; j < items[i].length; j++) {
            var wardrobe_item = document.createElement('div');
            wardrobe_item.setAttribute('class', 'wardrobe-item mx-auto rounded');

            var wardrobe_item_image = document.createElement('div')
            wardrobe_item_image.style.background = 'url(' + items[i][j].background_image + ') center center / contain no-repeat';
            wardrobe_item_image.style.width = '100%';
            wardrobe_item_image.style.height = '100%';

            wardrobe_item.appendChild(wardrobe_item_image);
            carousel_item_row.appendChild(wardrobe_item);
        }

        carousel_item.appendChild(carousel_item_row);
        wardrobe.firstElementChild.appendChild(carousel_item);
    }
};

display_wardrobe_items(items);

wardrobe.addEventListener('wheel', function (event) {
    event.preventDefault();

    var delta;

    if (event.wheelDelta) {
        delta = event.wheelDelta;
    } else {
        delta = -1 * event.deltaY;
    }

    if (delta >= 0) {
        $('.carousel-control-prev').click();
    } else {
        $('.carousel-control-next').click();
    }

    console.log(delta >= 0);
});
