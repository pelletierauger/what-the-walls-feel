let blurryCavern = new Scene("blurry-cavern");

blurryCavern.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10) * 0.005 * 4;
    let a = 0.00005;
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            //             let ox = x - 100;
            //             let oy = y - 100;
            //             let dx = abs(cos(x) * 0.1 - Math.tan(t * 0.0025));
            //             let dy = abs(sin(y) * 0.1 - Math.tan(t * 0.0025));
            let nx = Math.cos(x / x * 4.1);
            let ny = Math.sin(y / y * 4.1);
            let xx = x + (Math.pow(Math.cos(y + y * 5 + t * 0.25), 7000) * ny);
            let yy = y + (Math.pow(Math.sin(x + y * 5 + t * 0.25), 7000) * ny);
            //             xx += cos(oy * 10) * sin(oy * 10)2
            //             xx = lerp(x, xx, grow);
            xx *= 0.95;
            xx += 3.12;
            //             yy = lerp(y, yy, grow);
            //             yy += cos(oy * 10) * sin(oy * 10);
            if (i == 0) {
                oriX = xx;
            }
            this.vertices.push((xx - 2.0) * 0.075 * 3.0 - 1.2, (yy + -2.9) * 0.07 * 4.0 - 1.3);
            i++;
        }
    }
};




blurryCavern.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10000000000) * 0.025 * 0.001;
    let a = 0.00005;
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            //             let ox = x - 100;
            //             let oy = y - 100;
            //             let dx = abs(cos(x) * 0.1 - Math.tan(t * 0.0025));
            //             let dy = abs(sin(y) * 0.1 - Math.tan(t * 0.0025));
            let nx = Math.cos(x * 4.1);
            let ny = Math.sin(y * 4.1);
            let tt = Math.sin(t * 0.125 * 0.0625) * 750;
            let m = 4e3 + tt;
            let xx = x + (Math.pow(Math.sin(m * x * x * 20) * Math.sin(t * x * y * 1e-2), 25));
            let yy = y + (Math.pow(Math.sin(m * y * x * 20) * Math.sin(t * x * y * 1e-2), 25));
            //                         xx += cos(oy * 10) * sin(oy * 10);
            //             xx = lerp(x, xx, grow);
            //             xx *= Math.sin(xx * xx * 1e-1);
            xx *= 0.95;
            xx += 3.12;
            //             yy = lerp(y, yy, grow);
            //             yy += cos(oy * 10) * sin(oy * 10);
            // if (i == 0) {
            //     oriX = xx;
            // }
            this.vertices.push((xx - 2.0) * 0.075 * 3.0 - 1.2, (yy + -2.9) * 0.07 * 4.0 - 1.3);
            i++;
        }
    }
};





// Very beautiful
blurryCavern.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10000000000 + 22 + 4) * 0.025 * 0.001;
    let a = 0.00005;
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            //             let ox = x - 100;
            //             let oy = y - 100;
            //             let dx = abs(cos(x) * 0.1 - Math.tan(t * 0.0025));
            //             let dy = abs(sin(y) * 0.1 - Math.tan(t * 0.0025));
            let nx = Math.cos(x * 4.1);
            let ny = Math.sin(y * 4.1);
            let tt = Math.sin(t * 0.125 * 0.0625) * 750;
            let m = 4e3 + tt;
            let xx = x + (Math.pow(Math.sin(m * x * 100) * Math.sin(t * y * 1e-1), 50));
            let yy = y + (Math.pow(Math.sin(m * y * 100) * Math.sin(t * x * 1e-1), 50));
            //                         xx += cos(oy * 10) * sin(oy * 10);
            //             xx = lerp(x, xx, grow);
            xx *= 0.95;
            xx += 3.12;
            //             yy = lerp(y, yy, grow);
            //             yy += cos(oy * 10) * sin(oy * 10);
            // if (i == 0) {
            //     oriX = xx;
            // }
            this.vertices.push((xx - 2.0) * 0.075 * 3.0 - 1.2, (yy + -2.9) * 0.07 * 4.0 - 1.3);
            i++;
        }
    }
};







blurryCavern.display = function() {


    var vb = map(cos(frameCount * 0.01), -1, 1, 0, 2);

    gl.clear(gl.COLOR_BUFFER_BIT);
    // We bind the framebuffer...
    bindFrameBuffer(texture, framebuf);
    gl.viewport(0, 0, cnvs.width, cnvs.height);


    // if (drawCount >= 5) {
    currentProgram = getProgram("blue-background");
    gl.useProgram(currentProgram);
    gl.uniform1f(time, drawCount * 0.00125);
    drawBG(currentProgram);
    // }

    currentProgram = getProgram("cyan-dots-2");
    gl.useProgram(currentProgram);



    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, dotsVBuf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
    gl.vertexAttribPointer(coord, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coord);
    gl.drawArrays(gl.POINTS, 0, 2500);







    // Here, the original image should be redrawned
    // from "texture" to "texture2"

    let processProgram = getProgram("process");
    // console.log(processProgram);
    gl.useProgram(processProgram);



    let aspect = cnvs.width / cnvs.height;
    let vertices = new Float32Array([-1, 1, 1, 1, 1, -1, // Triangle 1
        -1, 1, 1, -1, -1, -1 // Triangle 2
    ]);
    // let vbuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    let itemSize = 2;
    let numItems = vertices.length / itemSize;
    processProgram.aVertexPosition = gl.getAttribLocation(processProgram, "a_position");
    gl.enableVertexAttribArray(processProgram.aVertexPosition);
    gl.vertexAttribPointer(processProgram.aVertexPosition, itemSize, gl.FLOAT, false, 0, 0);




    var resolutionLocation = gl.getUniformLocation(processProgram, "u_resolution");
    var textureSizeLocation = gl.getUniformLocation(processProgram, "u_textureSize");
    var kernelLocation = gl.getUniformLocation(processProgram, "u_kernel[0]");
    var kernelWeightLocation = gl.getUniformLocation(processProgram, "u_kernelWeight");
    var flipYLocation = gl.getUniformLocation(processProgram, "u_flipY");

    var directionLocation = gl.getUniformLocation(processProgram, "direction");

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    bindFrameBuffer(texture2, framebuf2);
    gl.viewport(0, 0, cnvs.width, cnvs.height);
    gl.bindTexture(gl.TEXTURE_2D, texture);




    let name = "myBlur";
    gl.uniform2f(resolutionLocation, cnvs.width, cnvs.height);
    gl.uniform2f(textureSizeLocation, cnvs.width, cnvs.height);
    gl.uniform2f(directionLocation, 8 * vb, 0);
    gl.uniform1f(flipYLocation, 1);
    gl.uniform1fv(kernelLocation, kernels[name]);
    gl.uniform1f(kernelWeightLocation, computeKernelWeight(kernels[name]));



    // shader.uniforms.direction = i % 2 === 0 ? [radius, 0] : [0, radius]



    var textureLocation = gl.getUniformLocation(processProgram, "u_texture");
    gl.uniform1i(textureLocation, 0);
    var texcoordLocation = gl.getAttribLocation(processProgram, "a_texcoord");
    gl.enableVertexAttribArray(texcoordLocation);

    // Tell the position attribute how to get data out of positionBuffer (ARRAY_BUFFER)
    var size = 2; // 2 components per iteration
    var type = gl.FLOAT; // the data is 32bit floats
    var normalize = false; // don't normalize the data
    var stride = 0; // 0 = move forward size * sizeof(type) each iteration to get the next position
    var offset = 0; // start at the beginning of the buffer
    gl.vertexAttribPointer(texcoordLocation, size, type, normalize, stride, offset);




    // Draw the rectangle.
    gl.drawArrays(gl.TRIANGLES, 0, 6);



    gl.uniform2f(directionLocation, 0, 7 * vb);

    bindFrameBuffer(texture, framebuf);
    gl.bindTexture(gl.TEXTURE_2D, texture2);
    gl.drawArrays(gl.TRIANGLES, 0, 6);


    gl.uniform2f(directionLocation, 6 * vb, 0);

    bindFrameBuffer(texture2, framebuf2);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.drawArrays(gl.TRIANGLES, 0, 6);


    gl.uniform2f(directionLocation, 0, 5 * vb);
    bindFrameBuffer(texture, framebuf);
    gl.bindTexture(gl.TEXTURE_2D, texture2);
    gl.drawArrays(gl.TRIANGLES, 0, 6);


    gl.uniform2f(directionLocation, 4 * vb, 0);
    bindFrameBuffer(texture2, framebuf2);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    gl.uniform2f(directionLocation, 0, 3 * vb);

    bindFrameBuffer(texture, framebuf);
    gl.bindTexture(gl.TEXTURE_2D, texture2);
    gl.drawArrays(gl.TRIANGLES, 0, 6);


    gl.uniform2f(directionLocation, 2 * vb, 0);

    bindFrameBuffer(texture2, framebuf2);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    gl.uniform2f(directionLocation, 0, 1 * vb);

    bindFrameBuffer(texture, framebuf);
    gl.bindTexture(gl.TEXTURE_2D, texture2);
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    gl.uniform2f(directionLocation, 1 * vb, 0);

    bindFrameBuffer(texture2, framebuf2);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.drawArrays(gl.TRIANGLES, 0, 6);



    // ----------- Redraw the dots on top of themselves ------------------------------------

    currentProgram = getProgram("cyan-dots-2");
    gl.useProgram(currentProgram);

    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, dotsVBuf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
    gl.vertexAttribPointer(coord, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coord);
    gl.drawArrays(gl.POINTS, 0, 2500);

    // ------------------------------------------------------------------------------------


    // unbind the buffer and draw the resulting texture....
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, cnvs.width, cnvs.height);

    gl.bindTexture(gl.TEXTURE_2D, texture2);

    gl.clearColor(0.5, 0.5, 0.5, 1); // clear to white

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    var textureShader = getProgram("textu");
    gl.useProgram(textureShader);

    aspect = cnvs.width / cnvs.height;
    vertices = new Float32Array([-1, 1, 1, 1, 1, -1, // Triangle 1
        -1, 1, 1, -1, -1, -1 // Triangle 2
    ]);
    // vbuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    itemSize = 2;
    numItems = vertices.length / itemSize;
    textureShader.aVertexPosition = gl.getAttribLocation(textureShader, "a_position");
    gl.enableVertexAttribArray(textureShader.aVertexPosition);
    gl.vertexAttribPointer(textureShader.aVertexPosition, itemSize, gl.FLOAT, false, 0, 0);

    var textureLocation = gl.getUniformLocation(textureShader, "u_texture");
    gl.uniform1i(textureLocation, 0);
    var timeLocation = gl.getUniformLocation(textureShader, "time");
    gl.uniform1f(timeLocation, frameCount * 0.01);

    var texcoordLocation = gl.getAttribLocation(textureShader, "a_texcoord");
    gl.enableVertexAttribArray(texcoordLocation);

    // Tell the position attribute how to get data out of positionBuffer (ARRAY_BUFFER)
    var size = 2; // 2 components per iteration
    var type = gl.FLOAT; // the data is 32bit floats
    var normalize = false; // don't normalize the data
    var stride = 0; // 0 = move forward size * sizeof(type) each iteration to get the next position
    var offset = 0; // start at the beginning of the buffer
    gl.vertexAttribPointer(texcoordLocation, size, type, normalize, stride, offset);

    gl.drawArrays(gl.TRIANGLES, 0, numItems);


};




