// What is a scene? 

// A scene contains... 
// A scene should give 25000 positions on demand... and also interpolate with another scene...

// When interpolating with another scene... 
// it should activate the update() method of this other scene, to get the positions.
// A scene should have an init() function that could be run before the update function
// runs once... 
// The purpose of an init() function is to deal with scenes that are chaotic
// in nature and need a little bit of time to settle towards an attractor.
// So... theoretically... the init() function could generate 25,000 fixed positions
// as the initial state of the scene... 


let Scene = function() {

};

Scene.prototype.init = function() {

};

Scene.prototype.update = function() {

};

Scene.prototype.interpolate = function() {

};