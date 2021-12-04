
const navBar = document.getElementById("navBar");


const links = navBar.getElementsByClassName("is");


for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


/* Explanation:
1. Get the container element which is the id navBar... const navBar = document.getElementById("navBar");
2. Get all the class "is" which are children of the li inside the navBar.
3. Loop through the li's and add active class to the current menu.
*/
