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


let Scene = function(name) {
    this.name = name;
    this.vertices = [];
};

Scene.prototype.init = function() {

};

Scene.prototype.run = function() {
    this.update();
    this.display();
};

Scene.prototype.update = function() {

};

Scene.prototype.interpolate = function(otherScene, ratio) {
    this.update();
    otherScene.update();
    for (let i = 0; i < this.vertices.length; i++) {
        let a = this.vertices[i];
        let b = otherScene.vertices[i];
        this.vertices[i] = lerp(a, b, ratio);
    }
    this.display();
};

Scene.prototype.display = function() {
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, dotsVBuf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
    gl.vertexAttribPointer(coord, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coord);
    gl.drawArrays(gl.POINTS, 0, amountX * amountY);
};