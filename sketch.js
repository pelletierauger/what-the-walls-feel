let looping = true;
let keysActive = true;
let socket, cnvs, ctx, canvasDOM;
let fileName = "./frames/sketch";
// a shader variable
let gl;
let shaderProgram;
let vertices = [];
let drawCount = 0;
let drawIncrement = 0.00125;
drawIncrement = 1;
let time, coord;
let vertex_buffer;
var drawingGeometry = true;
let dotsVBuf, bgVBuf;

// function preload() {
//     // load the shader
//     shaderProgram = loadShader('points.vert', 'points.frag');
// }

function setup() {
    socket = io.connect('http://localhost:8080');
    // shaders require WEBGL mode to work
    pixelDensity(1);
    cnvs = createCanvas(windowWidth, windowWidth * 9 / 16, WEBGL);
    canvasDOM = document.getElementById('defaultCanvas0');
    gl = canvas.getContext('webgl');

    // gl.cbf = gl.getExtension('WEBGL_color_buffer_float') || gl.getExtension('EXT_color_buffer_float');
    // gl.tf = gl.getExtension('OES_texture_float');

    gl.enable(gl.BLEND);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

    // gl.blendFunc(gl.SRC_ALPHA, gl.DST_ALPHA);
    frameRate(30);
    noStroke();

    dotsVBuf = gl.createBuffer();
    bgVBuf = gl.createBuffer();
    // Create an empty buffer object to store the vertex buffer
    vertex_buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);

    // Set the view port
    gl.viewport(0, 0, canvas.width, canvas.height);
    createInfoDiv();
    setupInfoDiv();
    shadersReadyToInitiate = true;
    initializeShaders();
    time = gl.getUniformLocation(getProgram("blue-background"), "time");
    // Get the attribute location
    coord = gl.getAttribLocation(getProgram("cyan-dots"), "coordinates");

    // Hide the SuperCollider Editor because I will not need it
    // for this project.
    window.setTimeout(function() {
        if (!keysActive) {
            cmArea.style.width = "1200px";
            jsCmArea.style.width = "1200px";
            jsConsoleArea.setAttribute("style", "display:block;");
            scdArea.style.display = "none";
            scdConsoleArea.setAttribute("style", "display:none;");
            jsCmArea.style.height = "685px";
            jsArea.style.display = "block";
            displayMode = "js";
        }
    }, 1000);
}

draw = function() {
    gl.clear(gl.COLOR_BUFFER_BIT);
    let currentProgram = getProgram("blue-background");
    gl.useProgram(currentProgram);
    gl.uniform1f(time, drawCount * 0.00125);
    drawBG(currentProgram);

    currentProgram = getProgram("cyan-dots");
    gl.useProgram(currentProgram);
    drawDots(currentProgram);

    // runXSheet(xSheet);
    //     if (frameCount == 1) {
    // setDotsShaders();
    //     }
    //     setOverlayShaders();
    //     gl.uniform1f(time, drawCount);
    //     drawBG();sheetSlider.value(drawCount);
    // info1.html();
    sheetSlider.value(drawCount);
    sliderInfo1.html(queryXSheet(xSheet) + ": " + drawCount);
    drawCount += drawIncrement;
}

// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
// }
// gl.clearColor(0.0, 0.0, 0.0, 1.0);

function keyPressed() {
    if (keysActive) {
        if (keyCode === 32) {
            if (looping) {
                noLoop();
                looping = false;
            } else {
                loop();
                looping = true;
            }
        }
        if (key == 'r' || key == 'R') {
            window.location.reload();
        }
        if (key == 'm' || key == 'M') {
            redraw();
        }
        if (key == 'p' || key == 'P') {
            frameExport();
        }
    }
}