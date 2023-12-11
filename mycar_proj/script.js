var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); // Change image every 2 seconds
}

let element = document.getElementById("nav_links");
    let hea = document.getElementById("header");

    let open_menu = document.getElementById("open_menu");
    let close_menu = document.getElementById("close_menu");
    let container = document.getElementById("container")

    open_menu.addEventListener("click", () => {


      element.className = "active";
      hea.className = "active"
      close_menu.style.display = "block";
      open_menu.style.display = "none";
      container.style.display = "none";


    });


    close_menu.addEventListener("click", () => {
      element.className -= "active"
      hea.className -= "active";
      close_menu.style.display = "none";
      open_menu.style.display = "block";

    })
