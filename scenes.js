let concerto = new Scene("concerto");

concerto.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10000000000 - 400 + 539 - 200) * 0.025 * 0.0001;
    for (let x = amountX; x > 0; x -= 1) {
//     for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let nx = Math.cos(x * 4.1);
            let ny = Math.sin(y * 4.1);
            let tt = Math.sin(t * 0.125 * 0.0625) * 750;
            let m = 4e3 + tt;
            let xx = x - (Math.pow(Math.sin(m * x * 100) * Math.sin(t * y * 1e3), 1));
            let yy = y + (Math.pow(Math.sin(m * y * 100) * Math.sin(t * x * 1e3), 1));
//             xx *= 0.95;
//             xx += 3.12;
// //             this.vertices.push((xx - 0) * 0.05 * 1.0 - 1.3, yy * 0.05 * 1.0 - 1.3);
//             this.vertices.push((xx - 0) * 0.075 * 1.0 - 1.2, (yy + -10) * 0.07 * 1.0 - 1.3);
            xx += Math.random() * 0.01;
            yy += Math.random() * 0.01;
            xx *= 0.95;
            this.vertices.push(xx * 0.075 - 1.2115, (yy + -10) * 0.07 - 1.32); // good
//             if (x == amountX && y == 0) {
//                 logJavaScriptConsole("concerto : " + xx);
//             }
        }
    }
};

let fasterSubtleTrunk = new Scene("faster-subtle-trunk");

fasterSubtleTrunk.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum) * 0.025 * 0.5;
    for (let x = amountX; x > 0; x -= 1) {
        for (let y = 0; y < amountY; y += 1) {
            let dx = x + Math.max(Math.cos(x * 0.125 + t * -10), Math.sin(y + x * 0.25 + t * 0.5));
            let dy = y + Math.min(Math.sin(y * 0.125 + t * -10), Math.cos(x + x * 0.25 + t * 0.5));
            dx += Math.random() * 0.01;
            dy += Math.random() * 0.01;
            dx *= 0.95;
            this.vertices.push(dx * 0.075 - 1.2115, (dy + -10) * 0.07 - 1.32); // good
        }
    }
};

let newSubtleTrunk = new Scene("new-subtle-trunk");

newSubtleTrunk.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum) * 0.025 * 0.5;
    for (let x = amountX; x > 0; x -= 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + 9;
            let oy = y - 4;
            let dx = x + Math.max(Math.cos(ox * 0.125 + t * -10), Math.sin(oy * ox * 0.125 + t * 0.5));
            let dy = y + Math.min(Math.sin(oy * 0.125 + t * -10), Math.cos(ox * ox * 0.125 + t * 0.5)) * 0;
            dx += Math.random() * 0.01;
            dy += Math.random() * 0.01;
            dx *= 0.95;
            this.vertices.push(dx * 0.075 - 1.2115, (dy + -10) * 0.07 - 1.32); // good
        }
    }
};

if (1 == 0) {

newSubtleTrunk.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum) * 0.025 * 0.5;
    for (let x = amountX; x > 0; x -= 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + 9;
            let oy = y - 4;
            let dx = x + Math.max(Math.cos(ox * 0.125 + t * -10), Math.sin(oy * 0.25 + t * 0.5));
            let dy = y + Math.min(Math.sin(oy * 0.125 + t * -10), Math.cos(ox * 0.25 + t * 0.5));
            dx += Math.random() * 0.01;
            dy += Math.random() * 0.01;
            dx *= 0.95;
            this.vertices.push(dx * 0.075 - 1.2115, (dy + -10) * 0.07 - 1.32); // good
        }
    }
};

newSubtleTrunk.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum) * 0.025 * 0.35;
    for (let x = amountX; x > 0; x -= 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + 0;
            let oy = y - 0;
            let dx = x + Math.max(Math.cos(ox * 0.125 + t * -10), Math.sin(oy * 0.125 + t * 0.5));
            let dy = y + Math.min(Math.sin(oy * 0.125 + t * -10), Math.cos(ox * 0.125 + t * 0.5));
            dx += Math.random() * 0.01;
            dy += Math.random() * 0.01;
            dx *= 0.95;
            this.vertices.push(dx * 0.075 - 1.2115, (dy + -10) * 0.07 - 1.32); // good
        }
    }
};

}

let traffic3FadeIn = new Scene("traffic-3-fade-in");

