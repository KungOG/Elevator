var floors = document.getElementById("floors")
var floor = document.getElementsByClassName("floor");
var currentFloor = 4;
var buttonPushed;
var lastFloor;
var destination;


for(var i = 0; i < floor.length; i++){
floor[i].addEventListener('click', function(e) {
    
    buttonPushed = e.target.id;
    Elevator(buttonPushed);
    console.log(destination)
    if (destination != currentFloor) {
        Object.assign(floor[destination].style,{backgroundColor:"yellow"});
        }
       
  });
}

function Elevator(buttonPushed) {
    if(buttonPushed == 5) {
        destination = 0;
    } else if (buttonPushed == 4) {
        destination = 1;
    } else if (buttonPushed == 3) {
        destination = 2;
    } else if (buttonPushed == 2) {
        destination = 3;
    } else {
        destination = 4;
    }
}
