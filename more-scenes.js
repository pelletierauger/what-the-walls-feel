let moreFestive = new Scene("More festive");

newFestive.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = amountX; x > 0; x -= 1) {
    //     for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + 4;
            let oy = y + 5;
            let dx = Math.cos(Math.tan(ox)) * 0.01 * 16;
            let dy = Math.sin(Math.sin(oy)) * 0.01 * 16;
            let xx = x - pow(sin((dx * dy) * 100 + t * 12) * 0.1, 0.2) * 1;
            let yy = y + pow(sin((dx * dy) * 100 + t * 12) * 0.1, 0.2) * 1;
            //             xx += map(cos(x * t), -1, 1, 0.5, 0.4) * 2;
            //             yy += map(sin(y * t), -1, 1, 0.5, 0.4) * 2;
            if (i == 0) {
                oriX = xx;
            }
//             let ranX = Math.random() * 0.025 * 0.5;
//             let ranY = Math.random() * 0.025 * 0.5;
//             this.vertices.push((xx - 0 + ranX) * 0.05 * 0.8 - 1.05, (yy + ranY) * 0.045 * 1.0 - 1.2);
            xx += Math.random() * 0.01;
            yy += Math.random() * 0.01;
            xx *= 0.95;
            this.vertices.push(xx * 0.075 - 1.2115, (yy + -10) * 0.07 - 1.32); // good
            i++;
        }
    }
};

newFestive.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    for (let x = amountX; x > 0; x -= 1) {
       for (let y = 0; y < amountY; y += 1) {
            let ox = x + 4;
            let oy = y + 5;
            let dx = Math.cos(Math.tan(ox)) * 0.01 * 16;
            let dy = Math.sin(Math.sin(oy)) * 0.01 * 16;
            let xx = x - pow(sin((dx * dy) * 50 + t * 12) * 0.1, 0.2) * 1;
            let yy = y + pow(sin((dx * dy) * 50 + t * 12) * 0.1, 0.2) * 1;
            xx += Math.random() * 0.01;
            yy += Math.random() * 0.01;
            xx *= 0.95;
            this.vertices.push(xx * 0.075 - 1.2115, (yy + -10) * 0.07 - 1.32); // good
        }
    }
};

newFestive.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum) * 0.005;
    for (let x = amountX; x > 0; x -= 1) {
       for (let y = 0; y < amountY; y += 1) {
            let ox = x;
            let oy = y;
            let dx = Math.cos(ox * 1e-1 * t) * 2;
            let dy = Math.sin(oy * 1e-1 * t) * 2;
            let xx = x - pow(cos(dx * dy * 2), dx * 1e-1) * 1;
            let yy = y + pow(sin(dx * dy * 2), dx * 1e-1) * 1;
            xx += Math.random() * 0.01;
            yy += Math.random() * 0.01;
            xx *= 0.95;
            this.vertices.push(xx * 0.075 - 1.2115, (yy + -10) * 0.07 - 1.32); // good
        }
    }
};

// Very mellow and intricate at the beginning
let mellowFestive = new Scene("mellow-festive");

mellowFestive.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10000000 - 100 + 181) * 0.00125 * 2 + 25167.05 + 50 + 167;
//     logJavaScriptConsole(t);
    for (let x = amountX; x > 0; x -= 1) {
       for (let y = 0; y < amountY; y += 1) {
            let ox = x + 10;
            let oy = y;
            let dx = Math.cos(ox * t * 5e-1) * 0.2;
            let dy = Math.sin(oy * t * 5e-1) * 0.2;
            let xx = x - pow(cos(dx + dy), 4) * 8;
            let yy = y + pow(sin(dx + dy), 4) * 8;
            xx += Math.random() * 0.01;
            yy += Math.random() * 0.01;
            xx *= 0.95;
            this.vertices.push((xx + 7.2) * 0.075 - 1.2115, (yy + -10) * 0.07 - 1.32); // good
//             if (x == amountX && y == 0) {
//                 logJavaScriptConsole("mellowFestive : " + (xx + 7.2));
//             }
        }
    }
};



