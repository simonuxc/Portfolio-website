var backdrop = document.getElementById("backdrop");
var enlargedPicture = document.getElementById("enlarged-picture");
var body = document.getElementsByTagName("body")[0];

backdrop.addEventListener("click", function(e) {
    backdrop.style.display = "none";
    enlargedPicture.style.display = "none";
    body.style.overflow = "visible";
})

document.addEventListener("click", function(e) {
    if (e.target.matches('.project-gallery__picture img')) {
        var picture = e.target
        enlargedPicture.src = picture.src;
        backdrop.style.display = "block";
        enlargedPicture.style.display = "block";
        body.style.overflow = "hidden";
    }
})