traffic3FadeIn.update = function(sum) {
    this.vertices = [];
    let cutoff = 1000;
//     let growth = (drawCount - sum < cutoff) ? drawCount - sum : cutoff - ((drawCount - sum) - cutoff) * 1;
    let growth = (1 - ((Math.cos((drawCount - sum) / 1900 * Math.PI * 2) + 1) * 0.5)) * 1000;
//     logJavaScriptConsole(growth);
    this.grow = logMap(Math.min(growth, 1000));
//     this.grow = growth / 1000000;
//     logJavaScriptConsole(drawCount - sum);
//     if (drawCount % 24 == 0) {
        //         logJavaScriptConsole(this.grow);
//     }
    //     this.grow = Math.min(this.grow, 0.000252725879421447);
    //     logJavaScriptConsole(drawCount - sum);
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10) * 0.025 * 0.5;
//     for (let x = 0; x < amountX; x += 1) {
        for (let x = amountX; x > 0; x -= 1) {
        for (let y = 0; y < amountY; y += 1) {
//             let dx = Math.abs(Math.cos(x) * 0.01 - 25);
//             let dy = Math.abs(Math.sin(y) * 0.01 - 25);
            let xx = x + Math.pow(Math.cos(y * 0.5 + t * 0.025), 700) * y * (1 / -x) * 200.5;
            let yy = y + Math.pow(Math.sin((x + 10) * 0.5 + t * 0.025), 700) * y * x * 200.5;
            xx = lerp(x, xx, this.grow);
            yy = lerp(y, yy, this.grow);
            xx += Math.random() * 0.01;
            yy += Math.random() * 0.01;
            xx *= 0.95;
//             this.vertices.push((xx - 0) * 0.075 * 1.0 - 1.2, (yy + -10) * 0.07 * 1.0 - 1.3);
                this.vertices.push(xx * 0.075 - 1.2115, (yy + -10) * 0.07 - 1.32); // good
        }
    }
    // 
    function logMap(position) {
        // position will be between minp and maxp
        var minp = 0;
        var maxp = 1000;
        // The result should be between minv an maxv
        var minv = Math.log(1e-7);
        var maxv = Math.log(0.3852774978347468);
        // calculate adjustment factor
        var scale = (maxv - minv) / (maxp - minp);
        return Math.exp(minv + scale * (position - minp));
    }
};



let traffic3FadeInNoodles = new Scene("traffic-3-fade-in-noodles");

traffic3FadeInNoodles.update = function(sum) {
    this.vertices = [];
    this.grow = logMap(Math.min(drawCount - sum, 1000));
    if (drawCount % 24 == 0) {
        //         logJavaScriptConsole(this.grow);
    }
    //     this.grow = Math.min(this.grow, 0.000252725879421447);
    //     logJavaScriptConsole(drawCount - sum);
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10) * 0.025 * 0.5;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let dx = Math.abs(Math.cos(x) * 0.01 - 25);
            let dy = Math.abs(Math.sin(y) * 0.01 - 25);
            let xx = x + Math.pow(Math.cos(y * 0.5 + t * 0.025), 700) * y * x * 200.5;
            let yy = y + Math.pow(Math.sin((x + 10) * 0.5 + t * 0.025), 700) * y * x * 200.5;
            xx = lerp(x, xx, this.grow);
            yy = lerp(y, yy, this.grow);
            let ox = x - 25;
            let oy = y + 25;
            let dx2 = abs(cos(x) * 1) * 0.25;
            let dy2 = abs(sin(y) * 1) * 0.25;
            xx += pow(cos((dx2 * ox * oy * 0.01) + t * 2 * 2e-1), 200) * -5;
//             yy += pow(sin((dy2 * oy * ox * 0.01) + t * 2), 200) * -5;
            xx += Math.random() * 0.01;
            yy += Math.random() * 0.01;
            this.vertices.push((xx - 0) * 0.075 * 1.0 - 1.2, (yy + -10) * 0.07 * 1.0 - 1.3);
        }
    }
    // 
    function logMap(position) {
        // position will be between minp and maxp
        var minp = 0;
        var maxp = 1000;
        // The result should be between minv an maxv
        var minv = Math.log(1e-7);
        var maxv = Math.log(0.3852774978347468);
        // calculate adjustment factor
        var scale = (maxv - minv) / (maxp - minp);
        return Math.exp(minv + scale * (position - minp));
    }
};


let overture = new Scene("overture");

