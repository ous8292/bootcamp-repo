



// var indexy = 0

// var imgArray = ['cheesesoup.jpg', 'chickensoup.jpg', 'macaroni.jpg'];

// document.getElementById("button").addEventListener('click', changeImg);

// function changeImg() {
//     indexy = (indexy + 1) % imgArray.length;
//     document.getElementById("myImage").src = imgArray[indexy]
// }



//Class solution


var images = ['chickensoup.jpg', 'cheesesoup.jpg', 'macaroni.jpg'];

var index = 1

document.querySelector("button").addEventListener("click", function(){
    var nextImage = images[index];
    document.querySelector("img").setAttribute("src", nextImage);
    index ++;
    if(index >= images.length){
        index = 0
    }
})