// ---------------------------------------------------

let blurryCavern2 = new Scene("blurry-cavern2");


// Very beautiful
blurryCavern2.update = function(sum) {
    this.verticesA = [];
    this.verticesB = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10000000000 + 22 + 4) * 0.025 * 0.001;
    let a = 0.00005;
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            //             let ox = x - 100;
            //             let oy = y - 100;
            //             let dx = abs(cos(x) * 0.1 - Math.tan(t * 0.0025));
            //             let dy = abs(sin(y) * 0.1 - Math.tan(t * 0.0025));
            let nx = Math.cos(x * 4.1);
            let ny = Math.sin(y * 4.1);
            let tt = Math.sin(t * 0.125 * 0.0625) * 750;
            let m = 4e3 + tt;
            let xx = x + (Math.pow(Math.sin(m * x * 100) * Math.sin(t * y * 1e-1), 50));
            let yy = y + (Math.pow(Math.sin(m * y * 100) * Math.sin(t * x * 1e-1), 50));
            //                         xx += cos(oy * 10) * sin(oy * 10);
            //             xx = lerp(x, xx, grow);
            xx *= 0.95;
            xx += 3.12;
            //             yy = lerp(y, yy, grow);
            //             yy += cos(oy * 10) * sin(oy * 10);
            // if (i == 0) {
            //     oriX = xx;
            // }

            xx += Math.random() * 0.005;
            yy += Math.random() * 0.005;


            if (y > 6) {
                this.verticesA.push((xx - 2.0) * 0.075 * 3.0 - 1.2, (yy + -2.9) * 0.07 * 4.0 - 1.3);
            } else {
                this.verticesB.push((xx - 2.0) * 0.075 * 3.0 - 1.2, (yy + -2.9) * 0.07 * 4.0 - 1.3);
            }
            i++;
        }
    }
};