newFestive.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 1000000 - 100) * 0.00125;
    for (let x = amountX; x > 0; x -= 1) {
       for (let y = 0; y < amountY; y += 1) {
            let ox = x;
            let oy = y;
            let dx = Math.cos(ox * ox);
            let dy = Math.sin(oy * ox);
            let xx = x - pow(cos(dx * dy * t * 1e2), 0.9) * 0.1;
            let yy = y + pow(sin(dx * dy * t * 1e2), 0.9) * 0.1;
            xx += Math.random() * 0.01;
            yy += Math.random() * 0.01;
            xx *= 0.95;
            this.vertices.push(xx * 0.075 - 1.2115, (yy + -10) * 0.07 - 1.32); // good
        }
    }
};

// assez beau
newFestive.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let freq = map(drawCount - sum, 0, 2000, 0.1, 0.2);
    for (let x = amountX; x > 0; x -= 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + 0.5;
            let oy = y;
            let dx = Math.abs(Math.cos(ox * 0.1) * 0.1) * 16;
            let dy = Math.abs(Math.sin(oy * 0.1) * 0.1) * 16;
            let xx = x - Math.pow(Math.cos((dx + dy) * 20 + t * 12) * 0.1, 0.02) * 5;
            let yy = y + Math.pow(Math.sin((dx + dy) * 20 + t * 12) * 0.1, 0.02) * 5;
            xx += Math.random() * 0.01;
            yy += Math.random() * 0.01;
            xx *= 0.95;
            this.vertices.push(xx * 0.075 - 1.2115, (yy + -10) * 0.07 - 1.32); // good
        }
    }
};

// beautiful, centered
newFestive.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let freq = map(drawCount - sum, 0, 2000, 0.1, 0.2);
    for (let x = amountX; x > 0; x -= 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + 10;
            let oy = y + 212;
            let dx = Math.abs(Math.cos(ox * 0.1) * 0.1) * 16;
            let dy = Math.abs(Math.sin(oy * 0.1) * 0.1) * 16;
            let xx = x - Math.pow(Math.cos((dx + dy) * 20 + t * 12) * 0.1, 0.02) * 5;
            let yy = y + Math.pow(Math.sin((dx + dy) * 20 + t * 12) * 0.1, 0.02) * 5;
            xx += Math.random() * 0.01;
            yy += Math.random() * 0.01;
            xx *= 0.95;
            this.vertices.push(xx * 0.075 - 1.2115, (yy + -10) * 0.07 - 1.32); // good
        }
    }
};

newFestive.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let freq = map(drawCount - sum, 0, 2000, 0.1, 0.2);
    for (let x = amountX; x > 0; x -= 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + 10;
            let oy = y + 212;
            let dx = Math.abs(Math.cos(ox * 0.1) * 0.1) * 16;
            let dy = Math.abs(Math.sin(oy * 0.1) * 0.1) * 16;
            let xx = x - Math.pow(Math.cos((dx + dy) * 20 + t * 12) * 0.1, 0.02) * 15;
            let yy = y + Math.pow(Math.sin((dx + dy) * 20 + t * 12) * 0.1, 0.02) * 15;
            xx += Math.random() * 0.01;
            yy += Math.random() * 0.01;
            xx *= 0.95;
            this.vertices.push(xx * 0.075 - 1.2115, (yy + -10) * 0.07 - 1.32); // good
        }
    }
};

// corn
newFestive.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let freq = map(drawCount - sum, 0, 2000, 0.1, 0.2);
    for (let x = amountX; x > 0; x -= 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + 15;
            let oy = y + 17;
            let dx = Math.abs(Math.cos(ox * 0.1) * 0.1) * 16;
            let dy = Math.abs(Math.sin(oy * 0.1) * 0.1) * 16;
            let xx = x - Math.pow(Math.cos((dx + dy) * 20 + t * 12) * 0.1, 0.02) * 15;
            let yy = y + Math.pow(Math.sin((dx + dy) * 20 + t * 12) * 0.1, 0.02) * 15;
            xx += Math.random() * 0.01;
            yy += Math.random() * 0.01;
            xx *= 0.95;
            this.vertices.push(xx * 0.075 - 1.2115, (yy + -10) * 0.07 - 1.32); // good
        }
    }
};

