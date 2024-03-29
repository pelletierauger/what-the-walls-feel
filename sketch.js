let looping = false;
let keysActive = true;
let socket, cnvs, ctx, canvasDOM;
let fileName = "/Volumes/Volumina/frames/wtwf/montage/test009/sketch";
let gl;
let shaderProgram;
let vertices = [];
let drawCount = 0;
let time, coord;
let vertex_buffer;
var drawingGeometry = true;
let dotsVBuf, bgVBuf;
let songPlay = true;
let repositionSong = false;
let montage = true;

var stop = false;
var fps, fpsInterval, startTime, now, then, elapsed;
var animationStart;
var framesRendered = 0;
var framesOfASecond = 0;
var secondStart, secondFrames;
var fps = 24;

let titledLoaded = false;

// initialize the timer variables and start the animation
var envirLooping = false;
let currentProgram;
let cinemaMode = false;

let resolutionScalar = 1;
let resolutionBG;
let resetAllDisplayMethods = false;

let texture, texture2, texture3, texture4, framebuf, framebuf2, framebuf3, framebuf4;

let vbuffer;

let timeline, timelineCtx, timelineIndex, timelineIndexCtx;

let xSheetDuration;
// let clipping = false;
let clipType = {
    type: "none"
};
let viewType = {
    type: "timeline"
};
let viewDur = 0;
let viewMin = 0;

function startAnimating() {
    fpsInterval = 1000 / fps;
    then = Date.now();
    animationStart = Date.now();
    secondStart = Date.now();
    startTime = then;
    envirLooping = true;
    animate();
}

function queryFrameRate() {
    let timeElapsed = Date.now() - animationStart;
    let seconds = timeElapsed / 1000;
    logJavaScriptConsole(framesRendered / seconds);
    // logJavaScriptConsole(timeElapsed);
}

// the animation loop calculates time elapsed since the last loop
// and only draws if your specified fps interval is achieved

function animate() {

    // request another frame
    if (envirLooping) {

        requestAnimationFrame(animate);


        // calc elapsed time since last loop

        now = Date.now();
        elapsed = now - then;

        // if enough time has elapsed, draw the next frame

        if (elapsed > fpsInterval) {

            // Get ready for next frame by setting then=now, but also adjust for your
            // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
            then = now - (elapsed % fpsInterval);
            // Put your drawing code here
            draw();
            framesRendered++;
            framesOfASecond++;
            if (framesOfASecond == fps) {
                secondFrames = fps / ((Date.now() - secondStart) * 0.001);
                // logJavaScriptConsole(secondFrames);
                framesOfASecond = 0;
                secondStart = Date.now();
            }
        }
    }
}

// function preload() {
//     // load the shader
//     // shaderProgram = loadShader('points.vert', 'points.frag');

// }