blurryCavern2.display = function() {


    var vb = map(cos(frameCount * 0.01), -1, 1, 0, 2);

    gl.clear(gl.COLOR_BUFFER_BIT);
    // We bind the framebuffer...
    bindFrameBuffer(texture, framebuf);
    gl.viewport(0, 0, cnvs.width, cnvs.height);


    // if (drawCount >= 5) {
    currentProgram = getProgram("blue-background");
    gl.useProgram(currentProgram);
    gl.uniform1f(time, (drawCount + 4700) * 0.00125);
    drawBG(currentProgram);
    // }

    currentProgram = getProgram("cyan-dots-2");
    gl.useProgram(currentProgram);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, dotsVBuf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.verticesA), gl.STATIC_DRAW);
    gl.vertexAttribPointer(coord, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coord);
    gl.drawArrays(gl.POINTS, 0, this.verticesA.length * 0.5);



    currentProgram = getProgram("cyan-dots-3");
    gl.useProgram(currentProgram);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, dotsVBuf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.verticesB), gl.STATIC_DRAW);
    gl.vertexAttribPointer(coord, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coord);
    gl.drawArrays(gl.POINTS, 0, this.verticesB.length * 0.5);







    // Here, the original image should be redrawned
    // from "texture" to "texture2"

    let processProgram = getProgram("process");
    // console.log(processProgram);
    gl.useProgram(processProgram);



    let aspect = cnvs.width / cnvs.height;
    let vertices = new Float32Array([-1, 1, 1, 1, 1, -1, // Triangle 1
        -1, 1, 1, -1, -1, -1 // Triangle 2
    ]);
    // let vbuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    let itemSize = 2;
    let numItems = vertices.length / itemSize;
    processProgram.aVertexPosition = gl.getAttribLocation(processProgram, "a_position");
    gl.enableVertexAttribArray(processProgram.aVertexPosition);
    gl.vertexAttribPointer(processProgram.aVertexPosition, itemSize, gl.FLOAT, false, 0, 0);




    var resolutionLocation = gl.getUniformLocation(processProgram, "u_resolution");
    var textureSizeLocation = gl.getUniformLocation(processProgram, "u_textureSize");
    var kernelLocation = gl.getUniformLocation(processProgram, "u_kernel[0]");
    var kernelWeightLocation = gl.getUniformLocation(processProgram, "u_kernelWeight");
    var flipYLocation = gl.getUniformLocation(processProgram, "u_flipY");

    var directionLocation = gl.getUniformLocation(processProgram, "direction");

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    bindFrameBuffer(texture2, framebuf2);
    gl.viewport(0, 0, cnvs.width, cnvs.height);
    gl.bindTexture(gl.TEXTURE_2D, texture);




    let name = "myBlur";
    gl.uniform2f(resolutionLocation, cnvs.width, cnvs.height);
    gl.uniform2f(textureSizeLocation, cnvs.width, cnvs.height);
    gl.uniform2f(directionLocation, 8 * vb, 0);
    gl.uniform1f(flipYLocation, 1);
    gl.uniform1fv(kernelLocation, kernels[name]);
    gl.uniform1f(kernelWeightLocation, computeKernelWeight(kernels[name]));



    // shader.uniforms.direction = i % 2 === 0 ? [radius, 0] : [0, radius]



    var textureLocation = gl.getUniformLocation(processProgram, "u_texture");
    gl.uniform1i(textureLocation, 0);
    var texcoordLocation = gl.getAttribLocation(processProgram, "a_texcoord");
    gl.enableVertexAttribArray(texcoordLocation);

    // Tell the position attribute how to get data out of positionBuffer (ARRAY_BUFFER)
    var size = 2; // 2 components per iteration
    var type = gl.FLOAT; // the data is 32bit floats
    var normalize = false; // don't normalize the data
    var stride = 0; // 0 = move forward size * sizeof(type) each iteration to get the next position
    var offset = 0; // start at the beginning of the buffer
    gl.vertexAttribPointer(texcoordLocation, size, type, normalize, stride, offset);




    // Draw the rectangle.
    gl.drawArrays(gl.TRIANGLES, 0, 6);



    gl.uniform2f(directionLocation, 0, 7 * vb);

    bindFrameBuffer(texture, framebuf);
    gl.bindTexture(gl.TEXTURE_2D, texture2);
    gl.drawArrays(gl.TRIANGLES, 0, 6);


    gl.uniform2f(directionLocation, 6 * vb, 0);

    bindFrameBuffer(texture2, framebuf2);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.drawArrays(gl.TRIANGLES, 0, 6);


    gl.uniform2f(directionLocation, 0, 5 * vb);
    bindFrameBuffer(texture, framebuf);
    gl.bindTexture(gl.TEXTURE_2D, texture2);
    gl.drawArrays(gl.TRIANGLES, 0, 6);


    gl.uniform2f(directionLocation, 4 * vb, 0);
    bindFrameBuffer(texture2, framebuf2);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    gl.uniform2f(directionLocation, 0, 3 * vb);

    bindFrameBuffer(texture, framebuf);
    gl.bindTexture(gl.TEXTURE_2D, texture2);
    gl.drawArrays(gl.TRIANGLES, 0, 6);


    gl.uniform2f(directionLocation, 2 * vb, 0);

    bindFrameBuffer(texture2, framebuf2);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    gl.uniform2f(directionLocation, 0, 1 * vb);

    bindFrameBuffer(texture, framebuf);
    gl.bindTexture(gl.TEXTURE_2D, texture2);
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    gl.uniform2f(directionLocation, 1 * vb, 0);

    bindFrameBuffer(texture2, framebuf2);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.drawArrays(gl.TRIANGLES, 0, 6);



    // ----------- Redraw the dots on top of themselves ------------------------------------


    currentProgram = getProgram("cyan-dots-2");
    gl.useProgram(currentProgram);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, dotsVBuf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.verticesA), gl.STATIC_DRAW);
    gl.vertexAttribPointer(coord, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coord);
    gl.drawArrays(gl.POINTS, 0, this.verticesA.length * 0.5);



    currentProgram = getProgram("cyan-dots-3");
    gl.useProgram(currentProgram);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, dotsVBuf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.verticesB), gl.STATIC_DRAW);
    gl.vertexAttribPointer(coord, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coord);
    gl.drawArrays(gl.POINTS, 0, this.verticesB.length * 0.5);




    // ------------------------------------------------------------------------------------


    // unbind the buffer and draw the resulting texture....
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, cnvs.width, cnvs.height);

    gl.bindTexture(gl.TEXTURE_2D, texture2);

    gl.clearColor(0.5, 0.5, 0.5, 1); // clear to white

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    var textureShader = getProgram("textu");
    gl.useProgram(textureShader);

    aspect = cnvs.width / cnvs.height;
    vertices = new Float32Array([-1, 1, 1, 1, 1, -1, // Triangle 1
        -1, 1, 1, -1, -1, -1 // Triangle 2
    ]);
    // vbuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    itemSize = 2;
    numItems = vertices.length / itemSize;
    textureShader.aVertexPosition = gl.getAttribLocation(textureShader, "a_position");
    gl.enableVertexAttribArray(textureShader.aVertexPosition);
    gl.vertexAttribPointer(textureShader.aVertexPosition, itemSize, gl.FLOAT, false, 0, 0);

    var textureLocation = gl.getUniformLocation(textureShader, "u_texture");
    gl.uniform1i(textureLocation, 0);
    var timeLocation = gl.getUniformLocation(textureShader, "time");
    gl.uniform1f(timeLocation, drawCount * 0.01);

    var texcoordLocation = gl.getAttribLocation(textureShader, "a_texcoord");
    gl.enableVertexAttribArray(texcoordLocation);

    // Tell the position attribute how to get data out of positionBuffer (ARRAY_BUFFER)
    var size = 2; // 2 components per iteration
    var type = gl.FLOAT; // the data is 32bit floats
    var normalize = false; // don't normalize the data
    var stride = 0; // 0 = move forward size * sizeof(type) each iteration to get the next position
    var offset = 0; // start at the beginning of the buffer
    gl.vertexAttribPointer(texcoordLocation, size, type, normalize, stride, offset);

    gl.drawArrays(gl.TRIANGLES, 0, numItems);


};





let blendyCavern = new Scene("blendy-cavern");

blendyCavern.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10) * 0.0125 * 0.57 * 1.5;
    let a = 0.00005;
    let i = 0;
    //     for (let x = 0; x < amountX; x += 1) {
    for (let x = amountX; x > 0; x -= 1) {
        for (let y = 0; y < amountY; y += 1) {
            //             let ox = x - 100;
            //             let oy = y - 100;
            //             let dx = abs(cos(x) * 0.01 - 25);
            //             let dy = abs(sin(y) * 0.01 - 25);
            let xx = x - Math.pow(Math.cos(y * 0.1 + t * 0.25), 70) * y * 0.5;
            let yy = y + Math.pow(Math.sin(x * 0.1 + t * 0.25), 70) * y * 0.5;
            //              xx += cos(oy * 10) * sin(oy * 10)2
            //              yy += cos(oy * 10) * sin(oy * 10);
            xx += Math.random() * 0.01;
            yy += Math.random() * 0.01;
            //             if (i == 0) {
            //                 oriX = xx;
            //             }
            //             this.vertices.push((xx - 0) * 0.075 * 1.0 - 1.2, (yy + -10) * 0.07 * 1.0 - 1.3);
            xx *= 0.95;
            this.vertices.push(xx * 0.075 - 1.2115, (yy + -10) * 0.07 - 1.32); // good
            i++;
        }
    }
};


let blendyCavernB = new Scene("blendy-cavern-b");