// centered eye
newFestive.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let freq = map(drawCount - sum, 0, 2000, 0.1, 0.2);
    for (let x = amountX; x > 0; x -= 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + 15;
            let oy = y + 17;
            let dx = Math.abs(Math.cos(ox * 0.1) * 0.05) * 16;
            let dy = Math.abs(Math.sin(oy * 0.1) * 0.05) * 16;
            let xx = x - Math.pow(Math.cos((dx + dy) * 20 + t * 12) * 0.1, 0.02) * 15;
            let yy = y + Math.pow(Math.sin((dx + dy) * 20 + t * 12) * 0.1, 0.02) * 15;
            xx += Math.random() * 0.01;
            yy += Math.random() * 0.01;
            xx *= 0.95;
            this.vertices.push(xx * 0.075 - 1.2115, (yy + -10) * 0.07 - 1.32); // good
        }
    }
};

// sunrise
newFestive.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let freq = map(drawCount - sum, 0, 2000, 0.1, 0.2);
    for (let x = amountX; x > 0; x -= 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + 11;
            let oy = y + 17;
            let dx = Math.abs(Math.cos(ox * 0.075) * 0.05) * 16;
            let dy = Math.abs(Math.sin(oy * 0.075) * 0.05) * 16;
            let xx = x - Math.pow(Math.cos((dx + dy) * 20 + t * 12) * 0.1, 0.02) * 15;
            let yy = y + Math.pow(Math.sin((dx + dy) * 20 + t * 12) * 0.1, 0.02) * 15;
            xx += Math.random() * 0.01;
            yy += Math.random() * 0.01;
            xx *= 0.95;
            this.vertices.push(xx * 0.075 - 1.2115, (yy + -10) * 0.07 - 1.32); // good
        }
    }
};

newFestive.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let freq = map(drawCount - sum, 0, 2000, 0.1, 0.2);
    for (let x = amountX; x > 0; x -= 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + 11;
            let oy = y + 17;
            let dx = Math.abs(Math.cos(ox * 0.075) * 0.1) * 16;
            let dy = Math.abs(Math.sin(oy * 0.075) * 0.1) * 16;
            let xx = x - Math.pow(Math.cos((dx + dy) * 20 + t * 12) * 0.1, 0.02) * 15;
            let yy = y + Math.pow(Math.sin((dx + dy) * 20 + t * 12) * 0.1, 0.02) * 15;
            xx += Math.random() * 0.01;
            yy += Math.random() * 0.01;
            xx *= 0.95;
            this.vertices.push(xx * 0.075 - 1.2115, (yy + -10) * 0.07 - 1.32); // good
        }
    }
};

// diagonal eye
newFestive.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let freq = map(drawCount - sum, 0, 2000, 0.1, 0.2);
    for (let x = amountX; x > 0; x -= 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + 3;
            let oy = y + 15;
            let dx = Math.abs(Math.cos(ox * 0.075) * 0.1) * 16;
            let dy = Math.abs(Math.sin(oy * 0.075) * 0.1) * 16;
            let xx = x - Math.pow(Math.cos((dx + dy) * 20 + t * 12) * 0.1, 0.02) * 1;
            let yy = y + Math.pow(Math.sin((dx + dy) * 20 + t * 12) * 0.1, 0.02) * 1;
            xx += Math.random() * 0.01;
            yy += Math.random() * 0.01;
            xx *= 0.95;
            this.vertices.push(xx * 0.075 - 1.2115, (yy + -10) * 0.07 - 1.32); // good
        }
    }
};

