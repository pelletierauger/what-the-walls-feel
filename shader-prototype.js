let shaderPrograms = [];
let shadersReadyToInitiate = false;

let ShaderProgram = function(name) {
    this.name = name;
    // this.vertText = p.vert;
    // this.fragText = p.frag;
    shaderPrograms.push(this);
    this.initialized = false;
};

ShaderProgram.prototype.init = function() {
    if (shadersReadyToInitiate) {
        // Create a vertex shader object
        var vertShader = gl.createShader(gl.VERTEX_SHADER);
        // Attach vertex shader source code
        gl.shaderSource(vertShader, this.vertText);
        // Compile the vertex shader
        gl.compileShader(vertShader);
        // fragment shader source code
        // Create fragment shader object
        var fragShader = gl.createShader(gl.FRAGMENT_SHADER);
        // Attach fragment shader source code
        gl.shaderSource(fragShader, this.fragText);
        // Compile the fragmentt shader
        gl.compileShader(fragShader);
        // Create a shader program object to store
        // the combined shader program
        this.program = gl.createProgram();
        // Attach a vertex shader
        gl.attachShader(this.program, vertShader);
        // Attach a fragment shader
        gl.attachShader(this.program, fragShader);
        // Link both programs
        gl.linkProgram(this.program);
        this.initialized = true;
    }
};

function initializeShaders() {
    for (var i = 0; i < shaderPrograms.length; i++) {
        shaderPrograms[i].init();
    }
}

function getProgram(name) {
    for (var i = 0; i < shaderPrograms.length; i++) {
        if (shaderPrograms[i].name == name) {
            // console.log("I got it!");
            return shaderPrograms[i].program;
        }
    }
}

drawBG = function(sh) {
    let aspect = cnvs.width / cnvs.height;
    let vertices = new Float32Array([-1, 1, 1, 1, 1, -1, // Triangle 1
        -1, 1, 1, -1, -1, 1 // Triangle 2
    ]);
    gl.uniform1f(time, 0 + drawCount * 0.00025);
    // let vbuffer = gl.createBuffer();
    // gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    // gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, bgVBuf);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    let itemSize = 2;
    let numItems = vertices.length / itemSize;
    sh.aVertexPosition = gl.getAttribLocation(sh, "aPosition");
    gl.vertexAttribPointer(sh.aVertexPosition, itemSize, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(sh.aVertexPosition);
    gl.drawArrays(gl.TRIANGLES, 0, numItems);
    // console.log("Yrup");
}
// redraw();