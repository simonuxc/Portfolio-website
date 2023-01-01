var backdrop = document.getElementById("backdrop");
var enlargedPicture = document.getElementById("enlarged-picture");
console.log(enlargedPicture.src);
backdrop.addEventListener("click", function(e) {
    backdrop.style.display = "none";
    enlargedPicture.style.display = "none";
})

document.addEventListener("click", function(e) {
    if (e.target.matches('.project-gallery__picture img')) {
        var picture = e.target
        enlargedPicture.src = picture.src;
        console.log(picture.width);
        console.log(picture.height);
        backdrop.style.display = "block";
        enlargedPicture.style.display = "block";
    }
})