newFestive.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005 * 2;
    let freq = map(drawCount - sum, 0, 2000, 0.1, 0.2);
    for (let x = amountX; x > 0; x -= 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + -4;
            let oy = y + 21;
            let dx = Math.abs(Math.cos(ox * 0.075) * 0.025) * 16;
            let dy = Math.abs(Math.sin(oy * 0.075) * 0.025) * 16;
            let xx = x - Math.pow(Math.cos((dx + dy) * 20 + t * 12) * 0.1, 0.02) * 8;
            let yy = y + Math.pow(Math.sin((dx + dy) * 20 + t * 12) * 0.1, 0.02) * 8;
            xx += Math.random() * 0.01;
            yy += Math.random() * 0.01;
            xx *= 0.95;
            this.vertices.push(xx * 0.075 - 1.2115, (yy + -10) * 0.07 - 1.32); // good
        }
    }
};

// beautiful and new diagonal
newFestive.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let freq = map(drawCount - sum, 0, 2000, 0.1, 0.2);
    for (let x = amountX; x > 0; x -= 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + -4;
            let oy = y + 15;
            let dx = Math.abs(Math.cos(ox * 0.075) * 0.1) * 16;
            let dy = Math.abs(Math.sin(oy * 0.075) * 0.1) * 16;
            let xx = x - Math.pow(Math.cos((dx + dy) * 20 + t * 12) * 0.1, 0.02) * 1;
            let yy = y + Math.pow(Math.sin((dx + dy) * 20 + t * 12) * 0.1, 0.02) * 1;
            xx += Math.random() * 0.01;
            yy += Math.random() * 0.01;
            xx *= 0.95;
            this.vertices.push(xx * 0.075 * 0.57 - 0.99, (yy + -10) * 0.07 - 1.32); // good
        }
    }
};

newFestive.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let freq = map(drawCount - sum, 0, 2000, 0.1, 0.2);
    for (let x = amountX; x > 0; x -= 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + -4;
            let oy = y + 15;
            let dx = Math.abs(Math.cos(ox * 0.075) * 4) * 1;
            let dy = Math.abs(Math.sin(oy * 0.075) * 4) * 1;
            let xx = x - Math.pow(Math.cos((dx + dy) * 20 + t * 12) * 0.1, 0.02) * 1;
            let yy = y + Math.pow(Math.sin((dx + dy) * 20 + t * 12) * 0.1, 0.02) * 1;
            xx += Math.random() * 0.01;
            yy += Math.random() * 0.01;
            xx *= 0.95;
            this.vertices.push(xx * 0.075 * 0.57 - 0.99, (yy + -10) * 0.07 - 1.32); // good
        }
    }
};

newFestive.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let freq = map(drawCount - sum, 0, 2000, 0.1, 0.2);
    for (let x = amountX; x > 0; x -= 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + -4;
            let oy = y + 15;
            let dx = Math.abs(Math.cos(ox * 0.075) * 2) * 1;
            let dy = Math.abs(Math.sin(oy * 0.075) * 2) * 1;
            let xx = x - Math.pow(Math.cos((dx + dy) * 20 + t * 12) * 0.1, 0.02) * 1;
            let yy = y + Math.pow(Math.sin((dx + dy) * 20 + t * 12) * 0.1, 0.02) * 1;
            xx += Math.random() * 0.01;
            yy += Math.random() * 0.01;
            xx *= 0.95;
            this.vertices.push(xx * 0.075 * 0.57 - 0.99, (yy + -10) * 0.07 - 1.32); // good
        }
    }
};

newFestive.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let freq = map(drawCount - sum, 0, 2000, 0.1, 0.2);
    for (let x = amountX; x > 0; x -= 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + -4;
            let oy = y + 15;
            let dx = Math.abs(Math.cos(ox * 0.075) * 1) * 1;
            let dy = Math.abs(Math.sin(oy * 0.075) * 1) * 1;
            let xx = x - Math.pow(Math.cos((dx + dy) * 20 + t * 12) * 0.1, 0.02) * 1;
            let yy = y + Math.pow(Math.sin((dx + dy) * 20 + t * 12) * 0.1, 0.02) * 1;
            xx += Math.random() * 0.01;
            yy += Math.random() * 0.01;
            xx *= 0.95;
            this.vertices.push(xx * 0.075 * 0.57 - 0.99, (yy + -10) * 0.07 - 1.32); // good
        }
    }
};

