function metersToFeet(meter_distance){
    feet_distance = meter_distance * 3.281;
    console.log(`${meter_distance} meters is equal to ${feet_distance} feet.`);
}
function feetToMeters(feet_distance){
    meter_distance = feet_distance * 0.3048;
    console.log(`${feet_distance} feet is equal to ${meter_distance} meters.`);
}
metersToFeet(450);
feetToMeters(83);