overture.update = function(sum) {
    this.vertices = [];
    this.dotsToDisplay = 0;
    this.grow = logMap(Math.min(0, 1500));
    let amountX = 50;
    let amountY = 50;
    let t = (0 + 10) * 0.025 * 0.5;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            if (y < 12 || y > 16) {
                let dx = Math.abs(Math.cos(x) * 0.01 - 25);
                let dy = Math.abs(Math.sin(y) * 0.01 - 25);
                let xx = x + Math.pow(Math.cos(y * 0.5 + t * 0.025), 700) * y * x * 200.5;
                let yy = y + Math.pow(Math.sin(x * 0.5 + t * 0.025), 700) * y * x * 200.5;
                xx = lerp(x, xx, this.grow);
                yy = lerp(y, yy, this.grow);
                xx += Math.random() * 0.01;
                yy += Math.random() * 0.01;
                this.vertices.push((xx - 0) * 0.075 * 1.0 - 1.2, (yy + -4) * 0.07 * 1.0 - 1.3);
                this.dotsToDisplay++;
            }
        }
    }
    // 
    function logMap(position) {
        // position will be between minp and maxp
        var minp = 0;
        var maxp = 1500;
        // The result should be between minv an maxv
        var minv = Math.log(1e-7);
        var maxv = Math.log(0.3852774978347468);
        // calculate adjustment factor
        var scale = (maxv - minv) / (maxp - minp);
        return Math.exp(minv + scale * (position - minp));
    }
};

overture.update = function(sum) {
    this.vertices = [];
    this.dotsToDisplay = 0;
    this.grow = logMap(Math.min(0, 1500));
    let amountX = 50;
    let amountY = 50;
    let t = (0 + 10) * 0.025 * 0.5;
//         for (let x = 0; x < amountX; x += 1) {
    
//                     for (let y = amountY; y > 0; y -= 1) {
    for (let x = amountX; x > 0; x -= 1) {
                for (let y = 0; y < amountY; y += 1) {
            if ((y < 18 || y > 30) || (x < 6 || x > 28)) {
                let dx = Math.abs(Math.cos(x) * 0.01 - 25);
                let dy = Math.abs(Math.sin(y) * 0.01 - 25);
                let xx = x + Math.pow(Math.cos(y * 0.5 + t * 0.025), 700) * y * x * 200.5;
                let yy = y + Math.pow(Math.sin(x * 0.5 + t * 0.025), 700) * y * x * 200.5;
                xx = lerp(x, xx, this.grow);
                yy = lerp(y, yy, this.grow);
                xx += Math.random() * 0.01;
                yy += Math.random() * 0.01;
                            xx *= 0.95;
                this.vertices.push(xx * 0.075 - 1.2115, (yy + -4) * 0.07 - 1.32);
                this.dotsToDisplay++;
            }
        }
    }
    // 
    function logMap(position) {
        // position will be between minp and maxp
        var minp = 0;
        var maxp = 1500;
        // The result should be between minv an maxv
        var minv = Math.log(1e-7);
        var maxv = Math.log(0.3852774978347468);
        // calculate adjustment factor
        var scale = (maxv - minv) / (maxp - minp);
        return Math.exp(minv + scale * (position - minp));
    }
};
// redraw();

overture.display = function() {
    gl.clear(gl.COLOR_BUFFER_BIT);
    if (drawCount >= 5) {
        currentProgram = getProgram("blue-background");
        gl.useProgram(currentProgram);
        gl.uniform1f(time, drawCount * 0.00125);
        drawBG(currentProgram);
    }
    currentProgram = getProgram("cyan-dots");
    gl.useProgram(currentProgram);
    if (titledLoaded) {
        drawImage(withImage);
        let currentProgram = getProgram("cyan-dots");
        gl.useProgram(currentProgram);
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, dotsVBuf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
    gl.vertexAttribPointer(coord, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coord);
    gl.drawArrays(gl.POINTS, 0, this.dotsToDisplay);
};


let traffic3Static = new Scene("traffic-3-static");

traffic3Static.update = function(sum) {
    this.vertices = [];
    this.grow = logMap(Math.min(0, 1500));
    //     logJavaScriptConsole(this.grow);
    let amountX = 50;
    let amountY = 50;
    let t = (0 + 10) * 0.025 * 0.5;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let dx = Math.abs(Math.cos(x) * 0.01 - 25);
            let dy = Math.abs(Math.sin(y) * 0.01 - 25);
            let xx = x + Math.pow(Math.cos(y * 0.5 + t * 0.025), 700) * y * x * 200.5;
            let yy = y + Math.pow(Math.sin(x * 0.5 + t * 0.025), 700) * y * x * 200.5;
            xx = lerp(x, xx, this.grow);
            yy = lerp(y, yy, this.grow);
            this.vertices.push((xx - 0) * 0.05 * 1.0 - 1.2, yy * 0.05 * 1.0 - 1.3);
        }
    }
    // 
    function logMap(position) {
        // position will be between minp and maxp
        var minp = 0;
        var maxp = 1500;
        // The result should be between minv an maxv
        var minv = Math.log(1e-7);
        var maxv = Math.log(0.3852774978347468);
        // calculate adjustment factor
        var scale = (maxv - minv) / (maxp - minp);
        return Math.exp(minv + scale * (position - minp));
    }
};