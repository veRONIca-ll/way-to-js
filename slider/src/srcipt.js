function createImageList() {
    // creating list of images gotten from a file
    let listImage = '<ul class="images">';
    for (let image = 0; image < wolves.length; image++) {
        if (image === 0) {
            listImage +='<li id="' + image + '" class="current"><img src="' + wolves[image][1] + '"></li>';
            continue;
        }
        listImage += '<li id="' + image + '" class="slide"><img src="' + wolves[image][1] + '"></li>';
    }
    listImage += "</ul>";
    return listImage;
}

function getCurrentSlide() {
    // getting id of <li> that is seen on the page now
    return document.querySelector('.current').id;
}

function changeSlide(direction) {
    // changing slide depending on where we are goung (back / forward)
    let current = getCurrentSlide();
    let changeTo = null;

    document.querySelectorAll('.images li')[current].className = 'slide';
    if (direction == 'back') {
        changeTo = (wolves.length + --current) % wolves.length;
    } else if (direction == 'next') {
        changeTo = ++current % wolves.length;
    } else {
        changeTo = 0;
    }

    document.querySelectorAll('.images li')[changeTo].className = 'current';
}

document.addEventListener("DOMContentLoaded", function(event) { 
    document.getElementById('list-images').innerHTML = createImageList();
  });