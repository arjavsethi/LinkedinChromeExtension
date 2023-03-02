// create the image element
const img = document.createElement("div");
img.src = "";
img.alt = "";
img.id = "messageOpenai";
img.style.cursor = "pointer"; // make the cursor change on hover
img.style.position = "absolute";
img.style.top = "15px";
img.style.left = "15px";
img.style.minWidth = "10px";
img.style.minHeight =  "10px";
img.style.borderRadius =  "50%";
img.style.background= "red";
img.addEventListener("click", myFunction); // attach the click event listener



// the function to be called on image click
function myFunction() {
  // do something
  console.log("clicked")
  popupContainer.style.display = 'block';
}

// Using set-timeout need to find better solution 
setTimeout(function() {
    // Code to be executed after 3 seconds
    const parentDiv = document.querySelector('.msg-form__msg-content-container--scrollable.scrollable.relative');

    // insert the image element inside the parent div element
    if (parentDiv) {
      parentDiv.appendChild(img);
    } else {
      console.log("Parent element not found.");
    }
  }, 3000);