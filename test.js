/**
 * Test stuff
 */

'use strict';

import { default as Logger } from './logger.js';
import { default as Vector } from './vector.js';
import { default as Scheduler } from "./scheduler.js"; 

let testVec = new Vector();

if ((testVec.axes.x !== undefined && testVec.axes.x === 0) && 
    (testVec.axes.y !== undefined && testVec.axes.y === 0) && 
    (testVec.axes.z !== undefined && testVec.axes.z === 0)
) {
    // good
    console.log(`Constructor passed for Vector`);
}
else {
    console.error(`Constructor failed for Vector: ${testVec}`);
}


// TEST subSelf()
let otherVec = new Vector(-20, 45.8, 100);

testVec.subSelf(otherVec);

if ((testVec.axes.x !== undefined && testVec.axes.x === 20) && 
    (testVec.axes.y !== undefined && testVec.axes.y === -45.8) && 
    (testVec.axes.z !== undefined && testVec.axes.z === -100)
) {
    // good
    console.log(`subSelf passed for Vector`);
}
else {
    console.error(`SubSelf failed for Vector`);
}


// TEST magSq()
otherVec = new Vector(-20, 45.8, 100);

let result = Math.pow(-20,2) + Math.pow(-45.8,2) + Math.pow(-100,2);

let testResult = otherVec.magSq();

if ( testResult === result ) {
    // good
    console.log(`magSq passed for Vector (x,y,z): ${testResult}`);
}
else {
    console.error(`magSq failed for Vector (x,y,z): ${testResult}`);
}

// test just x,y form
testVec = new Vector(-20, 45.8);

result = Math.pow(-20,2) + Math.pow(-45.8,2);

testResult = testVec.magSq();

if ( testResult === result ) {
    // good
    console.log(`magSq passed for Vector (x,y): ${testResult}`);
}
else {
    console.error(`magSq failed for Vector (x,y): ${testResult}`);
}



// test angle Between
testVec  = new Vector(1,0,0);
otherVec = new Vector(0,1,0);

result = Math.PI/2;

testResult = Vector.angleBetween(testVec,otherVec);

if ( testResult === result ) {
    // good
    console.log(`angleBetween passed for Vector (x,y,z): ${testResult}`);
}
else {
    console.error(`angleBetween failed for Vector (x,y,z): ${testResult}`);
}


// test just x,y form
testVec  = new Vector(0,1);
otherVec = new Vector(1,0,0);

result = -Math.PI/2;

testResult = Vector.angleBetween(testVec,otherVec);

if ( testResult === result ) {
    // good
    console.log(`angleBetween passed for Vector (x,y): ${testResult}`);
}
else {
    console.error(`angleBetween failed for Vector (x,y): ${testResult}`);
}
