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
    gl.drawArrays(gl.POINTS, 0, 2500);
};