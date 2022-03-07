



// var indexy = 0

// var imgArray = ['cheesesoup.jpg', 'chickensoup.jpg', 'macaroni.jpg'];

// document.getElementById("button").addEventListener('click', changeImg);

// function changeImg() {
//     indexy = (indexy + 1) % imgArray.length;
//     document.getElementById("myImage").src = imgArray[indexy]
// }



//Class solution


var images = ['background1.jpg', 'background2.jpg', 'background3.jpg'];

var index = 1

document.querySelector("button").addEventListener("click", function(){
    var nextImage = images[index];
    document.querySelector("img").setAttribute("src", nextImage);
    index ++;
    if(index >= images.length){
        index = 0
    }
})