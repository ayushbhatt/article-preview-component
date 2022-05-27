const button_press = document.querySelector(".share-button");
const svg_img = document.querySelector(".svg-img");

function change_button_color(){
    console.log(svg_img.getAttribute("class").includes("svg-img-unclicked"));
    if(svg_img.getAttribute("class").includes("svg-img-unclicked"))
    {
        svg_img.classList.toggle("svg-img-clicked");
        button_press.classList.toggle("share-button-clicked");
    }
}

button_press.addEventListener("click", () => {
      console.log("clicked");
      change_button_color();
  });