blendyCavernB.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10) * 0.0125 * 0.57 * 1.5;
    let a = 0.00005;
    let i = 0;
    let ma = map(drawCount - sum, 0, 600, 2, -6);
    //     for (let x = 0; x < amountX; x += 1) {
    for (let x = amountX; x > 0; x -= 1) {
        for (let y = 0; y < amountY; y += 1) {
            //             let ox = x - 100;
            //             let oy = y - 100;
            //             let dx = abs(cos(x) * 0.01 - 25);
            //             let dy = abs(sin(y) * 0.01 - 25);
            let xx = x - pow(cos((y + 2) * 0.1 + t * 0.25), 70) * y * 0.5;
            let yy = y + pow(sin((x - 8) * 0.1 + t * 0.25), 70) * y * 0.5;
            //              xx += cos(oy * 10) * sin(oy * 10)2
            //              yy += cos(oy * 10) * sin(oy * 10);
            xx += Math.random() * 0.01;
            yy += Math.random() * 0.01;
            //             if (i == 0) {
            //                 oriX = xx;
            //             }
            //             this.vertices.push((xx - 0) * 0.075 * 1.0 - 1.2, (yy + -10) * 0.07 * 1.0 - 1.3);
            xx *= 0.95;
            this.vertices.push(xx * 0.075 - 1.2115, (yy + -10) * 0.07 - 1.32); // good
            i++;
        }
    }
};



let blendyCavernC = new Scene("blendy-cavern-c");

blendyCavernC.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum - 400) * 0.0125 * 0.57 * 2.5;
    let ma = map(drawCount - sum, 0, 600, 2, -6);
    //     for (let x = 0; x < amountX; x += 1) {
    for (let x = amountX; x > 0; x -= 1) {
        for (let y = 0; y < amountY; y += 1) {
            let xx = x - Math.pow(Math.cos((y + 2) * 0.1 + -t * 0.25), 20) * y * 0.25;
            let yy = y + Math.pow(Math.sin((x - 8) * 0.1 + -t * 0.25), 20) * y * 0.5;
            xx += Math.random() * 0.01;
            yy += Math.random() * 0.01;
            xx *= 0.95;
            this.vertices.push(xx * 0.075 - 1.2115, (yy + -10) * 0.07 - 1.32); // good
        }
    }
};

let blendyCavernD = new Scene("blendy-cavern-d");

blendyCavernD.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum - 400) * 0.0125 * 0.57 * 4;
    let ma = map(drawCount - sum, 0, 600, 2, -6);
    //     for (let x = 0; x < amountX; x += 1) {
    for (let x = amountX; x > 0; x -= 1) {
        for (let y = 0; y < amountY; y += 1) {
            let xx = x - Math.pow(Math.cos((y + 10) * 0.1 + t * 0.25), 10) * y * 0.25;
            let yy = y + Math.pow(Math.sin((x - 6) * 0.1 + -t * 0.25), 10) * y * 0.5;
            xx += Math.random() * 0.01;
            yy += Math.random() * 0.01;
            xx *= 0.95;
            this.vertices.push(xx * 0.075 - 1.2115, (yy + -10) * 0.07 - 1.32); // good
        }
    }
};


blendyCavern.display = function(alpha) {

    var vb = map(cos(frameCount * 0.01), -1, 1, 0, 0.75);

    let oneTextureProgram = getProgram("one-texture-program");
    var textureShader = getProgram("textu");
    let processProgram = getProgram("process");
    let blenderProgram = getProgram("blender-program");

    // We start by drawing the whole image on the first texture, "texture"
    // gl.clear(gl.COLOR_BUFFER_BIT);
    // We bind the framebuffer...
    bindFrameBuffer(texture, framebuf);
    gl.viewport(0, 0, cnvs.width, cnvs.height);


    // if (drawCount >= 5) {
    currentProgram = getProgram("blue-background");
    gl.useProgram(currentProgram);
    // gl.uniform1f(time, (drawCount + 4700) * 0.00125);
    gl.uniform1f(time, (drawCount + 700) * 0.00125);
    drawBG(currentProgram);
    // }

    currentProgram = getProgram("cyan-dots");
    gl.useProgram(currentProgram);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, dotsVBuf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
    gl.vertexAttribPointer(coord, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coord);
    gl.drawArrays(gl.POINTS, 0, this.vertices.length * 0.5);

    // Here, the whole image has been drawn on the "texture" texture.



    // currentProgram = getProgram("cyan-dots-3");
    // gl.useProgram(currentProgram);
    // gl.bindBuffer(gl.ARRAY_BUFFER, null);
    // gl.bindBuffer(gl.ARRAY_BUFFER, dotsVBuf);
    // gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.verticesB), gl.STATIC_DRAW);
    // gl.vertexAttribPointer(coord, 2, gl.FLOAT, false, 0, 0);
    // gl.enableVertexAttribArray(coord);
    // gl.drawArrays(gl.POINTS, 0, this.verticesB.length * 0.5);







    // Here, the original image should be redrawn
    // from "texture" to "texture3"



    currentProgram = oneTextureProgram;
    // unbind the buffer and draw the resulting texture....
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    bindFrameBuffer(texture3, framebuf3);
    gl.viewport(0, 0, cnvs.width, cnvs.height);

    gl.bindTexture(gl.TEXTURE_2D, texture);

    // gl.clearColor(0.5, 0.5, 0.5, 1); // clear to white

    // gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);


    gl.useProgram(currentProgram);

    let aspect = cnvs.width / cnvs.height;
    let vertices = new Float32Array([-1, 1, 1, 1, 1, -1, // Triangle 1
        -1, 1, 1, -1, -1, -1 // Triangle 2
    ]);
    // let vbuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    let itemSize = 2;
    let numItems = vertices.length / itemSize;
    textureShader.aVertexPosition = gl.getAttribLocation(currentProgram, "a_position");
    gl.enableVertexAttribArray(currentProgram.aVertexPosition);
    gl.vertexAttribPointer(currentProgram.aVertexPosition, itemSize, gl.FLOAT, false, 0, 0);

    var textureLocation = gl.getUniformLocation(currentProgram, "u_texture");
    gl.uniform1i(textureLocation, 0);
    var timeLocation = gl.getUniformLocation(currentProgram, "time");
    gl.uniform1f(timeLocation, drawCount * 0.01);
    var alphaLocation = gl.getUniformLocation(currentProgram, "alpha");
    gl.uniform1f(alphaLocation, 1);

    var texcoordLocation = gl.getAttribLocation(currentProgram, "a_texcoord");
    gl.enableVertexAttribArray(texcoordLocation);
    gl.vertexAttribPointer(texcoordLocation, 2, gl.FLOAT, false, 0, 0);

    gl.drawArrays(gl.TRIANGLES, 0, numItems);


    // Here, there should be a copy of texture drawn to texture3

















    // console.log(processProgram);
    gl.useProgram(processProgram);



    // let aspect = cnvs.width / cnvs.height;
    // let vertices = new Float32Array([-1, 1, 1, 1, 1, -1, // Triangle 1
    //     -1, 1, 1, -1, -1, -1 // Triangle 2
    // ]);
    // let vbuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    // let itemSize = 2;
    // let numItems = vertices.length / itemSize;
    processProgram.aVertexPosition = gl.getAttribLocation(processProgram, "a_position");
    gl.enableVertexAttribArray(processProgram.aVertexPosition);
    gl.vertexAttribPointer(processProgram.aVertexPosition, itemSize, gl.FLOAT, false, 0, 0);




    var resolutionLocation = gl.getUniformLocation(processProgram, "u_resolution");
    var textureSizeLocation = gl.getUniformLocation(processProgram, "u_textureSize");
    var kernelLocation = gl.getUniformLocation(processProgram, "u_kernel[0]");
    var kernelWeightLocation = gl.getUniformLocation(processProgram, "u_kernelWeight");
    var flipYLocation = gl.getUniformLocation(processProgram, "u_flipY");

    var directionLocation = gl.getUniformLocation(processProgram, "direction");

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    bindFrameBuffer(texture2, framebuf2);
    gl.viewport(0, 0, cnvs.width, cnvs.height);
    gl.bindTexture(gl.TEXTURE_2D, texture);




    let name = "myBlur";
    gl.uniform2f(resolutionLocation, cnvs.width, cnvs.height);
    gl.uniform2f(textureSizeLocation, cnvs.width, cnvs.height);
    gl.uniform2f(directionLocation, 8 * vb, 0);
    gl.uniform1f(flipYLocation, 1);
    gl.uniform1fv(kernelLocation, kernels[name]);
    gl.uniform1f(kernelWeightLocation, computeKernelWeight(kernels[name]));



    // shader.uniforms.direction = i % 2 === 0 ? [radius, 0] : [0, radius]



    var textureLocation = gl.getUniformLocation(processProgram, "u_texture");
    gl.uniform1i(textureLocation, 0);
    var texcoordLocation = gl.getAttribLocation(processProgram, "a_texcoord");
    gl.enableVertexAttribArray(texcoordLocation);

    // Tell the position attribute how to get data out of positionBuffer (ARRAY_BUFFER)
    gl.vertexAttribPointer(texcoordLocation, 2, gl.FLOAT, false, 0, 0);




    // Draw the rectangle.
    gl.drawArrays(gl.TRIANGLES, 0, 6);



    gl.uniform2f(directionLocation, 0, 7 * vb);

    bindFrameBuffer(texture, framebuf);
    gl.bindTexture(gl.TEXTURE_2D, texture2);
    gl.drawArrays(gl.TRIANGLES, 0, 6);


    gl.uniform2f(directionLocation, 6 * vb, 0);

    bindFrameBuffer(texture2, framebuf2);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.drawArrays(gl.TRIANGLES, 0, 6);


    gl.uniform2f(directionLocation, 0, 5 * vb);
    bindFrameBuffer(texture, framebuf);
    gl.bindTexture(gl.TEXTURE_2D, texture2);
    gl.drawArrays(gl.TRIANGLES, 0, 6);


    gl.uniform2f(directionLocation, 4 * vb, 0);
    bindFrameBuffer(texture2, framebuf2);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    gl.uniform2f(directionLocation, 0, 3 * vb);

    bindFrameBuffer(texture, framebuf);
    gl.bindTexture(gl.TEXTURE_2D, texture2);
    gl.drawArrays(gl.TRIANGLES, 0, 6);


    gl.uniform2f(directionLocation, 2 * vb, 0);

    bindFrameBuffer(texture2, framebuf2);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    gl.uniform2f(directionLocation, 0, 1 * vb);

    bindFrameBuffer(texture, framebuf);
    gl.bindTexture(gl.TEXTURE_2D, texture2);
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    gl.uniform2f(directionLocation, 1 * vb, 0);

    bindFrameBuffer(texture2, framebuf2);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.drawArrays(gl.TRIANGLES, 0, 6);



    // ----------- Redraw the dots on top of themselves ------------------------------------


    // currentProgram = getProgram("cyan-dots");
    // gl.useProgram(currentProgram);
    // gl.bindBuffer(gl.ARRAY_BUFFER, null);
    // gl.bindBuffer(gl.ARRAY_BUFFER, dotsVBuf);
    // gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
    // gl.vertexAttribPointer(coord, 2, gl.FLOAT, false, 0, 0);
    // gl.enableVertexAttribArray(coord);
    // gl.drawArrays(gl.POINTS, 0, this.vertices.length * 0.5);



    // currentProgram = getProgram("cyan-dots-3");
    // gl.useProgram(currentProgram);
    // gl.bindBuffer(gl.ARRAY_BUFFER, null);
    // gl.bindBuffer(gl.ARRAY_BUFFER, dotsVBuf);
    // gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.verticesB), gl.STATIC_DRAW);
    // gl.vertexAttribPointer(coord, 2, gl.FLOAT, false, 0, 0);
    // gl.enableVertexAttribArray(coord);
    // gl.drawArrays(gl.POINTS, 0, this.verticesB.length * 0.5);




    // ------------------------------------------------------------------------------------


    // unbind the buffer and draw the resulting texture....
    currentProgram = blenderProgram;
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    bindFrameBuffer(texture4, framebuf4);
    gl.viewport(0, 0, cnvs.width, cnvs.height);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture3);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, texture);

    gl.useProgram(currentProgram);

    currentProgram.aVertexPosition = gl.getAttribLocation(currentProgram, "a_position");
    gl.enableVertexAttribArray(currentProgram.aVertexPosition);
    gl.vertexAttribPointer(currentProgram.aVertexPosition, itemSize, gl.FLOAT, false, 0, 0);

    textureLocation = gl.getUniformLocation(currentProgram, "u_texture");
    gl.uniform1i(textureLocation, 0);
    var textureLocation2 = gl.getUniformLocation(currentProgram, "u_texture2");
    gl.uniform1i(textureLocation2, 1);
    timeLocation = gl.getUniformLocation(currentProgram, "time");
    gl.uniform1f(timeLocation, drawCount * 0.01);

    texcoordLocation = gl.getAttribLocation(currentProgram, "a_texcoord");
    gl.enableVertexAttribArray(texcoordLocation);
    gl.vertexAttribPointer(texcoordLocation, 2, gl.FLOAT, false, 0, 0);

    gl.drawArrays(gl.TRIANGLES, 0, numItems);









    // ------------------------------------------------------------------------------------


    // unbind the buffer and draw the resulting texture....
    currentProgram = oneTextureProgram;
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, cnvs.width, cnvs.height);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture4);
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