newFestive.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let freq = map(drawCount - sum, 0, 2000, 0.1, 0.2);
    for (let x = amountX; x > 0; x -= 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + -4;
            let oy = y + 15;
            let dx = Math.abs(Math.cos(ox * 0.075) * 1) * 1;
            let dy = Math.abs(Math.sin(oy * 0.075) * 1) * 1;
            let xx = x - Math.pow(Math.cos((dx + dy) * 8 + t * 12) * 0.1, 0.1) * 1;
            let yy = y + Math.pow(Math.sin((dx + dy) * 8 + t * 12) * 0.1, 0.1) * 1;
            xx += Math.random() * 0.01;
            yy += Math.random() * 0.01;
            xx *= 0.95;
            this.vertices.push(xx * 0.075 * 0.57 - 0.99, (yy + -10) * 0.07 - 1.32); // good
        }
    }
};

// beau, beau, beau
let newerFestive = new Scene("Newer festive");

newerFestive.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let freq = map(drawCount - sum, 0, 2000, 0.1, 0.2);
    for (let x = amountX; x > 0; x -= 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + -5;
            let oy = y + 15;
            let dx = Math.abs(Math.cos(ox * 0.075 * 2) * 1) * 1;
            let dy = Math.abs(Math.sin(oy * 0.075 * 2) * 1) * 1;
            let xx = x - Math.pow(Math.cos((dx + dy) * 8 + t * 12) * 10000, 0.05) * 1;
            let yy = y + Math.pow(Math.sin((dx + dy) * 8 + t * 12) * 10000, 0.05) * 1;
            xx += Math.random() * 0.01;
            yy += Math.random() * 0.01;
            xx *= 0.95;
            this.vertices.push(xx * 0.075 * 0.57 - 0.99, (yy + -10) * 0.07 - 1.32); // good
        }
    }
};

// beau, more structured
newFestive.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let freq = map(drawCount - sum, 0, 2000, 0.1, 0.2);
    for (let x = amountX; x > 0; x -= 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + -5;
            let oy = y + 15;
            let dx = Math.abs(Math.cos(ox * 0.075 * 2) * 1) * 1;
            let dy = Math.abs(Math.sin(oy * 0.075 * 2) * 1) * 1;
            let xx = x - Math.pow(Math.cos((dx * dy) * 8 + t * 12) * 10000, 0.05) * 1;
            let yy = y + Math.pow(Math.sin((dx * dy) * 8 + t * 12) * 10000, 0.05) * 1;
            xx += Math.random() * 0.01;
            yy += Math.random() * 0.01;
            xx *= 0.95;
            this.vertices.push(xx * 0.075 * 0.57 - 0.99, (yy + -10) * 0.07 - 1.32); // good
        }
    }
};

// plus loin
newFestive.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let freq = map(drawCount - sum, 0, 2000, 0.1, 0.2);
    for (let x = amountX; x > 0; x -= 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + -5;
            let oy = y + 15;
            let dx = Math.abs(Math.cos(ox * 0.075 * 4) * 1) * 1;
            let dy = Math.abs(Math.sin(oy * 0.075 * 4) * 1) * 1;
            let xx = x - Math.pow(Math.cos((dx * dy) * 8 + t * 12) * 10000, 0.05) * 1;
            let yy = y + Math.pow(Math.sin((dx * dy) * 8 + t * 12) * 10000, 0.05) * 1;
            xx += Math.random() * 0.01;
            yy += Math.random() * 0.01;
            xx *= 0.95;
            this.vertices.push(xx * 0.075 * 0.57 - 0.99, (yy + -10) * 0.07 - 1.32); // good
        }
    }
};

