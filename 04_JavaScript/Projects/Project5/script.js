

var images = ["assets/1.jpg", "assets/2.jpg", "assets/3.jpg", "assets/4.jpg", "assets/5.jpg", "assets/6.jpg"];

var index = 1

document.getElementById("bnext").addEventListener("click", function(){
    var nextImage = images[index];
    document.querySelector("img").setAttribute("src", nextImage);
    index ++;
    if(index >= images.length){
        index = 0
    }
})