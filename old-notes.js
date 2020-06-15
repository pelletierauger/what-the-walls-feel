        sh.positionLocation = gl.getAttribLocation(sh.program, "a_position");
        sh.texcoordLocation = gl.getAttribLocation(sh.program, "a_texcoord");

        let vertices = new Float32Array([-1, 1, 1, 1, 1, -1, // Triangle 1
            -1, 1, 1, -1, -1, 1 // Triangle 2
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


        // Create a texture.
        gl.activeTexture(gl.TEXTURE0);
        // sh.texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, sh.texture);

        // Fill the texture with a 1x1 blue pixel.
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE,
            new Uint8Array([0, 0, 255, 255]));
        // Now sh the image has loaded make copy it to the texture.
        gl.bindTexture(gl.TEXTURE_2D, sh.texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, sh.image);
        // gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, this.image);
        // gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 64, 64, 0, gl.RGBA, gl.UNSIGNED_BYTE, this.image);
        gl.generateMipmap(gl.TEXTURE_2D);