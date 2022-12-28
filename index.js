for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var x = this.textContent;
     sound(x);
     btnAnimation(x);
  });


}
document.addEventListener("keypress",function(e){
    sound(e.key)
    btnAnimation(e.key);
})

function sound(key){
  switch (key) {
    case "f":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom_1 = new Audio("./sounds/tom-1.mp3");
      tom_1.play();
      break;
    case "j":
      var tom_2 = new Audio("./sounds/tom-2.mp3");
      tom_2.play();
      break;
    case "k":
      var tom_3 = new Audio("./sounds/tom-3.mp3");
      tom_3.play();
      break;
    case "l":
      var tom_4 = new Audio("./sounds/tom-4.mp3");
      tom_4.play();
      break;

      default:
  }
}
function btnAnimation(key){
    let element=document.querySelector("."+key)
    element.classList.add("pressed");
    setTimeout(function(){
      element.classList.remove("pressed");
    },300)
}
