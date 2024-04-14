function sweatshirt(){
    document.getElementById("intro").style.display = "none";
    document.getElementById("main").style.display = "none";

    var box = document.createElement("div");
    box.style.justifyContent= "space-Between"
    var img = document.createElement("img");
    img.src = "https://images.asos-media.com/products/adidas-originals-tonal-textures-french-terry-reverse-sweatshirt-in-brown-with-back-logo/201207112-3?$n_240w$&wid=40&fit=constrain";

    var img1 = document.createElement("img");
    img1.src = "https://images.asos-media.com/products/adidas-originals-tonal-textures-french-terry-reverse-sweatshirt-in-brown-with-back-logo/201207112-2?$n_240w$&wid=40&fit=constrain";

    var img2 = document.createElement("img");
    img2.src = "https://images.asos-media.com/products/adidas-originals-tonal-textures-french-terry-reverse-sweatshirt-in-brown-with-back-logo/201207112-1-brown?$n_320w$&wid=317&fit=constrain";

    var img3 = document.createElement("img");
    img3.src = "https://images.asos-media.com/products/adidas-originals-tonal-textures-french-terry-reverse-sweatshirt-in-brown-with-back-logo/201207112-4?$n_240w$&wid=40&fit=constrain";

    box.append(img,img1,img2,img3);
    document.querySelector("body").append(box)
}