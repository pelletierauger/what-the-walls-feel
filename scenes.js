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

let fadeIn = new Scene("fade-in");

fadeIn.init = function() {
    this.grow = 1e-7;
};

fadeIn.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10) * 0.025 * 0.5;
    let a = 0.00005;
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x - 100;
            let oy = y - 100;
            let dx = abs(cos(x) * 0.01 - 25);
            let dy = abs(sin(y) * 0.01 - 25);
            let xx = x + pow(cos(y * 0.5 + t * 0.025), 700) * y * x * 200.5;
            let yy = y + pow(sin(x * 0.5 + t * 0.025), 700) * y * x * 200.5;
            //             xx += cos(oy * 10) * sin(oy * 10)2
            xx = lerp(x, xx, this.grow);
            yy = lerp(y, yy, this.grow);
            //             yy += cos(oy * 10) * sin(oy * 10);
            if (i == 0) {
                oriX = xx;
            }
            this.vertices.push((xx - 0) * 0.05 * 1.0 - 1.2, yy * 0.05 * 1.0 - 1.3);
            i++;
        }
    }
    this.grow *= 1.01;
};
fadeIn.init();