overture.display = function(alpha) {

    var vb = map(cos(frameCount * 0.01), -1, 1, 0, 0.75);

    let oneTextureProgram = getProgram("one-texture-program");
    var textureShader = getProgram("textu");
    let processProgram = getProgram("process");
    let blenderProgram = getProgram("blender-program");

    // We start by drawing the whole image on the first texture, "texture"
    // gl.clear(gl.COLOR_BUFFER_BIT);
    // We bind the framebuffer...
    bindFrameBuffer(texture, framebuf);
    gl.viewport(0, 0, cnvs.width, cnvs.height);


    // if (drawCount >= 5) {
    currentProgram = getProgram("blue-background");
    gl.useProgram(currentProgram);
    gl.uniform1f(time, (drawCount + 700) * 0.00125);
    drawBG(currentProgram);
    // }
    if (titledLoaded) {
        drawImage(withImage);

    }
    currentProgram = getProgram("cyan-dots");
    gl.useProgram(currentProgram);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, dotsVBuf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
    gl.vertexAttribPointer(coord, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coord);
    gl.drawArrays(gl.POINTS, 0, this.vertices.length * 0.5);

    // Here, the whole image has been drawn on the "texture" texture.



    // currentProgram = getProgram("cyan-dots-3");
    // gl.useProgram(currentProgram);
    // gl.bindBuffer(gl.ARRAY_BUFFER, null);
    // gl.bindBuffer(gl.ARRAY_BUFFER, dotsVBuf);
    // gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.verticesB), gl.STATIC_DRAW);
    // gl.vertexAttribPointer(coord, 2, gl.FLOAT, false, 0, 0);
    // gl.enableVertexAttribArray(coord);
    // gl.drawArrays(gl.POINTS, 0, this.verticesB.length * 0.5);







    // Here, the original image should be redrawn
    // from "texture" to "texture3"



    currentProgram = oneTextureProgram;
    // unbind the buffer and draw the resulting texture....
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    bindFrameBuffer(texture3, framebuf3);
    gl.viewport(0, 0, cnvs.width, cnvs.height);

    gl.bindTexture(gl.TEXTURE_2D, texture);

    // gl.clearColor(0.5, 0.5, 0.5, 1); // clear to white

    // gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);


    gl.useProgram(currentProgram);

    let aspect = cnvs.width / cnvs.height;
    let vertices = new Float32Array([-1, 1, 1, 1, 1, -1, // Triangle 1
        -1, 1, 1, -1, -1, -1 // Triangle 2
    ]);
    // let vbuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    let itemSize = 2;
    let numItems = vertices.length / itemSize;
    textureShader.aVertexPosition = gl.getAttribLocation(currentProgram, "a_position");
    gl.enableVertexAttribArray(currentProgram.aVertexPosition);
    gl.vertexAttribPointer(currentProgram.aVertexPosition, itemSize, gl.FLOAT, false, 0, 0);

    var textureLocation = gl.getUniformLocation(currentProgram, "u_texture");
    gl.uniform1i(textureLocation, 0);
    var timeLocation = gl.getUniformLocation(currentProgram, "time");
    gl.uniform1f(timeLocation, drawCount * 0.01);
    var alphaLocation = gl.getUniformLocation(currentProgram, "alpha");
    gl.uniform1f(alphaLocation, 1);

    var texcoordLocation = gl.getAttribLocation(currentProgram, "a_texcoord");
    gl.enableVertexAttribArray(texcoordLocation);
    gl.vertexAttribPointer(texcoordLocation, 2, gl.FLOAT, false, 0, 0);

    gl.drawArrays(gl.TRIANGLES, 0, numItems);


    // Here, there should be a copy of texture drawn to texture3

















    // console.log(processProgram);
    gl.useProgram(processProgram);



    // let aspect = cnvs.width / cnvs.height;
    // let vertices = new Float32Array([-1, 1, 1, 1, 1, -1, // Triangle 1
    //     -1, 1, 1, -1, -1, -1 // Triangle 2
    // ]);
    // let vbuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    // let itemSize = 2;
    // let numItems = vertices.length / itemSize;
    processProgram.aVertexPosition = gl.getAttribLocation(processProgram, "a_position");
    gl.enableVertexAttribArray(processProgram.aVertexPosition);
    gl.vertexAttribPointer(processProgram.aVertexPosition, itemSize, gl.FLOAT, false, 0, 0);




    var resolutionLocation = gl.getUniformLocation(processProgram, "u_resolution");
    var textureSizeLocation = gl.getUniformLocation(processProgram, "u_textureSize");
    var kernelLocation = gl.getUniformLocation(processProgram, "u_kernel[0]");
    var kernelWeightLocation = gl.getUniformLocation(processProgram, "u_kernelWeight");
    var flipYLocation = gl.getUniformLocation(processProgram, "u_flipY");

    var directionLocation = gl.getUniformLocation(processProgram, "direction");

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    bindFrameBuffer(texture2, framebuf2);
    gl.viewport(0, 0, cnvs.width, cnvs.height);
    gl.bindTexture(gl.TEXTURE_2D, texture);




    let name = "myBlur";
    gl.uniform2f(resolutionLocation, cnvs.width, cnvs.height);
    gl.uniform2f(textureSizeLocation, cnvs.width, cnvs.height);
    gl.uniform2f(directionLocation, 8 * vb, 0);
    gl.uniform1f(flipYLocation, 1);
    gl.uniform1fv(kernelLocation, kernels[name]);
    gl.uniform1f(kernelWeightLocation, computeKernelWeight(kernels[name]));



    // shader.uniforms.direction = i % 2 === 0 ? [radius, 0] : [0, radius]



    var textureLocation = gl.getUniformLocation(processProgram, "u_texture");
    gl.uniform1i(textureLocation, 0);
    var texcoordLocation = gl.getAttribLocation(processProgram, "a_texcoord");
    gl.enableVertexAttribArray(texcoordLocation);

    // Tell the position attribute how to get data out of positionBuffer (ARRAY_BUFFER)
    gl.vertexAttribPointer(texcoordLocation, 2, gl.FLOAT, false, 0, 0);




    // Draw the rectangle.
    gl.drawArrays(gl.TRIANGLES, 0, 6);



    gl.uniform2f(directionLocation, 0, 7 * vb);

    bindFrameBuffer(texture, framebuf);
    gl.bindTexture(gl.TEXTURE_2D, texture2);
    gl.drawArrays(gl.TRIANGLES, 0, 6);


    gl.uniform2f(directionLocation, 6 * vb, 0);

    bindFrameBuffer(texture2, framebuf2);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.drawArrays(gl.TRIANGLES, 0, 6);


    gl.uniform2f(directionLocation, 0, 5 * vb);
    bindFrameBuffer(texture, framebuf);
    gl.bindTexture(gl.TEXTURE_2D, texture2);
    gl.drawArrays(gl.TRIANGLES, 0, 6);


    gl.uniform2f(directionLocation, 4 * vb, 0);
    bindFrameBuffer(texture2, framebuf2);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    gl.uniform2f(directionLocation, 0, 3 * vb);

    bindFrameBuffer(texture, framebuf);
    gl.bindTexture(gl.TEXTURE_2D, texture2);
    gl.drawArrays(gl.TRIANGLES, 0, 6);


    gl.uniform2f(directionLocation, 2 * vb, 0);

    bindFrameBuffer(texture2, framebuf2);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    gl.uniform2f(directionLocation, 0, 1 * vb);

    bindFrameBuffer(texture, framebuf);
    gl.bindTexture(gl.TEXTURE_2D, texture2);
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    gl.uniform2f(directionLocation, 1 * vb, 0);

    bindFrameBuffer(texture2, framebuf2);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.drawArrays(gl.TRIANGLES, 0, 6);



    // ----------- Redraw the dots on top of themselves ------------------------------------


    // currentProgram = getProgram("cyan-dots");
    // gl.useProgram(currentProgram);
    // gl.bindBuffer(gl.ARRAY_BUFFER, null);
    // gl.bindBuffer(gl.ARRAY_BUFFER, dotsVBuf);
    // gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
    // gl.vertexAttribPointer(coord, 2, gl.FLOAT, false, 0, 0);
    // gl.enableVertexAttribArray(coord);
    // gl.drawArrays(gl.POINTS, 0, this.vertices.length * 0.5);



    // currentProgram = getProgram("cyan-dots-3");
    // gl.useProgram(currentProgram);
    // gl.bindBuffer(gl.ARRAY_BUFFER, null);
    // gl.bindBuffer(gl.ARRAY_BUFFER, dotsVBuf);
    // gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.verticesB), gl.STATIC_DRAW);
    // gl.vertexAttribPointer(coord, 2, gl.FLOAT, false, 0, 0);
    // gl.enableVertexAttribArray(coord);
    // gl.drawArrays(gl.POINTS, 0, this.verticesB.length * 0.5);




    // ------------------------------------------------------------------------------------


    // unbind the buffer and draw the resulting texture....
    currentProgram = blenderProgram;
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    bindFrameBuffer(texture4, framebuf4);
    gl.viewport(0, 0, cnvs.width, cnvs.height);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture3);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, texture);

    gl.useProgram(currentProgram);

    currentProgram.aVertexPosition = gl.getAttribLocation(currentProgram, "a_position");
    gl.enableVertexAttribArray(currentProgram.aVertexPosition);
    gl.vertexAttribPointer(currentProgram.aVertexPosition, itemSize, gl.FLOAT, false, 0, 0);

    textureLocation = gl.getUniformLocation(currentProgram, "u_texture");
    gl.uniform1i(textureLocation, 0);
    var textureLocation2 = gl.getUniformLocation(currentProgram, "u_texture2");
    gl.uniform1i(textureLocation2, 1);
    timeLocation = gl.getUniformLocation(currentProgram, "time");
    gl.uniform1f(timeLocation, drawCount * 0.01);

    texcoordLocation = gl.getAttribLocation(currentProgram, "a_texcoord");
    gl.enableVertexAttribArray(texcoordLocation);
    gl.vertexAttribPointer(texcoordLocation, 2, gl.FLOAT, false, 0, 0);

    gl.drawArrays(gl.TRIANGLES, 0, numItems);









    // ------------------------------------------------------------------------------------


    // unbind the buffer and draw the resulting texture....
    currentProgram = oneTextureProgram;
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, cnvs.width, cnvs.height);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture4);
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

