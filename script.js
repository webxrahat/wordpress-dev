document.addEventListener("DOMContentLoaded", function() {
    var header = document.getElementById("MyHeader");
    
    window.addEventListener("scroll", function() {
      if (window.scrollY > 350) { // Change 50 to the desired scroll position
        header.style.backgroundColor = "#333"; // Change to the desired background color
      } else {
        header.style.backgroundColor = "transparent";
      }
    });
  });
  