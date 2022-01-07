function createImageList() {
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
    return document.querySelector('.current').id;
}

function getNextSlide(curr) {
    return (++curr % wolves.length);
}

function getPrevSlide(curr) {
    return (--curr % wolves.length);
}

document.addEventListener("DOMContentLoaded", function(event) { 
    let res = createImageList();
    document.getElementById('list-images').innerHTML = res;
  });