let beautifulBubbles = new Scene("beautiful-bubbles");

beautifulBubbles.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10) * 0.005;
    let a = 0.05;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x;
            let oy = y;
            let xx = x + cos(oy * ox * a * t + oy * t * 0.001) * 1;
            let yy = y + sin(oy * ox * a * t) * 1;
            this.vertices.push(xx * 0.035 - 0.84, yy * 0.035 - 0.84);
        }
    }
};

let zoomingBubbles = new Scene("zooming-bubbles");

zoomingBubbles.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10) * 0.15;
    let a = 0.05;
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x;
            let oy = y;
            let dx = abs(x - map(sin(t * 1e-8), -1, 1, 5, 45));
            let dy = abs(y - map(sin(t * 1e-8), -1, 1, 6, 30));
            let xx = x + sin(dx * 100 + t * 2) * map(dx, 0, 50, 0, 3);
            let yy = y + cos(dy * 100 + t * 2) * map(dy, 0, 50, 0, 3);
            xx += cos(x * 100) * sin(y * 100) * 1;
            yy += sin(x * 100) * sin(y * 100) * 1;
            if (i == 0) {
                oriX = xx;
            }
            this.vertices.push((xx - 0) * 0.035 * 1.0 - 0.85, yy * 0.05 * 1.0 - 0.85);
            i++;
        }
    }
};


let zoomingBubblesWithoutMargins = new Scene("zooming-bubbles-without-margins");

zoomingBubblesWithoutMargins.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10) * 0.15;
    let a = 0.05;
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x;
            let oy = y;
            let dx = abs(x - map(sin(t * 1e-8), -1, 1, 25, 25));
            let dy = abs(y - map(sin(t * 1e-8), -1, 1, 25, 25));
            let xx = x + sin(dx * 100 + t * 2) * map(dx, 0, 50, 0, 3);
            let yy = y + cos(dy * 100 + t * 2) * map(dy, 0, 50, 0, 3);
            xx += cos(x * 100) * cos(y * 100) * 1;
            yy += sin(x * 100) * sin(y * 100) * 1;
            if (i == 0) {
                oriX = xx;
            }
            this.vertices.push((xx - 0) * 0.05 * 1.0 - 1.32, yy * 0.05 * 1.0 - 1.2);
            i++;
        }
    }
};

let zoomingCurvyBubbles = new Scene("zooming-curvy-bubbles");

zoomingCurvyBubbles.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10) * 0.15;
    let a = 0.05;
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x;
            let oy = y;
            let dx = abs(x - map(sin(t * 1e-8), -1, 1, 25, 25));
            let dy = abs(y - map(sin(t * 1e-8), -1, 1, 25, 25));
            let xx = x + sin(dx * 100 + t * 2) * map(dx, 0, 50, 0, 3);
            let yy = y + cos(dy * 100 + t * 2) * map(dy, 0, 50, 0, 3);
            xx += cos(x * 0.2) * cos(y * 0.2) * 4;
            yy += sin(x * 0.2) * sin(y * 0.2) * 4;
            if (i == 0) {
                oriX = xx;
            }
            this.vertices.push((xx - 0) * 0.05 * 1.0 - 1.2, yy * 0.05 * 1.0 - 1.2);
            i++;
        }
    }
};

let flowingBubbles = new Scene("flowing-bubbles");

flowingBubbles.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10) * 0.15;
    let a = 0.05;
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x - 100;
            let oy = y - 100;
            let dx = abs(x - map(sin(t * 1e-1), -1, 1, 25, 25));
            let dy = abs(y - map(cos(t * 1e-1), -1, 1, 25, 25));
            let xx = x + sin(dx * 100 + t * 2) * sin(dx * 0.25 * sin(oy * 0.01)) * 2 * map(dx, 0, 50, 0, 3);
            let yy = y + cos(dy * 100 + t * 2) * cos(dx * 0.25 * cos(ox * 0.01)) * 2 * map(dy, 0, 50, 0, 3);
            xx += cos(oy * 10) * sin(oy * 10) * 1;
            yy += sin(oy * 10) * sin(oy * 10) * 1;
            if (i == 0) {
                oriX = xx;
            }
            this.vertices.push((xx - 0) * 0.05 * 1.0 - 1.2, yy * 0.05 * 1.0 - 1.2);
            i++;
        }
    }
};

let subtleFlowing = new Scene("subtle-flowing");