function setup() {
    // if (songPlay) {
    //     song = loadSound("wtwf.mp3", gotSong);
    // }
    socket = io.connect('http://localhost:8080');
    pixelDensity(1);
    noCanvas();
    // cnvs = createCanvas(windowWidth, windowWidth * 9 / 16, WEBGL);
    // cnvs = createCanvas(1280, 1280 * 9 / 16, WEBGL);
    cnvs = document.createElement('canvas');

    cnvs.id = "defaultCanvas0";
    cnvs.width = 2560 * resolutionScalar;
    cnvs.height = 1440 * resolutionScalar;
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(cnvs);
    canvasDOM = document.getElementById('defaultCanvas0');
    canvasDOM.onclick = function() {
        if (envirLooping) {
            if (montage && songPlay) {
                player.pause();
            }
            envirLooping = false;
        } else {
            envirLooping = true;
            if (montage && songPlay) {
                player.play();
            }
            startAnimating();
        }
    };

    gl = cnvs.getContext('webgl');

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
    gl.viewport(0, 0, cnvs.width, cnvs.height);
    createInfoDiv();
    setupInfoDiv();

    shadersReadyToInitiate = true;
    initializeShaders();
    time = gl.getUniformLocation(getProgram("blue-background"), "time");
    resolutionBG = gl.getUniformLocation(getProgram("blue-background"), "resolution");
    // Get the attribute location
    coord = gl.getAttribLocation(getProgram("cyan-dots"), "coordinates");

    // Hide the SuperCollider Editor because I will not need it for this project.
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
            autoRedraw = true;
            displayTimeline();
            xSheetInit = true;
        }
    }, 1000);
    if (!looping) {
        noLoop();
    }
    for (let i = 0; i < scenes.length; i++) {
        if (scenes[i].init) {
            // console.log("One scene is being initialized.");
            scenes[i].init();
        }
    }
    // player = document.querySelector('#wtwf .audioelement');
    // audioElement = document.createElement('audio');
    // audioElement.id = 'audio-player';
    // audioElement.controls = 'controls';
    // audioElement.src = 'wtwf.mp3';
    // audioElement.type = 'audio/mpeg';
    // var length = player.duration
    // var current_time = player.currentTime;

    texture = createTexture();
    framebuf = createFrameBuffer(texture);
    texture2 = createTexture();
    framebuf2 = createFrameBuffer(texture2);
    texture3 = createTexture();
    framebuf3 = createFrameBuffer(texture3);
    texture4 = createTexture();
    framebuf4 = createFrameBuffer(texture4);

    vbuffer = gl.createBuffer();
    let vertices = new Float32Array([-1, 1, 1, 1, 1, -1, // Triangle 1
        -1, 1, 1, -1, -1, -1 // Triangle 2
    ]);
    gl.bindBuffer(gl.ARRAY_BUFFER, vbuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    // Setting the two canvases for the visual timeline.
    timeline = document.getElementById('timeline');
    timelineCtx = timeline.getContext('2d');
    timelineIndex = document.getElementById('timeline-index');
    timelineIndexCtx = timelineIndex.getContext('2d');

    var list = Object.getOwnPropertyNames(xSheet);
    var totalDuration;
    var lastScene = xSheet[list[list.length - 2]];
    xSheetDuration = getSum(xSheet, lastScene) + lastScene.d;

    timelineIndex.addEventListener('click', function(event) {
        var x = event.pageX - timelineIndex.offsetLeft;
        // logJavaScriptConsole(x);
        drawCount = Math.floor(x / 685 * xSheetDuration);
        repositionSong = true;
        if (!looping) {
            redraw();
        }
    }, false);

    if (batchExport) {
        drawCount = batchMin;
        exporting = true;
        redraw();
        songPlay = false;
    }
    socket.on('getNextImage', function(data) {
        if (drawCount <= batchMax) {
            // redraw();
            window.setTimeout(function() {
                redraw();
            }, 3000);
        }
    });
}

// function gotSong() {
//     // song.rate(24 / 24);
//     logJavaScriptConsole("Song loaded.");
// }

draw = function() {
    runXSheet(xSheet);
    if (repositionSong && songPlay && (looping || envirLooping)) {
        if (drawCount <= player.duration * 24) {
            player.currentTime = drawCount / 24;
            if (player.paused) {
                player.play();
            }
            syncToAudio();
        } else {
            if (!player.paused) {
                player.pause();
            }
        }
        repositionSong = false;
    }
    sheetSlider.value(drawCount);
    var sceneBoundaries = getCurrentSceneBoundaries(xSheet);
    sliderInfo1.html(queryXSheet(xSheet) + ": " + drawCount + " " + sceneBoundaries);
    timelineIndexCtx.clearRect(0, 0, 1372, 100);
    if (viewType.type == "timeline") {
        timelineIndexCtx.fillRect(drawCount / xSheetDuration * 1372, 0, 1, 100);
    } else if (viewType.type == "sequence") {
        let norm = 1 / viewDur * 1372;
        timelineIndexCtx.fillRect((drawCount - viewMin) * norm, 0, 1, 100);
    }
    if (exporting) {
        frameExport();
    }
    if (clipping) {
        if (drawCount > clipMax) {
            drawCount = clipMin;
            repositionSong = true;
        } else if (drawCount < clipMin) {
            drawCount = clipMin;
            repositionSong = true;
        }
    }
    drawCount++;
}

// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
// }
// gl.clearColor(0.0, 0.0, 0.0, 1.0);

