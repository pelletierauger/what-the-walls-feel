// function drawBG() {
//     let aspect = cnvs.width / cnvs.height;
//     let vertices = new Float32Array([-1, 1, 1, 1, 1, -1, // Triangle 1
//         -1, 1, 1, -1, -1, 1 // Triangle 2
//     ]);
//     let vbuffer = gl.createBuffer();
//     gl.bindBuffer(gl.ARRAY_BUFFER, vbuffer);
//     gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

//     let itemSize = 2;
//     let numItems = vertices.length / itemSize;

//     // gl.useProgram(shaderProgram);

//     // program.uColor = gl.getUniformLocation(program, "uColor");
//     // gl.uniform4fv(program.uColor, [0.0, 0.3, 0.0, 1.0]);

//     shaderProgram.aVertexPosition = gl.getAttribLocation(shaderProgram, "aPosition");
//     gl.enableVertexAttribArray(shaderProgram.aVertexPosition);
//     gl.vertexAttribPointer(shaderProgram.aVertexPosition, itemSize, gl.FLOAT, false, 0, 0);


//     gl.drawArrays(gl.TRIANGLES, 0, numItems);
// }


// logJavaScriptConsole(120 * 120);

grow = 1e-6;
drawDots = function(shaderProgram) {
    vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount + 10000000000) * 0.025 * 0.0001;
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
            let xx = x + (Math.pow(Math.sin(m * x * 100) * Math.sin(t * y * 1e3), 1));
            let yy = y + (Math.pow(Math.sin(m * y * 100) * Math.sin(t * x * 1e3), 1));
            //                         xx += cos(oy * 10) * sin(oy * 10);
            //             xx = lerp(x, xx, grow);
            xx *= 0.95;
            xx += 3.12;
            //             yy = lerp(y, yy, grow);
            //             yy += cos(oy * 10) * sin(oy * 10);
            if (i == 0) {
                oriX = xx;
            }
            vertices.push((xx - 0) * 0.05 * 1.0 - 1.2, yy * 0.05 * 1.0 - 1.2);
            i++;
        }
    }
    grow *= 1.01;
    // Create an empty buffer object to store the vertex buffer
    // var vertex_buffer = gl.createBuffer();
    //Bind appropriate array buffer to it
    // gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    // Pass the vertex data to the buffer
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    /*======== Associating shaders to buffer objects ========*/
    // Bind vertex buffer object
    gl.bindBuffer(gl.ARRAY_BUFFER, dotsVBuf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    // Point an attribute to the currently bound VBO
    gl.vertexAttribPointer(coord, 2, gl.FLOAT, false, 0, 0);
    // Enable the attribute
    gl.enableVertexAttribArray(coord);
    /*============= Drawing the primitive ===============*/
    // // Clear the canvas
    // gl.clearColor(0.5, 0.5, 0.5, 0.9);
    // Clear the color buffer bit
    // gl.clear(gl.COLOR_BUFFER_BIT);
    // Draw the triangle
    gl.drawArrays(gl.POINTS, 0, amountX * amountY);
}
// lo(grow);



drawDots = function(shaderProgram) {
    vertices = [];
    let amountX = 50;
    let amountY = 50;
    let inc = 1 / 25;
    let inc2 = inc / 2;
    let t = (drawCount) * 2e-5;
    for (let x = -1 + inc2; x <= 1 + inc2; x += inc) {
        for (let y = -1 + inc2; y <= 1 + inc2; y += inc) {
            let ix = x,
                iy = y;
//             ix += 1;
            let tt = Math.sin(t) * 50;
            let m = 4e3 + tt;
            let xx = x + (Math.pow(Math.sin(m * ix * 1e-5) * Math.sin(t * iy * 1e4), 1));
            let yy = y + (Math.pow(Math.sin(m * iy * 1e-5) * Math.sin(t * ix * 1e4), 1));
            vertices.push(xx * 1.25, yy * 1.1);
        }
    }
    // Create an empty buffer object to store the vertex buffer
    // var vertex_buffer = gl.createBuffer();
    //Bind appropriate array buffer to it
    // gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    // Pass the vertex data to the buffer
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    /*======== Associating shaders to buffer objects ========*/
    // Bind vertex buffer object
    gl.bindBuffer(gl.ARRAY_BUFFER, dotsVBuf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    // Point an attribute to the currently bound VBO
    gl.vertexAttribPointer(coord, 2, gl.FLOAT, false, 0, 0);
    // Enable the attribute
    gl.enableVertexAttribArray(coord);
    /*============= Drawing the primitive ===============*/
    // // Clear the canvas
    // gl.clearColor(0.5, 0.5, 0.5, 0.9);
    // Clear the color buffer bit
    // gl.clear(gl.COLOR_BUFFER_BIT);
    // Draw the triangle
    gl.drawArrays(gl.POINTS, 0, amountX * amountY);
}