subtleFlowing.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10) * 0.15;
    let a = 0.05;
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x - 100;
            let oy = y - 100;
            let dx = abs(x - map(sin(t * 1e-1), -1, 1, 25, 25));
            let dy = abs(y - map(cos(t * 1e-1), -1, 1, 25, 25));
            let xx = x + sin(dy * 50 + t) * sin(dx * 0.5) * map(dx, 0, 50, 0, 4);
            let yy = y + cos(dy * 50 + t) * cos(dx * 0.5) * map(dy, 0, 50, 0, 4);
            //             xx += cos(oy * 10) * sin(oy * 10);
            //             yy += cos(oy * 10) * sin(oy * 10);
            if (i == 0) {
                oriX = xx;
            }
            this.vertices.push((xx - 0) * 0.05 * 1.0 - 1.2, yy * 0.05 * 1.0 - 1.2);
            i++;
        }
    }
};

let bigOscillation = new Scene("big-oscillation");

bigOscillation.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10) * 0.15;
    let a = 0.05;
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x - 100;
            let oy = y - 100;
            let dx = abs(x - 25);
            let dy = abs(y - 25);
            let xx = x + cos(dx * 50 + t * 0.75) * map(dx + cos(x + y) * 4, 0, 50, 0, 20) * 0.5;
            let yy = y + sin(dx * 50 + t * 0.75) * map(dy + sin(x) * 4, 0, 50, 0, 20) * 0.5;
            //             xx += cos(oy * 10) * sin(oy * 10);
            //             yy += cos(oy * 10) * sin(oy * 10);
            if (i == 0) {
                oriX = xx;
            }
            this.vertices.push((xx - 0) * 0.05 * 1.0 - 1.2, yy * 0.05 * 1.0 - 1.2);
            i++;
        }
    }
};

let biggerOscillation = new Scene("bigger-oscillation");

biggerOscillation.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10) * 0.15;
    let a = 0.05;
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x - 100;
            let oy = y - 100;
            let dx = abs(x - 25);
            let dy = abs(y - 25);
            let xx = x + cos(x * 50 + t * 0.75) * map(x + cos(x + y) * 4, 0, 50, 0, 20) * 0.5;
            let yy = y + sin(x * 50 + t * 0.75) * map(y + sin(x) * 4, 0, 50, 0, 20) * 0.5;
            //             xx += cos(oy * 10) * sin(oy * 10);
            //             yy += cos(oy * 10) * sin(oy * 10);
            if (i == 0) {
                oriX = xx;
            }
            this.vertices.push((xx - 0) * 0.05 * 1.0 - 1.2, yy * 0.05 * 1.0 - 1.);
            i++;
        }
    }
};

let skatingBubbles = new Scene("skating-bubbles");

skatingBubbles.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10) * 0.15;
    let a = 0.05;
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x - 100;
            let oy = y - 100;
            let dx = abs(x - 25);
            let dy = abs(y - 25);
            let xx = x + cos(x * 50 + t * 0.5) * map(x + cos(x + y) * 4, 0, 50, 0, 20) * 0.5;
            let yy = y + sin(y * 50 + t * 0.5) * map(y + sin(x) * 4, 0, 50, 0, 20) * 0.5;
            //             xx += cos(oy * 10) * sin(oy * 10);
            //             yy += cos(oy * 10) * sin(oy * 10);
            if (i == 0) {
                oriX = xx;
            }
            this.vertices.push((xx - 0) * 0.05 * 1.0 - 1.2, yy * 0.05 * 1.0 - 1.);
            i++;
        }
    }
};

let smallPattern = new Scene("small-pattern");

smallPattern.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10 + 1e5) * 0.15;
    let a = 0.000005;
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x - 100;
            let oy = y - 100;
            let dx = abs(cos(x) * 0.01 - 25);
            let dy = abs(sin(y) * 0.01 - 25);
            let xx = x + cos(x * a * i + t) * cos(t * y * 1e-4);
            let yy = y + sin(x * a * i + t) * sin(t * x * 1e-4);
            //  xx += cos(oy * 10) * sin(oy * 10);
            //  yy += cos(oy * 10) * sin(oy * 10);
            if (i == 0) {
                oriX = xx;
            }
            this.vertices.push((xx - 0) * 0.05 * 1.0 - 1.2, yy * 0.05 * 1.0 - 1.);
            i++;
        }
    }
};

let smallPattern2 = new Scene("small-pattern-2");

smallPattern2.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10 + 1e3) * 0.15;
    let a = 0.00005;
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x - 100;
            let oy = y - 100;
            let dx = abs(cos(x) * 0.01 - 25);
            let dy = abs(sin(y) * 0.01 - 25);
            let xx = x + cos(y * a * i + t) * cos(t * y * 1e-3) * 2;
            let yy = y + sin(x * a * i + t) * sin(t * x * 1e-3) * 2;
            //             xx += cos(oy * 10) * sin(oy * 10);
            //             yy += cos(oy * 10) * sin(oy * 10);
            if (i == 0) {
                oriX = xx;
            }
            this.vertices.push((xx - 0) * 0.05 * 1.0 - 1.2, yy * 0.05 * 1.0 - 1.3);
            i++;
        }
    }
};


