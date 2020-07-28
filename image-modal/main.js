// Get the modal
var modal = document.getElementById("myModal");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var images = document.querySelectorAll('img');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

window.openModal = function(img) {
	modal.style.display = 'block';
    // modalImg.src = img.getAttribute("data-highres");
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

for(var i=0, len = images.length; i < len; i++) {
    images[i].addEventListener('click', openModal);
}

// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
// span.addEventListener('click', closeModal);

// window.closeModal = function() {
//     modal.style.display = "none";
// }

span.onclick = function() { 
  modal.style.display = "none";
}