traffic3FadeIn.display = blendyCavern.display;
pillarsInACavern.display = blendyCavern.display;
curvierPillars.display = blendyCavern.display;
curvierPillarsEvenSmaller.display = blendyCavern.display;
muscleFibersRebuildingThemselves.display = blendyCavern.display;
harmoniousEggs2.display = blendyCavern.display;



noodlesHorizontal.displayExperimental = function(alpha) {
    // We start by drawing the whole image on the first texture, "texture"
    let oneTextureProgram = getProgram("one-texture-program");
    let mistyProgram = getProgram("misty-program");
    // gl.clear(gl.COLOR_BUFFER_BIT);
    // We bind the framebuffer...
    bindFrameBuffer(texture, framebuf);
    gl.viewport(0, 0, cnvs.width, cnvs.height);
    // gl.clear(gl.COLOR_BUFFER_BIT);
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





    // unbind the buffer and draw the resulting texture....

    let vertices = new Float32Array([-1, 1, 1, 1, 1, -1, // Triangle 1
        -1, 1, 1, -1, -1, -1 // Triangle 2
    ]);
    let itemSize = 2;
    let numItems = vertices.length / itemSize;
    // let vbuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    currentProgram = mistyProgram;
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

bigTravelInABrokenLand.display = function(alpha) {
    // We start by drawing the whole image on the first texture, "texture"
    let oneTextureProgram = getProgram("one-texture-program");
    let foggyProgram = getProgram("foggy-program");
    // gl.clear(gl.COLOR_BUFFER_BIT);
    // We bind the framebuffer...
    bindFrameBuffer(texture, framebuf);
    gl.viewport(0, 0, cnvs.width, cnvs.height);
    // gl.clear(gl.COLOR_BUFFER_BIT);
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
    // 
    // 
    // unbind the buffer and draw the resulting texture....
    // 
    let vertices = new Float32Array([-1, 1, 1, 1, 1, -1, // Triangle 1
        -1, 1, 1, -1, -1, -1 // Triangle 2
    ]);
    let itemSize = 2;
    let numItems = vertices.length / itemSize;
    // let vbuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    // 
    currentProgram = foggyProgram;
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, cnvs.width, cnvs.height);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.useProgram(currentProgram);
    // 
    currentProgram.aVertexPosition = gl.getAttribLocation(currentProgram, "a_position");
    gl.enableVertexAttribArray(currentProgram.aVertexPosition);
    gl.vertexAttribPointer(currentProgram.aVertexPosition, itemSize, gl.FLOAT, false, 0, 0);
    // 
    textureLocation = gl.getUniformLocation(currentProgram, "u_texture");
    gl.uniform1i(textureLocation, 0);
    timeLocation = gl.getUniformLocation(currentProgram, "time");
    gl.uniform1f(timeLocation, drawCount * 0.01);
    alphaLocation = gl.getUniformLocation(currentProgram, "alpha");
    gl.uniform1f(alphaLocation, alpha);
    // 
    texcoordLocation = gl.getAttribLocation(currentProgram, "a_texcoord");
    gl.enableVertexAttribArray(texcoordLocation);
    gl.vertexAttribPointer(texcoordLocation, 2, gl.FLOAT, false, 0, 0);
    gl.drawArrays(gl.TRIANGLES, 0, numItems);
};