let zestyMovements = new Scene("zesty-movements");

zestyMovements.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10) * 0.025;
    let a = 0.00005;
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x - 100;
            let oy = y - 100;
            let dx = abs(cos(x) * 0.01 - 25);
            let dy = abs(sin(y) * 0.01 - 25);
            let xx = x + pow(cos(x + t), 100) * 1;
            let yy = y + pow(sin(y + t), 100) * 1;
            //  xx += cos(oy * 10) * sin(oy * 10)2
            //  yy += cos(oy * 10) * sin(oy * 10);
            if (i == 0) {
                oriX = xx;
            }
            this.vertices.push((xx - 0) * 0.05 * 1.0 - 1.2, yy * 0.05 * 1.0 - 1.3);
            i++;
        }
    }
};

let zestyMovementsFallingBranches = new Scene("zesty-movements-falling-branches");

zestyMovementsFallingBranches.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10) * 0.025;
    let a = 0.00005;
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x - 100;
            let oy = y - 100;
            let dx = abs(cos(x) * 0.01 - 25);
            let dy = abs(sin(y) * 0.01 - 25);
            let xx = x + pow(cos(x + t * 0.25), 70) * y * 0.5;
            let yy = y + pow(sin(y + t * 0.25), 70) * y * 0.5;
            //             xx += cos(oy * 10) * sin(oy * 10)2
            //             yy += cos(oy * 10) * sin(oy * 10);
            if (i == 0) {
                oriX = xx;
            }
            this.vertices.push((xx - 0) * 0.05 * 1.0 - 1.2, yy * 0.05 * 1.0 - 1.3);
            i++;
        }
    }
};

let traffic = new Scene("traffic");

traffic.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10) * 0.025;
    let a = 0.00005;
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x - 100;
            let oy = y - 100;
            let dx = abs(cos(x) * 0.01 - 25);
            let dy = abs(sin(y) * 0.01 - 25);
            let xx = x + pow(cos(y + t * 0.25), 70) * y * 0.5;
            let yy = y + pow(sin(x + t * 0.25), 70) * y * 0.5;
            //             xx += cos(oy * 10) * sin(oy * 10)2
            //             yy += cos(oy * 10) * sin(oy * 10);
            if (i == 0) {
                oriX = xx;
            }
            this.vertices.push((xx - 0) * 0.05 * 1.0 - 1.2, yy * 0.05 * 1.0 - 1.3);
            i++;
        }
    }
};

let cavern = new Scene("cavern");

cavern.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10) * 0.025;
    let a = 0.00005;
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x - 100;
            let oy = y - 100;
            let dx = abs(cos(x) * 0.01 - 25);
            let dy = abs(sin(y) * 0.01 - 25);
            let xx = x + pow(cos(y * 0.1 + t * 0.25), 70) * y * 0.5;
            let yy = y + pow(sin(x * 0.1 + t * 0.25), 70) * y * 0.5;
            //  xx += cos(oy * 10) * sin(oy * 10)2
            //  yy += cos(oy * 10) * sin(oy * 10);
            if (i == 0) {
                oriX = xx;
            }
            this.vertices.push((xx - 0) * 0.05 * 1.0 - 1.2, yy * 0.05 * 1.0 - 1.3);
            i++;
        }
    }
};

let traffic2 = new Scene("traffic-2");

traffic2.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10) * 0.025;
    let a = 0.00005;
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x - 100;
            let oy = y - 100;
            let dx = abs(cos(x) * 0.01 - 25);
            let dy = abs(sin(y) * 0.01 - 25);
            let xx = x + pow(cos(y * 0.5 + t * 0.25), 70) * y * 0.5;
            let yy = y + pow(sin(x * 0.5 + t * 0.25), 70) * y * 0.5;
            //  xx += cos(oy * 10) * sin(oy * 10)2
            //  yy += cos(oy * 10) * sin(oy * 10);
            if (i == 0) {
                oriX = xx;
            }
            this.vertices.push((xx - 0) * 0.05 * 1.0 - 1.2, yy * 0.05 * 1.0 - 1.3);
            i++;
        }
    }
};

let traffic3 = new Scene("traffic-3");

traffic3.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10) * 0.025;
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
            //  xx += cos(oy * 10) * sin(oy * 10)2
            //  yy += cos(oy * 10) * sin(oy * 10);
            if (i == 0) {
                oriX = xx;
            }
            this.vertices.push((xx - 0) * 0.05 * 1.0 - 1.2, yy * 0.05 * 1.0 - 1.3);
            i++;
        }
    }
};