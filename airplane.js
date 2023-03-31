// Airplane TASK:
// Write an Airplane object that initializes name.
// Give airplanes the ability to .takeOff() and .land():
// If a plane takes off, its isFlying property is set to true.
// If a plane lands, its isFlying property is set to false.


function airplane(name){
    let airplane={}
    airplane.name=name
    airplane.fly=false

    airplane.land=function(){
        airplane.fly = false
        console.log(name + " is landing.");
    }
    airplane.takeOff=function(){
        airplane.fly = true
        console.log(name + " is flying.");
    }
    return airplane
}
  let myAirplane = airplane("myAirplane");
  myAirplane.takeOff()
  myAirplane.land()
  
  