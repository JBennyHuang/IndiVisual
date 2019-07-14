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

const items = [[item_1, item_2, item_3], [item_1, item_1, item_1], [item_2, item_2, item_2], [item_3, item_3, item_3]];

const wardrobe = document.getElementById('container-products');


// function that displays the items 
let display_wardrobe_items = (items) => {

    let carousel_row = document.createElement('div');
    carousel_row.setAttribute('class', 'row h-100');

    let carousel_prev = document.createElement('a');
    carousel_prev.setAttribute('class', 'col-1 h-100 text-center');
    carousel_prev.setAttribute('href', '#container-products');
    carousel_prev.setAttribute('data-slide', 'prev');

    let carousel_prev_ico = document.createElement('span');
    carousel_prev_ico.setAttribute('class', 'carousel-control-prev-icon h-100 my-auto');

    let carousel_inner = document.createElement('div');
    carousel_inner.setAttribute('class', 'carousel-inner col-10 h-100 mx-auto rounded');

    let carousel_next = document.createElement('a');
    carousel_next.setAttribute('class', 'col-1 h-100 text-center');
    carousel_next.setAttribute('href', '#container-products');
    carousel_next.setAttribute('data-slide', 'next');

    let carousel_next_ico = document.createElement('span');
    carousel_next_ico.setAttribute('class', 'carousel-control-next-icon h-100 my-auto');

    for (let i = 0; i < items.length; i++) {

        // create a 'div' element for each set of items
        let carousel_item = document.createElement('div');
        carousel_item.setAttribute('class', 'carousel-item' + (i == 0 ? ' active' : ''));

        let carousel_item_row = document.createElement('div');
        carousel_item_row.setAttribute('class', 'row h-100')

        for (let j = 0; j < items[i].length; j++) {

            // create a 'div' element for each item in the set
            let wardrobe_item = document.createElement('div');
            wardrobe_item.setAttribute('class', 'wardrobe-item h-75 mx-auto my-auto rounded');
            wardrobe_item.addEventListener('click', (event) => {
                if (wardrobe_item.offsetWidth == 250) {
                    for (let k = 0; k < items[i].length; k++) {
                        if (j != k) {
                            wardrobe_item.parentNode.children[k].style = 'width: 0px;';
                        } else {
                            wardrobe_item.parentNode.children[k].style = 'width: 100%;';
                        }
                    }
                } else {
                    for (let k = 0; k < items[i].length; k++) {
                        wardrobe_item.parentNode.children[k].removeAttribute('style');
                    }
                }
            });

            let wardrobe_item_image = document.createElement('div')
            wardrobe_item_image.style.background = 'url(' + items[i][j].background_image + ') center center / contain no-repeat';
            wardrobe_item_image.style.width = '100%';
            wardrobe_item_image.style.height = '100%';

            // append this 'div' into the larger 'div' for the set
            wardrobe_item.appendChild(wardrobe_item_image);
            carousel_item_row.appendChild(wardrobe_item);
        }

        carousel_item.appendChild(carousel_item_row);
        carousel_inner.appendChild(carousel_item);
    }

    carousel_prev.appendChild(carousel_prev_ico);
    carousel_next.appendChild(carousel_next_ico);

    carousel_row.appendChild(carousel_prev);
    carousel_row.appendChild(carousel_inner);
    carousel_row.appendChild(carousel_next);

    wardrobe.appendChild(carousel_row);
};

display_wardrobe_items(items); 