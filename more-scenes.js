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


newFestive.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 1000000 - 100) * 0.00125;
    for (let x = amountX; x > 0; x -= 1) {
       for (let y = 0; y < amountY; y += 1) {
            let ox = x;
            let oy = y;
            let dx = Math.cos(ox * t * 5e-1) * 0.2;
            let dy = Math.sin(oy * t * 5e-1) * 0.2;
            let xx = x - pow(cos(dx + dy), 4) * 8;
            let yy = y + pow(sin(dx + dy), 4) * 8;
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