bigTravelInABrokenLand.display = function(alpha) {
    // We start by drawing the whole image on the first texture, "texture"
    let oneTextureProgram = getProgram("one-texture-program");
    let mistyProgram2 = getProgram("misty-program-2");
    // gl.clear(gl.COLOR_BUFFER_BIT);
    // We bind the framebuffer...
    bindFrameBuffer(texture, framebuf);
    gl.viewport(0, 0, cnvs.width, cnvs.height);
    // gl.clear(gl.COLOR_BUFFER_BIT);
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
    // 
    // 
    // unbind the buffer and draw the resulting texture....
    // 
    let vertices = new Float32Array([-1, 1, 1, 1, 1, -1, // Triangle 1
        -1, 1, 1, -1, -1, -1 // Triangle 2
    ]);
    let itemSize = 2;
    let numItems = vertices.length / itemSize;
    // let vbuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    // 
    currentProgram = mistyProgram2;
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, cnvs.width, cnvs.height);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.useProgram(currentProgram);
    // 
    currentProgram.aVertexPosition = gl.getAttribLocation(currentProgram, "a_position");
    gl.enableVertexAttribArray(currentProgram.aVertexPosition);
    gl.vertexAttribPointer(currentProgram.aVertexPosition, itemSize, gl.FLOAT, false, 0, 0);
    // 
    textureLocation = gl.getUniformLocation(currentProgram, "u_texture");
    gl.uniform1i(textureLocation, 0);
    timeLocation = gl.getUniformLocation(currentProgram, "time");
    gl.uniform1f(timeLocation, drawCount * 0.01);
    alphaLocation = gl.getUniformLocation(currentProgram, "alpha");
    gl.uniform1f(alphaLocation, alpha);
    // 
    texcoordLocation = gl.getAttribLocation(currentProgram, "a_texcoord");
    gl.enableVertexAttribArray(texcoordLocation);
    gl.vertexAttribPointer(texcoordLocation, 2, gl.FLOAT, false, 0, 0);
    gl.drawArrays(gl.TRIANGLES, 0, numItems);
};


