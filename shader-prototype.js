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
    gl.uniform1f(time, 0.125 + drawCount * 0.00025);
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

drawImage = function(sh) {

    // withImage.textureLocation = gl.getUniformLocation(withImage.program, "u_texture");


    sh.positionLocation = gl.getAttribLocation(sh.program, "a_position");
    sh.texcoordLocation = gl.getAttribLocation(sh.program, "a_texcoord");

    let o = 0.5;
    let to = 0;
    let vertices = new Float32Array(
        [-1, (1 * o) + to, 1, (1 * o) + to, 1, (-1 * o) + to, // Triangle 1
            -1, (1 * o) + to, 1, -(1 * o) + to, -1, (-1 * o + to) // Triangle 2
        ]);


    sh.textureLocation = gl.getUniformLocation(sh.program, "u_texture");


    // Create a buffer for texcoords.
    // sh.buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, sh.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);




    // We'll supply texcoords as floats.
    gl.vertexAttribPointer(sh.texcoordLocation, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(sh.texcoordLocation);

    // Set Texcoords.
    // setTexcoords(gl);

    // gl.bufferData(
    //     gl.ARRAY_BUFFER,
    //     new Float32Array([
    //         // left column front
    //         0, 0,
    //         0, 0.1,
    //         1, 0,
    //         0, 0.1,
    //         1, 0.1,
    //         1, 0
    //     ]),
    //     gl.STATIC_DRAW);

    // Create a texture.
    gl.activeTexture(gl.TEXTURE0);
    // sh.texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, sh.texture);

    // Fill the texture with a 1x1 blue pixel.
    // gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE,
    // new Uint8Array([0, 0, 255, 255]));
    // Now sh the image has loaded make copy it to the texture.
    gl.bindTexture(gl.TEXTURE_2D, sh.texture);
    // gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, sh.image);
    // gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, this.image);
    // gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 64, 64, 0, gl.RGBA, gl.UNSIGNED_BYTE, this.image);
    // gl.generateMipmap(gl.TEXTURE_2D);

    gl.activeTexture(gl.TEXTURE0);
    // gl.bindTexture(gl.TEXTURE_2D, withImage.texture);
    // gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, withImage.image);
    // // gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, this.image);
    // // gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 64, 64, 0, gl.RGBA, gl.UNSIGNED_BYTE, this.image);
    // gl.generateMipmap(gl.TEXTURE_2D);

    gl.vertexAttribPointer(withImage.texcoordLocation, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(withImage.texcoordLocation);


    gl.useProgram(withImage.program);
    gl.uniform1i(withImage.textureLocation, 0);
    let aspect = cnvs.width / cnvs.height;
    // let vertices = new Float32Array([-1, 1, 1, 1, 1, -1, // Triangle 1
    //     -1, 1, 1, -1, -1, 1 // Triangle 2
    // ]);
    // gl.uniform1f(time, 0 + drawCount * 0.00025);
    // let vbuffer = gl.createBuffer();
    // gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    // gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, withImage.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    let itemSize = 2;
    let numItems = vertices.length / itemSize;
    withImage.program.aVertexPosition = gl.getAttribLocation(withImage.program, "a_position");
    gl.vertexAttribPointer(withImage.program.aVertexPosition, itemSize, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(withImage.program.aVertexPosition);
    gl.drawArrays(gl.TRIANGLES, 0, numItems);
    // console.log("Yrup");
}