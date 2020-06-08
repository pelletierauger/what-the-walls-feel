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
    this.display(1);
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
    this.display(1);
};

Scene.prototype.interp = function(sum, otherScene, sumOther, ratio) {
    this.update(sum);
//     logJavaScriptConsole(ratio * 1000);
    otherScene.update(sumOther);
    for (let i = 0; i < this.vertices.length; i++) {
        let a = this.vertices[i];
        let b = otherScene.vertices[i];
        let valley = ((1 - ratio) * 5000) - 2500;
        if (Math.abs(i - 2500) < valley) {
            this.vertices[i] = a;
        } else {
            this.vertices[i] = b;
        }
    }
    this.display(1);
};


Scene.prototype.display = function(alpha) {

    // We start by drawing the whole image on the first texture, "texture"
    let oneTextureProgram = getProgram("one-texture-program");
    // gl.clear(gl.COLOR_BUFFER_BIT);
    // We bind the framebuffer...
    bindFrameBuffer(texture, framebuf);
    gl.viewport(0, 0, cnvs.width, cnvs.height);

    // gl.clear(gl.COLOR_BUFFER_BIT);
    if (drawCount >= 5) {
        currentProgram = getProgram("blue-background");
        gl.useProgram(currentProgram);
        // gl.uniform1f(time, drawCount * 0.00125);
        resolutionBG = gl.getUniformLocation(getProgram("blue-background"), "resolution");
        gl.uniform1f(resolutionBG, resolutionScalar);
        time = gl.getUniformLocation(getProgram("blue-background"), "time");
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



    // unbind the buffer and draw the resulting texture....

    let vertices = new Float32Array([-1, 1, 1, 1, 1, -1, // Triangle 1
        -1, 1, 1, -1, -1, -1 // Triangle 2
    ]);
    let itemSize = 2;
    let numItems = vertices.length / itemSize;
    // let vbuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    currentProgram = oneTextureProgram;
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, cnvs.width, cnvs.height);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.useProgram(currentProgram);

    currentProgram.aVertexPosition = gl.getAttribLocation(currentProgram, "a_position");
    gl.enableVertexAttribArray(currentProgram.aVertexPosition);
    gl.vertexAttribPointer(currentProgram.aVertexPosition, itemSize, gl.FLOAT, false, 0, 0);

    textureLocation = gl.getUniformLocation(currentProgram, "u_texture");
    gl.uniform1i(textureLocation, 0);
    timeLocation = gl.getUniformLocation(currentProgram, "time");
    gl.uniform1f(timeLocation, drawCount * 0.01);
    alphaLocation = gl.getUniformLocation(currentProgram, "alpha");
    gl.uniform1f(alphaLocation, alpha);

    texcoordLocation = gl.getAttribLocation(currentProgram, "a_texcoord");
    gl.enableVertexAttribArray(texcoordLocation);
    gl.vertexAttribPointer(texcoordLocation, 2, gl.FLOAT, false, 0, 0);

    gl.drawArrays(gl.TRIANGLES, 0, numItems);
};


Scene.prototype.blend = function(sum, otherScene, sumOther, ratio) {
    this.update(sum);
    otherScene.update(sumOther);
    for (let i = 0; i < this.vertices.length; i++) {
        let a = this.vertices[i];
        let b = otherScene.vertices[i];
        this.vertices[i] = lerp(a, b, ratio);
    }
    if (ratio > 0) {
        otherScene.vertices = this.vertices;
        otherScene.display(1);
    }
    this.display(1 - ratio);
    //     logJavaScriptConsole(ratio);
};