middleOfTheMuscularDistanceField.display = function(alpha) {

    var vb = map(cos(frameCount * 0.01), -1, 1, 0, 0.75);

    let oneTextureProgram = getProgram("one-texture-program");
    var textureShader = getProgram("textu");
    let processProgram = getProgram("process");
    let blenderProgram = getProgram("blender-program");
    let mistyProgram2 = getProgram("misty-program-2");

    // We start by drawing the whole image on the first texture, "texture"
    // gl.clear(gl.COLOR_BUFFER_BIT);
    // We bind the framebuffer...
    bindFrameBuffer(texture, framebuf);
    gl.viewport(0, 0, cnvs.width, cnvs.height);


    // if (drawCount >= 5) {
    currentProgram = getProgram("blue-background");
    gl.useProgram(currentProgram);
    // gl.uniform1f(time, (drawCount + 4700) * 0.00125);
    gl.uniform1f(time, (drawCount + 700) * 0.00125);
    drawBG(currentProgram);
    // }

    currentProgram = getProgram("cyan-dots");
    gl.useProgram(currentProgram);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, dotsVBuf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
    gl.vertexAttribPointer(coord, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coord);
    gl.drawArrays(gl.POINTS, 0, this.vertices.length * 0.5);

    // Here, the whole image has been drawn on the "texture" texture.



    // currentProgram = getProgram("cyan-dots-3");
    // gl.useProgram(currentProgram);
    // gl.bindBuffer(gl.ARRAY_BUFFER, null);
    // gl.bindBuffer(gl.ARRAY_BUFFER, dotsVBuf);
    // gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.verticesB), gl.STATIC_DRAW);
    // gl.vertexAttribPointer(coord, 2, gl.FLOAT, false, 0, 0);
    // gl.enableVertexAttribArray(coord);
    // gl.drawArrays(gl.POINTS, 0, this.verticesB.length * 0.5);







    // Here, the original image should be redrawn
    // from "texture" to "texture3"



    currentProgram = oneTextureProgram;
    // unbind the buffer and draw the resulting texture....
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    bindFrameBuffer(texture3, framebuf3);
    gl.viewport(0, 0, cnvs.width, cnvs.height);

    gl.bindTexture(gl.TEXTURE_2D, texture);

    // gl.clearColor(0.5, 0.5, 0.5, 1); // clear to white

    // gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);


    gl.useProgram(currentProgram);

    let aspect = cnvs.width / cnvs.height;
    let vertices = new Float32Array([-1, 1, 1, 1, 1, -1, // Triangle 1
        -1, 1, 1, -1, -1, -1 // Triangle 2
    ]);
    // let vbuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    let itemSize = 2;
    let numItems = vertices.length / itemSize;
    textureShader.aVertexPosition = gl.getAttribLocation(currentProgram, "a_position");
    gl.enableVertexAttribArray(currentProgram.aVertexPosition);
    gl.vertexAttribPointer(currentProgram.aVertexPosition, itemSize, gl.FLOAT, false, 0, 0);

    var textureLocation = gl.getUniformLocation(currentProgram, "u_texture");
    gl.uniform1i(textureLocation, 0);
    var timeLocation = gl.getUniformLocation(currentProgram, "time");
    gl.uniform1f(timeLocation, drawCount * 0.01);
    var alphaLocation = gl.getUniformLocation(currentProgram, "alpha");
    gl.uniform1f(alphaLocation, 1);

    var texcoordLocation = gl.getAttribLocation(currentProgram, "a_texcoord");
    gl.enableVertexAttribArray(texcoordLocation);
    gl.vertexAttribPointer(texcoordLocation, 2, gl.FLOAT, false, 0, 0);

    gl.drawArrays(gl.TRIANGLES, 0, numItems);


    // Here, there should be a copy of texture drawn to texture3

















    // console.log(processProgram);
    gl.useProgram(processProgram);



    // let aspect = cnvs.width / cnvs.height;
    // let vertices = new Float32Array([-1, 1, 1, 1, 1, -1, // Triangle 1
    //     -1, 1, 1, -1, -1, -1 // Triangle 2
    // ]);
    // let vbuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    // let itemSize = 2;
    // let numItems = vertices.length / itemSize;
    processProgram.aVertexPosition = gl.getAttribLocation(processProgram, "a_position");
    gl.enableVertexAttribArray(processProgram.aVertexPosition);
    gl.vertexAttribPointer(processProgram.aVertexPosition, itemSize, gl.FLOAT, false, 0, 0);




    var resolutionLocation = gl.getUniformLocation(processProgram, "u_resolution");
    var textureSizeLocation = gl.getUniformLocation(processProgram, "u_textureSize");
    var kernelLocation = gl.getUniformLocation(processProgram, "u_kernel[0]");
    var kernelWeightLocation = gl.getUniformLocation(processProgram, "u_kernelWeight");
    var flipYLocation = gl.getUniformLocation(processProgram, "u_flipY");

    var directionLocation = gl.getUniformLocation(processProgram, "direction");

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    bindFrameBuffer(texture2, framebuf2);
    gl.viewport(0, 0, cnvs.width, cnvs.height);
    gl.bindTexture(gl.TEXTURE_2D, texture);




    let name = "myBlur";
    gl.uniform2f(resolutionLocation, cnvs.width, cnvs.height);
    gl.uniform2f(textureSizeLocation, cnvs.width, cnvs.height);
    gl.uniform2f(directionLocation, 8 * vb, 0);
    gl.uniform1f(flipYLocation, 1);
    gl.uniform1fv(kernelLocation, kernels[name]);
    gl.uniform1f(kernelWeightLocation, computeKernelWeight(kernels[name]));



    // shader.uniforms.direction = i % 2 === 0 ? [radius, 0] : [0, radius]



    var textureLocation = gl.getUniformLocation(processProgram, "u_texture");
    gl.uniform1i(textureLocation, 0);
    var texcoordLocation = gl.getAttribLocation(processProgram, "a_texcoord");
    gl.enableVertexAttribArray(texcoordLocation);

    // Tell the position attribute how to get data out of positionBuffer (ARRAY_BUFFER)
    gl.vertexAttribPointer(texcoordLocation, 2, gl.FLOAT, false, 0, 0);




    // Draw the rectangle.
    gl.drawArrays(gl.TRIANGLES, 0, 6);



    gl.uniform2f(directionLocation, 0, 7 * vb);

    bindFrameBuffer(texture, framebuf);
    gl.bindTexture(gl.TEXTURE_2D, texture2);
    gl.drawArrays(gl.TRIANGLES, 0, 6);


    gl.uniform2f(directionLocation, 6 * vb, 0);

    bindFrameBuffer(texture2, framebuf2);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.drawArrays(gl.TRIANGLES, 0, 6);


    gl.uniform2f(directionLocation, 0, 5 * vb);
    bindFrameBuffer(texture, framebuf);
    gl.bindTexture(gl.TEXTURE_2D, texture2);
    gl.drawArrays(gl.TRIANGLES, 0, 6);


    gl.uniform2f(directionLocation, 4 * vb, 0);
    bindFrameBuffer(texture2, framebuf2);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    gl.uniform2f(directionLocation, 0, 3 * vb);

    bindFrameBuffer(texture, framebuf);
    gl.bindTexture(gl.TEXTURE_2D, texture2);
    gl.drawArrays(gl.TRIANGLES, 0, 6);


    gl.uniform2f(directionLocation, 2 * vb, 0);

    bindFrameBuffer(texture2, framebuf2);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    gl.uniform2f(directionLocation, 0, 1 * vb);

    bindFrameBuffer(texture, framebuf);
    gl.bindTexture(gl.TEXTURE_2D, texture2);
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    gl.uniform2f(directionLocation, 1 * vb, 0);

    bindFrameBuffer(texture2, framebuf2);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.drawArrays(gl.TRIANGLES, 0, 6);



    // ----------- Redraw the dots on top of themselves ------------------------------------


    // currentProgram = getProgram("cyan-dots");
    // gl.useProgram(currentProgram);
    // gl.bindBuffer(gl.ARRAY_BUFFER, null);
    // gl.bindBuffer(gl.ARRAY_BUFFER, dotsVBuf);
    // gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
    // gl.vertexAttribPointer(coord, 2, gl.FLOAT, false, 0, 0);
    // gl.enableVertexAttribArray(coord);
    // gl.drawArrays(gl.POINTS, 0, this.vertices.length * 0.5);



    // currentProgram = getProgram("cyan-dots-3");
    // gl.useProgram(currentProgram);
    // gl.bindBuffer(gl.ARRAY_BUFFER, null);
    // gl.bindBuffer(gl.ARRAY_BUFFER, dotsVBuf);
    // gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.verticesB), gl.STATIC_DRAW);
    // gl.vertexAttribPointer(coord, 2, gl.FLOAT, false, 0, 0);
    // gl.enableVertexAttribArray(coord);
    // gl.drawArrays(gl.POINTS, 0, this.verticesB.length * 0.5);




    // ------------------------------------------------------------------------------------


    // unbind the buffer and draw the resulting texture....
    currentProgram = blenderProgram;
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    bindFrameBuffer(texture4, framebuf4);
    gl.viewport(0, 0, cnvs.width, cnvs.height);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture3);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, texture);

    gl.useProgram(currentProgram);

    currentProgram.aVertexPosition = gl.getAttribLocation(currentProgram, "a_position");
    gl.enableVertexAttribArray(currentProgram.aVertexPosition);
    gl.vertexAttribPointer(currentProgram.aVertexPosition, itemSize, gl.FLOAT, false, 0, 0);

    textureLocation = gl.getUniformLocation(currentProgram, "u_texture");
    gl.uniform1i(textureLocation, 0);
    var textureLocation2 = gl.getUniformLocation(currentProgram, "u_texture2");
    gl.uniform1i(textureLocation2, 1);
    timeLocation = gl.getUniformLocation(currentProgram, "time");
    gl.uniform1f(timeLocation, drawCount * 0.01);

    texcoordLocation = gl.getAttribLocation(currentProgram, "a_texcoord");
    gl.enableVertexAttribArray(texcoordLocation);
    gl.vertexAttribPointer(texcoordLocation, 2, gl.FLOAT, false, 0, 0);

    gl.drawArrays(gl.TRIANGLES, 0, numItems);









    // ------------------------------------------------------------------------------------


    // unbind the buffer and draw the resulting texture....
    currentProgram = mistyProgram2;
    // currentProgram = oneTextureProgram;
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, cnvs.width, cnvs.height);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture4);
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