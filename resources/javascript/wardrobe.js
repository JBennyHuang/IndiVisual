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
let update;
update = function () {
    requestAnimationFrame(update);
};
requestAnimationFrame(update);

// wardrobe-item
// temporary will move to database

const item_1 = {
    background_image: 'img1.png'
}

const item_2 = {
    background_image: 'img2.png'
}

const item_3 = {
    background_image: 'img3.png'
}

const items = [[item_1, item_1, item_1, item_1], [item_1, item_2, item_3], [item_2, item_2, item_2]];

const wardrobe = document.getElementById('container-wardrobe');


// function that displays the items 
let display_wardrobe_items = (items) => {
    for (let i = 0; i < items.length; i++) {

        // create a 'div' element for each set of items
        let carousel_item = document.createElement('div');
        carousel_item.setAttribute('class', 'carousel-item' + (i == 0 ? ' active' : ''));

        let carousel_item_row = document.createElement('div');
        carousel_item_row.setAttribute('class', 'row' + ' h-100')

        for (let j = 0; j < items[i].length; j++) {

            // create a 'div' element for each item in the set
            let wardrobe_item = document.createElement('div');
            wardrobe_item.setAttribute('class', 'wardrobe-item mx-auto rounded');
            wardrobe_item.addEventListener('click', (event) => {
                if (wardrobe_item.offsetWidth == 250) {
                    wardrobe_item.style = ' \
                        width: 100%; \
                        position: absolute;';
                }
                else {
                    wardrobe_item.removeAttribute('style')
                }
            });

            let wardrobe_item_image = document.createElement('div')
            wardrobe_item_image.style.background = 'url(' + items[i][j].background_image + ') center center / contain no-repeat';
            wardrobe_item_image.style.width = '250px';
            wardrobe_item_image.style.height = '100%';

            // append this 'div' into the larger 'div' for the set
            wardrobe_item.appendChild(wardrobe_item_image);
            carousel_item_row.appendChild(wardrobe_item);
        }

        carousel_item.appendChild(carousel_item_row);
        wardrobe.firstElementChild.appendChild(carousel_item);
    }
};

display_wardrobe_items(items);

// wardrobe.addEventListener('wheel', function (event) {
//     event.preventDefault();

//     let delta;

//     if (event.wheelDelta) {
//         delta = event.wheelDelta;
//     } else {
//         delta = -1 * event.deltaY;
//     }

//     if (delta >= 0) {
//         $('.carousel-control-prev').click();
//     } else {
//         $('.carousel-control-next').click();
//     }

//     console.log(delta >= 0);
// });

// function wardrobe_item_expand(e) {

//     //test description, to be set to each item's description
//     var description = '<div class="description_container"><a href="#testDescription" class="accordian_trigger"><h4>Co-Borrower Information</h4></a><hr/><div class="accordian_item" id="accord_item_2"><label> First Name</label><br/><input type="text"/><br/><label>Middle Name</label><br/><input type="text"/><br/><label>Last Name</label><br/><input type="text" /><br/><label>Home Number</label><br/><input type="text"/><br><label>Work Number</label><br/><input type="text"/><br><label>Cell Number</label><br/><input type="text"/><br></div></div>';

//     //Should check if the container-wardrobe is expanded or not already, currently !() result is always true
//     if (!($('#container-wardrobe').hasClass("wardrobe-item-expanded"))) {
//         previous_container = $('#container-wardrobe').clone();
//         e.target.className += "wardrobe-item-expanded";
//         $('#container-wardrobe').empty().append(e.target).append(description);
//         e.target.addEventListener('click', clickExpand);
//     } else {
//         //Should revert to original container 
//         $('#container-wardrobe').replaceWith(previous_container);
//     }
// };