// beau, structured, clouds substracted
newFestive.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let freq = map(drawCount - sum, 0, 2000, 0.1, 0.2);
    for (let x = amountX; x > 0; x -= 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + -5;
            let oy = y + 15;
            let dx = Math.abs(Math.cos(ox * 0.075 * 4) * 1) * 1;
            let dy = Math.abs(Math.sin(oy * 0.075 * 4) * 1) * 1;
            let xx = x - Math.pow(Math.cos((dx * dy) * 2 + t * 12) * 10000, 0.05) * 1;
            let yy = y + Math.pow(Math.sin((dx * dy) * 2 + t * 12) * 10000, 0.05) * 1;
            xx += Math.random() * 0.01;
            yy += Math.random() * 0.01;
            xx *= 0.95;
            this.vertices.push(xx * 0.075 * 0.57 - 0.99, (yy + -10) * 0.07 - 1.32); // good
        }
    }
};


// no need for Math.abs, maybe
newFestive.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let freq = map(drawCount - sum, 0, 2000, 0.1, 0.2);
    for (let x = amountX; x > 0; x -= 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + -5;
            let oy = y + 15;
            let dx = (Math.cos(ox * 0.075 * 4) * 1) * 1;
            let dy = (Math.sin(oy * 0.075 * 4) * 1) * 1;
            let xx = x - Math.pow(Math.cos((dx * dy) * 2 + t * 12), 0.05) * 1;
            let yy = y + Math.pow(Math.sin((dx * dy) * 2 + t * 12), 0.05) * 1;
            xx += Math.random() * 0.01;
            yy += Math.random() * 0.01;
            xx *= 0.95;
            this.vertices.push(xx * 0.075 * 0.57 - 0.99, (yy + -10) * 0.07 - 1.32); // good
        }
    }
};

// interesting and floaty
newFestive.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let freq = map(drawCount - sum, 0, 2000, 0.1, 0.2);
    for (let x = amountX; x > 0; x -= 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + -5;
            let oy = y + 15;
            let dx = (Math.cos(ox * 0.075 * 4) * 1) * 1;
            let dy = (Math.sin(oy * 0.075 * 4) * 1) * 1;
            let xx = x - Math.pow(Math.cos((dx * dy) * 2 + t * 12), 0.5) * 1;
            let yy = y + Math.pow(Math.sin((dx * dy) * 2 + t * 12), 0.5) * 1;
            xx += Math.random() * 0.01;
            yy += Math.random() * 0.01;
            xx *= 0.95;
            this.vertices.push(xx * 0.075 * 0.57 - 0.99, (yy + -10) * 0.07 - 1.32); // good
        }
    }
};

// well balanced
newFestive.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let freq = map(drawCount - sum, 0, 2000, 0.1, 0.2);
    for (let x = amountX; x > 0; x -= 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + -5;
            let oy = y + 15;
            let dx = (Math.cos(ox * 0.075 * 4) * 1) * 1;
            let dy = (Math.sin(oy * 0.075 * 4) * 1) * 1;
            let xx = x - Math.pow(Math.cos((dx * dy) * 4 + t * 12), 0.05) * 2;
            let yy = y + Math.pow(Math.sin((dx * dy) * 4 + t * 12), 0.05) * 2;
            xx += Math.random() * 0.01;
            yy += Math.random() * 0.01;
            xx *= 0.95;
            this.vertices.push(xx * 0.075 * 0.57 - 0.99, (yy + -10) * 0.07 - 1.32); // good
        }
    }
};

// slower might be better
newFestive.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let freq = map(drawCount - sum, 0, 2000, 0.1, 0.2);
    for (let x = amountX; x > 0; x -= 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + -5;
            let oy = y + 15;
            let dx = Math.cos(ox * 0.3);
            let dy = Math.sin(oy * 0.3);
            let xx = x - Math.pow(Math.cos((dx * dy) * 4 + t * 6), 0.05) * 2;
            let yy = y + Math.pow(Math.sin((dx * dy) * 4 + t * 6), 0.05) * 2;
            xx += Math.random() * 0.01;
            yy += Math.random() * 0.01;
            xx *= 0.95;
            this.vertices.push(xx * 0.075 * 0.57 - 0.99, (yy + -10) * 0.07 - 1.32); // good
        }
    }
};

