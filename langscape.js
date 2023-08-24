
  var boxColor = document.querySelectorAll(".box").document.querySelector(".box2");
  var theInput = document.getElementById("favcolor");
  var theColor = theInput.value;
 
 theInput.addEventListener("input", () => {
     document.getElementById("hex").innerHTML = theInput.value;
     boxColor.style.background = theInput.value;
     console.log(theInput.value);
 }); 