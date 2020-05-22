let scenes = [];

let Scene = function(name) {
    this.name = name;
    this.vertices = [];
    scenes.push(this);
};

// Scene.prototype.init = function() {

// };

Scene.prototype.run = function(sum) {
    this.update(sum);
    this.display();
};

Scene.prototype.update = function() {

};

Scene.prototype.mix = function(sum, otherScene, sumOther, ratio) {
    this.update(sum);
    otherScene.update(sumOther);
    for (let i = 0; i < this.vertices.length; i++) {
        let a = this.vertices[i];
        let b = otherScene.vertices[i];
        this.vertices[i] = lerp(a, b, ratio);
    }
    this.display();
};

Scene.prototype.display = function() {


    gl.clear(gl.COLOR_BUFFER_BIT);
    if (drawCount >= 5) {
        currentProgram = getProgram("blue-background");
        gl.useProgram(currentProgram);
        // gl.uniform1f(time, drawCount * 0.00125);
        gl.uniform1f(time, 0.125 + drawCount * 0.00025);
        drawBG(currentProgram);
    }
    currentProgram = getProgram("cyan-dots");
    gl.useProgram(currentProgram);


    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, dotsVBuf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
    gl.vertexAttribPointer(coord, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coord);
    gl.drawArrays(gl.POINTS, 0, 2500);
};


Scene.prototype.blend = function(sum, otherScene, sumOther, ratio) {
    this.update(sum);
    otherScene.update(sumOther);
    for (let i = 0; i < this.vertices.length; i++) {
        let a = this.vertices[i];
        let b = otherScene.vertices[i];
        this.vertices[i] = lerp(a, b, ratio);
    }
    this.display(1);
    otherScene.display(ratio);
};