/*
  The space travellers have safely landed and are foraging for food in the natural wildlife.

  There are bushes with many different colour berries.
  The pink berries are the ONLY safe ones to eat.
  If any other berries are present, it's best not to eat from the bush at all!

  Create a function which checks if the bush has ALL PINK berries and is safe for the astronauts to eat from the bush.

  Use the tests to confirm which message to return
*/
function pinik(name){
  return name==="pink";
}

function bushChecker(name) {
  var text='';
  var bool=name.every(pinik)
  
  if(bool){
   return  text='Bush is safe to eat from'
  }
  else if(!bool){
   return text ='Toxic! Leave bush alone!'
  }
  return text
 
}

/* ======= TESTS - DO NOT MODIFY ===== */

let bushBerryColours1 = ["pink", "pink", "pink", "neon", "pink", "transparent"]
let bushBerryColours2 = ["pink", "pink", "pink", "pink"]

const util = require('util');

function test(test_name, actual, expected) {
    let status;
    if (actual === expected) {
        status = "PASSED";
    } else {
        status = `FAILED: expected: ${util.inspect(expected)} but your function returned: ${util.inspect(actual)}`;
    }

    console.log(`${test_name}: ${status}`);
}

test(
  "bushChecker funtion works - case 1",
  bushChecker(bushBerryColours1),
  "Toxic! Leave bush alone!"
);

test(
  "bushChecker funtion works - case 1",
  bushChecker(bushBerryColours2),
  "Bush is safe to eat from"
);
