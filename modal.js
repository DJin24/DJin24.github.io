var modal = document.getElementById("projectDescription");

// Get the button that opens the modal
var open = document.getElementById("open");

// Get the <span> element that closes the modal
var close = document.getElementById("close");

// When the user clicks the button, open the modal
open.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