// curious result with tan
newFestive.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let freq = map(drawCount - sum, 0, 2000, 0.1, 0.2);
    for (let x = amountX; x > 0; x -= 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + -5;
            let oy = y + 15;
            let dx = Math.cos(ox * 0.3);
            let dy = Math.sin(oy * 0.3);
            let xx = x - Math.pow(Math.tan((dx * dy) * 4 + t * 6), 0.05) * 2;
            let yy = y + Math.pow(Math.tan((dx * dy) * 4 + t * 6), 0.05) * 2;
            xx += Math.random() * 0.01;
            yy += Math.random() * 0.01;
            xx *= 0.95;
            this.vertices.push(xx * 0.075 * 0.57 - 0.99, (yy + -10) * 0.07 - 1.32); // good
        }
    }
};

newFestive.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let freq = map(drawCount - sum, 0, 2000, 0.1, 0.2);
    for (let x = amountX; x > 0; x -= 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + -5;
            let oy = y + 15;
            let dx = Math.cos(ox * 0.3);
            let dy = Math.sin(oy * 0.3);
            let xx = x - Math.pow(Math.tan((dx * dy) * 2 + t * 6), 0.9) * 0.1;
            let yy = y + Math.pow(Math.tan((dx * dy) * 2 + t * 6), 0.9) * 0.1;
            xx += Math.random() * 0.01;
            yy += Math.random() * 0.01;
            xx *= 0.95;
            this.vertices.push(xx * 0.075 * 0.57 - 0.99, (yy + -10) * 0.07 - 1.32); // good
        }
    }
};

// ruche
newFestive.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let freq = map(drawCount - sum, 0, 2000, 0.1, 0.2);
    for (let x = amountX; x > 0; x -= 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + -3;
            let oy = y + 19;
            let dx = Math.cos(ox * 0.3);
            let dy = Math.sin(oy * 0.3);
            let xx = x - Math.pow(Math.tan((dx + dy) * 2 + t * 6), 0.9) * 0.1;
            let yy = y + Math.pow(Math.tan((dx + dy) * 2 + t * 6), 0.9) * 0.1;
            xx += Math.random() * 0.01;
            yy += Math.random() * 0.01;
            xx *= 0.95;
            this.vertices.push(xx * 0.075 * 0.57 - 0.99, (yy + -10) * 0.07 - 1.32); // good
        }
    }
};

newFestive.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let freq = map(drawCount - sum, 0, 2000, 0.1, 0.2);
    for (let x = amountX; x > 0; x -= 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + -3;
            let oy = y + 19;
            let dx = Math.cos(ox * 0.3);
            let dy = Math.sin(oy * 0.3);
            let xx = x - Math.pow(Math.tan((dx + dy) * 2 + t * 6), 0.99) * 0.1;
            let yy = y + Math.pow(Math.tan((dx + dy) * 2 + t * 6), 0.99) * 0.1;
            xx += Math.random() * 0.01;
            yy += Math.random() * 0.01;
            xx *= 0.95;
            this.vertices.push(xx * 0.075 * 0.57 - 0.99, (yy + -10) * 0.07 - 1.32); // good
        }
    }
};

// trying to center the previous one
newFestive.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let freq = map(drawCount - sum, 0, 2000, 0.1, 0.2);
    for (let x = amountX; x > 0; x -= 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + -5;
            let oy = y + 19;
            let dx = Math.cos(ox * 0.3);
            let dy = Math.sin(oy * 0.3);
            let xx = x - Math.pow(Math.tan((dx + dy) * 2 + t * 6), 0.99) * 0.1;
            let yy = y + Math.pow(Math.tan((dx + dy) * 2 + t * 6), 0.99) * 0.1;
            xx += Math.random() * 0.01;
            yy += Math.random() * 0.01;
            xx *= 0.95;
            this.vertices.push(xx * 0.075 * 0.57 - 1.06, (yy + -10) * 0.07 - 1.32); // good
        }
    }
};