function keyPressed() {
    if (keysActive) {
        if (keyCode === 32) {
            togglePlay();
        }
        if (key == 'r' || key == 'R') {
            window.location.reload();
        }
        if (key == 'm' || key == 'M') {
            redraw();
        }
        if (key == 'n' || key == 'N') {
            drawCount -= 2;
            redraw();
        }
        if (key == 'p' || key == 'P') {
            frameExport();
        }
        if (key == 'q' || key == 'Q') {
            if (clipping) {
                drawCount = clipMin;
            } else {
                drawCount = 0;
            }
            repositionSong = true;
        }
        if (key == '1') {
            if (!cinemaMode) {
                appControl.setAttribute("style", "display:none;");
                let tabs = document.querySelector("#file-tabs");
                tabs.setAttribute("style", "display:none;");
                let slider = document.querySelector("#timeline-slider");
                // slider.setAttribute("style", "display:none;");
                slider.style.display = "none";
                // canvasDOM.style.bottom = "0";
                cinemaMode = true;
                scdArea.style.display = "none";
                scdConsoleArea.style.display = "none";
                jsArea.style.display = "none";
                jsConsoleArea.style.display = "none";
                // hidden = true;
            } else {
                appControl.setAttribute("style", "display:block;");
                let tabs = document.querySelector("#file-tabs");
                tabs.setAttribute("style", "display:block;");
                let slider = document.querySelector("#timeline-slider");
                // slider.setAttribute("style", "display:block;");
                slider.style.display = "block";
                // canvasDOM.style.bottom = null;
                if (displayMode === "both") {
                    scdArea.style.display = "block";
                    scdConsoleArea.style.display = "block";
                    jsArea.style.display = "block";
                    jsConsoleArea.style.display = "block";
                } else if (displayMode == "scd") {
                    scdArea.style.display = "block";
                    scdConsoleArea.style.display = "block";
                } else if (displayMode == "js") {
                    jsArea.style.display = "block";
                    jsConsoleArea.style.display = "block";
                }
                cinemaMode = false;
            }
        }
        // if (keyCode == "ESCAPE") {
        //     if (looping) {
        //         noLoop();
        //         looping = false;
        //     } else {
        //         loop();
        //         looping = true;
        //     }
        // }
    }
}

document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
        // isEscape = (evt.key === "AltRight" || evt.key === "Alt");
    } else {
        // isEscape = (evt.keyCode === 27);
        // isEscape = (evt.keyCode === 18);
    }
    if (isEscape) {
        togglePlay();
    }
};

function togglePlay() {
    if (envirLooping) {
        // noLoop();
        if (montage && songPlay) {
            // logJavaScriptConsole("Does this not ?");
            player.pause();
        }
        envirLooping = false;
    } else {
        // loop();
        envirLooping = true;
        if (montage && songPlay && (drawCount <= player.duration * 24)) {
            // logJavaScriptConsole("This does ?");
            player.play();
            // song.jump(drawCount / 24);
            // song.rate(24 / 24);
        }
        startAnimating();
    }
}

let clipMin = 0,
    clipMax = 100,
    clipping = false;

function clip(min, max, type) {
    clipMin = min;
    clipMax = max;
    clipping = true;
    clipType = type;
}

function unClip() {
    clipping = false;
    updateView();
    clipType = {
        type: "none"
    };
}

function logLatency() {
    let seconds = (drawCount / 24) - player.currentTime;
    let frames = Math.floor(((drawCount / 24) - player.currentTime) * 24);
    let frameWord = (frames > 1) ? "frames" : "frame";
    logJavaScriptConsole(seconds + " seconds, or " + frames + " " + frameWord + ".");
}

function syncToAudio() {
    drawCount -= Math.floor(((drawCount / 24) - player.currentTime) * 24);
}

// function reval(i = 0) {
//     eval(jsLog[i]);
//     drawCount--;
//     redraw();
// }

// let revaluationToggle = true;

// function toggleReval(i = 0, j = 1) {
//     if (revaluationToggle) {
//         reval(i);
//     } else {
//         reval(j);
//     };
//     revaluationToggle = !revaluationToggle;
// }