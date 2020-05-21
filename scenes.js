let concerto = new Scene("concerto");

concerto.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10000000000) * 0.025 * 0.0001;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let nx = Math.cos(x * 4.1);
            let ny = Math.sin(y * 4.1);
            let tt = Math.sin(t * 0.125 * 0.0625) * 750;
            let m = 4e3 + tt;
            let xx = x + (Math.pow(Math.sin(m * x * 100) * Math.sin(t * y * 1e3), 1));
            let yy = y + (Math.pow(Math.sin(m * y * 100) * Math.sin(t * x * 1e3), 1));
            xx *= 0.95;
            xx += 3.12;
            this.vertices.push((xx - 0) * 0.05 * 1.0 - 1.3, yy * 0.05 * 1.0 - 1.3);
        }
    }
};

let fasterSubtleTrunk = new Scene("faster-subtle-trunk");

fasterSubtleTrunk.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum) * 0.025 * 0.5;
    let i = 0;
    let ix = 1,
        iy = 1;
    let sosc = function(i, min, max) {
        return map(Math.sin(i), -1, 1, min, max);
    };
    let cosc = function(i, min, max) {
        return map(Math.cos(i), -1, 1, min, max);
    };
    let m = sosc(t * 1e-3 + 10, 0.01, 2);
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let dx = x + max(cos(x * 0.125 + t * -10), sin(y + x * 0.25 + t * 0.5));
            let dy = y + min(sin(y * 0.125 + t * -10), cos(x + x * 0.25 + t * 0.5));
            this.vertices.push((dx * 0.05) - 1.25, (dy * 0.05) - 1.25);
            i++;
        }
    }
};

let traffic3FadeIn = new Scene("traffic-3-fade-in");

traffic3FadeIn.update = function(sum) {
    this.vertices = [];
    this.grow = logMap(Math.min(drawCount - sum, 1500));
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
                        xx += Math.random() * 0.01;
            yy += Math.random() * 0.01;
            this.vertices.push((xx - 0) * 0.075 * 1.0 - 1.2, (yy + -10) * 0.07 * 1.0 - 1.3);
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
            if (y < 11 || y > 17) {
                let dx = Math.abs(Math.cos(x) * 0.01 - 25);
                let dy = Math.abs(Math.sin(y) * 0.01 - 25);
                let xx = x + Math.pow(Math.cos(y * 0.5 + t * 0.025), 700) * y * x * 200.5;
                let yy = y + Math.pow(Math.sin(x * 0.5 + t * 0.025), 700) * y * x * 200.5;
                xx = lerp(x, xx, this.grow);
                yy = lerp(y, yy, this.grow);
                this.vertices.push((xx - 0) * 0.05 * 1.0 - 1.2, yy * 0.05 * 1.0 - 1.3);
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