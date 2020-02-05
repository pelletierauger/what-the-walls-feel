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

let ringsOnALake = new Scene("rings-on-a-lake");

ringsOnALake.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10) * 0.025;
    let a = 0.00005 * sin(t * 0.5);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x - 25;
            let oy = y - 25;
            let dx = abs(cos(x) * 0.01 - 25);
            let dy = abs(sin(y) * 0.01 - 25);
            let xx = x + pow(cos(a * x * x * y + t * 0.05), 70000) * sin(x * y) * x * x * 2.5;
            let yy = y + pow(sin(a * x * x * y + t * 0.05), 70000) * sin(x * y) * x * x * 2.5;
            //  xx += map(cos(x * t), -1, 1, 0.5, 1) * 0.5;
            //  yy += map(sin(y * t), -1, 1, 0.5, 1) * 0.5;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 1.0 - 1.2, (yy + ranY) * 0.05 * 1.0 - 1.3);
            i++;
        }
    }
};

let biggerRingsOnALake = new Scene("bigger-rings-on-a-lake");

biggerRingsOnALake.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10) * 0.025;
    let a = 0.00005 * sin(t * 0.5);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x - 25;
            let oy = y - 25;
            let dx = abs(cos(x) * 0.01 - 25);
            let dy = abs(sin(y) * 0.01 - 25);
            let xx = x + pow(cos(a * x * x * y + t * 0.005), 700) * sin(x * y) * x * x * 2.5;
            let yy = y + pow(sin(a * x * x * y + t * 0.005), 700) * sin(x * y) * x * x * 2.5;
            //  xx += map(cos(x * t), -1, 1, 0.5, 1) * 0.5;
            //  yy += map(sin(y * t), -1, 1, 0.5, 1) * 0.5;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 1.0 - 1.2, (yy + ranY) * 0.05 * 1.0 - 1.3);
            i++;
        }
    }
};

let giantMagicalRingsOnALake = new Scene("giant-magical-rings-on-a-lake");

giantMagicalRingsOnALake.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10) * 0.025;
    let a = 0.00005 * sin(t * 0.5);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x - 50;
            let oy = y - 50;
            let dx = abs(cos(x) * 0.01 - 25);
            let dy = abs(sin(y) * 0.01 - 25);
            let xx = x + pow(cos(a * ox * ox * oy + t * 0.005), 700) * sin(ox * oy) * ox * ox * 2.5;
            let yy = y + pow(sin(a * ox * ox * oy + t * 0.005), 700) * sin(ox * oy) * ox * ox * 2.5;
            //  xx += map(cos(x * t), -1, 1, 0.5, 1) * 0.5;
            //  yy += map(sin(y * t), -1, 1, 0.5, 1) * 0.5;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 1.0 - 1.2, (yy + ranY) * 0.05 * 1.0 - 1.3);
            i++;
        }
    }
};

let breakingApartAndGatheringAgain = new Scene("breaking-apart-and-gathering-again");

breakingApartAndGatheringAgain.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 30) * 0.025;
    let a = 0.00005 * sin(t * 0.5);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x - 100;
            let oy = y - 50;
            let dx = abs(cos(x) * 0.01 - 25);
            let dy = abs(sin(y) * 0.01 - 25);
            let xx = x + pow(cos(a * ox * oy + t * 0.0005), 700) * sin(ox * oy) * ox * ox * 2.5;
            let yy = y + pow(sin(a * ox * oy + t * 0.0005), 700) * sin(ox * oy) * ox * ox * 2.5;
            //  xx += map(cos(x * t), -1, 1, 0.5, 1) * 0.5;
            //  yy += map(sin(y * t), -1, 1, 0.5, 1) * 0.5;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 1.0 - 1.2, (yy + ranY) * 0.05 * 1.0 - 1.3);
            i++;
        }
    }
};

let anotherBreakingApartAndGatheringAgain = new Scene("another-breaking-apart-and-gathering-again");

anotherBreakingApartAndGatheringAgain.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 14000) * 0.025;
    let a = 0.00005 * sin(t * 0.5);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x - 100;
            let oy = y - 50;
            let dx = abs(cos(x) * 0.01 - 25);
            let dy = abs(sin(y) * 0.01 - 25);
            let xx = x + pow(cos(a * ox * oy + t * 0.0005), 700) * sin(ox * oy) * ox * ox * 2.5;
            let yy = y + pow(sin(a * ox * oy + t * 0.0005), 700) * sin(ox * oy) * ox * ox * 2.5;
            //  xx += map(cos(x * t), -1, 1, 0.5, 1) * 0.5;
            //  yy += map(sin(y * t), -1, 1, 0.5, 1) * 0.5;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 1.0 - 1.2, (yy + ranY) * 0.05 * 1.0 - 1.3);
            i++;
        }
    }
};

let moreBreakingAndGathering = new Scene("more-breaking-and-gathering");

moreBreakingAndGathering.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 14000) * 0.025;
    let a = 0.0005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x - 100;
            let oy = y - 50;
            let dx = abs(cos(x) * 0.01 - 25);
            let dy = abs(sin(y) * 0.01 - 25);
            let xx = x + pow(cos(a * ox * oy + t * 0.000005), 70) * sin(ox * oy) * ox * ox * 2.5;
            let yy = y + pow(sin(a * ox * oy + t * 0.0005), 700) * sin(ox * oy) * ox * ox * 2.5;
            //  xx += map(cos(x * t), -1, 1, 0.5, 1) * 0.5;
            //  yy += map(sin(y * t), -1, 1, 0.5, 1) * 0.5;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 1.0 - 1.2, (yy + ranY) * 0.05 * 1.0 - 1.3);
            i++;
        }
    }
};

let bigTravelInABrokenLand = new Scene("big-travel-in-a-broken-land");

bigTravelInABrokenLand.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 14000) * 0.025;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + 100 * cos(t * 0.5);
            let oy = y + 100 * sin(t * 0.5);
            let dx = abs(cos(x) * 0.01 - 25);
            let dy = abs(sin(y) * 0.01 - 25);
            let xx = x + pow(cos(a * ox * oy + t * 0.000005), 70) * sin(ox * oy) * ox * ox * 2.5;
            let yy = y + pow(sin(a * ox * oy + t * 0.0005), 700) * sin(ox * oy) * ox * ox * 2.5;
            //  xx += map(cos(x * t), -1, 1, 0.5, 1) * 0.5;
            //  yy += map(sin(y * t), -1, 1, 0.5, 1) * 0.5;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 1.0 - 1.2, (yy + ranY) * 0.05 * 1.0 - 1.3);
            i++;
        }
    }
};

let subtleTravelInADistanceField = new Scene("subtle-travel-in-a-distance-field");

subtleTravelInADistanceField.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 14000) * 0.005;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + 100 * cos(t * 0.5);
            let oy = y + 100 * sin(t * 0.5);
            let dx = abs(cos(x) * 0.01 - 25);
            let dy = abs(sin(y) * 0.01 - 25);
            let xx = x + pow(cos(a * ox * oy + t * 0.0005), 7000) * sin(ox * oy) * ox * ox * 2.5;
            let yy = y + pow(sin(a * ox * oy + t * 0.0005), 7000) * sin(ox * oy) * oy * oy * 2.5;
            //  xx += map(cos(x * t), -1, 1, 0.5, 1) * 0.5;
            //  yy += map(sin(y * t), -1, 1, 0.5, 1) * 0.5;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 1.0 - 1.2, (yy + ranY) * 0.05 * 1.0 - 1.3);
            i++;
        }
    }
};

let holesInThePatternLaterInTime = new Scene("holes-in-the-pattern-later-in-time");

holesInThePatternLaterInTime.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10000) * 0.0005;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + 1 * cos(t * 5);
            let oy = y + 1 * sin(t * 5);
            let dx = abs(cos(x) * 10 - 25);
            let dy = abs(sin(y) * 10 - 25);
            let xx = x + pow(cos(a * dx * dy + t * 0.0005), abs(floor(700 * sin(t * 10)))) * sin(ox * oy) * ox * ox * 1;
            let yy = y + pow(sin(a * dx * dy + t * 0.0005), abs(floor(700 * sin(t * 10)))) * sin(ox * oy) * oy * oy * 1;
            //  xx += map(cos(x * t), -1, 1, 0.5, 1) * 0.5;
            //  yy += map(sin(y * t), -1, 1, 0.5, 1) * 0.5;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 1.0 - 1.2, (yy + ranY) * 0.05 * 1.0 - 1.3);
            i++;
        }
    }
};

let fourmillements = new Scene("fourmillements");

fourmillements.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 1000) * 0.005;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + 1 * cos(t * 5);
            let oy = y + 1 * sin(t * 5);
            let dx = abs(cos(x) * 10 - 25);
            let dy = abs(sin(y) * 10 - 25);
            let xx = x + pow(cos(a * dx * dy + t * 5), 700);
            let yy = y + pow(sin(a * dx * dy + t * 5), 700);
            //  xx += map(cos(x * t), -1, 1, 0.5, 1) * 0.5;
            //  yy += map(sin(y * t), -1, 1, 0.5, 1) * 0.5;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 1.0 - 1.2, (yy + ranY) * 0.05 * 1.0 - 1.3);
            i++;
        }
    }
};

let fourmillementsPlusLoin = new Scene("fourmillements-plus-loin");

fourmillementsPlusLoin.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10000) * 0.005;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + 1 * cos(t * 5);
            let oy = y + 1 * sin(t * 5);
            let dx = abs(cos(x) * 10 - 25);
            let dy = abs(sin(y) * 10 - 25);
            let xx = x + pow(cos(a * dx * dy + t * 5), 700);
            let yy = y + pow(sin(a * dx * dy + t * 5), 700);
            //             xx += map(cos(x * t), -1, 1, 0.5, 1) * 0.5;
            //             yy += map(sin(y * t), -1, 1, 0.5, 1) * 0.5;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 1.0 - 1.2, (yy + ranY) * 0.05 * 1.0 - 1.3);
            i++;
        }
    }
};

let fourmillementsEncorePlusLoin = new Scene("fourmillements-encore-plus-loin");

fourmillementsEncorePlusLoin.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 100000) * 0.005;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + 1 * cos(t * 5);
            let oy = y + 1 * sin(t * 5);
            let dx = abs(cos(x) * 10 - 25);
            let dy = abs(sin(y) * 10 - 25);
            let xx = x + pow(cos(a * dx * dy + t * 5), 700);
            let yy = y + pow(sin(a * dx * dy + t * 5), 700);
            //  xx += map(cos(x * t), -1, 1, 0.5, 1) * 0.5;
            //  yy += map(sin(y * t), -1, 1, 0.5, 1) * 0.5;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 1.0 - 1.2, (yy + ranY) * 0.05 * 1.0 - 1.3);
            i++;
        }
    }
};

let fourmillementsEncorePlusLoin2 = new Scene("fourmillements-encore-plus-loin-2");

fourmillementsEncorePlusLoin2.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 100800) * 0.005;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + 1 * cos(t * 5);
            let oy = y + 1 * sin(t * 5);
            let dx = abs(cos(x) * 10 - 25);
            let dy = abs(sin(y) * 10 - 25);
            let xx = x + pow(cos(a * dx * dy + t * 5), 700);
            let yy = y + pow(sin(a * dx * dy + t * 5), 700);
            //  xx += map(cos(x * t), -1, 1, 0.5, 1) * 0.5;
            //  yy += map(sin(y * t), -1, 1, 0.5, 1) * 0.5;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 1.0 - 1.2, (yy + ranY) * 0.05 * 1.0 - 1.3);
            i++;
        }
    }
};

let newTraffic = new Scene("new-traffic");

newTraffic.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + 1 * cos(t * 5);
            let oy = y + 1 * sin(t * 5);
            let dx = abs(cos(x) * 10 - 25);
            let dy = abs(sin(y) * 10 - 25);
            let xx = x + pow(cos(dy + a * dx + t * 5), 700);
            let yy = y + pow(sin(dx + a * dy + t * 5), 700);
            //  xx += map(cos(x * t), -1, 1, 0.5, 1) * 0.5;
            //  yy += map(sin(y * t), -1, 1, 0.5, 1) * 0.5;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 1.0 - 1.2, (yy + ranY) * 0.05 * 1.0 - 1.3);
            i++;
        }
    }
};

let newTrafficFaster = new Scene("new-traffic-faster");

newTrafficFaster.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + 1 * cos(t * 5);
            let oy = y + 1 * sin(t * 5);
            let dx = abs(cos(x) * 10 - 25);
            let dy = abs(sin(y) * 10 - 25);
            let xx = x + pow(cos(dy + a * dx + t * 5), 70);
            let yy = y + pow(sin(dx + a * dy + t * 5), 70);
            //  xx += map(cos(x * t), -1, 1, 0.5, 1) * 0.5;
            //  yy += map(sin(y * t), -1, 1, 0.5, 1) * 0.5;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 1.0 - 1.2, (yy + ranY) * 0.05 * 1.0 - 1.3);
            i++;
        }
    }
};

let shiftingWithDepth = new Scene("shifting-with-depth");

shiftingWithDepth.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + 1 * cos(t * 5);
            let oy = y + 1 * sin(t * 5);
            let dx = abs(cos(x) * 10 - 25);
            let dy = abs(sin(y) * 10 - 25);
            let xx = x + pow(cos(cos(dx * 0.01 + dy * 0.01) + t * 2), -1);
            let yy = y + pow(sin(sin(dx * 0.01 + dy * 0.01) + t * 2), -1);
            //  xx += map(cos(x * t), -1, 1, 0.5, 1) * 2;
            //  yy += map(sin(y * t), -1, 1, 0.5, 1) * 2;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 1.0 - 1.2, (yy + ranY) * 0.05 * 1.0 - 1.3);
            i++;
        }
    }
};

let shiftingWithDepthFasterMoreChaotic = new Scene("shifting-with-depth-faster-more-chaotic");

shiftingWithDepthFasterMoreChaotic.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.015;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + 1 * cos(t * 5);
            let oy = y + 1 * sin(t * 5);
            let dx = abs(cos(x) * 10 - 250);
            let dy = abs(sin(y) * 10 - 250);
            let xx = x + pow(cos(cos(dx * 0.01 + dy * 0.01) + t * 2), -1);
            let yy = y + pow(sin(sin(dx * 0.01 + dy * 0.01) + t * 2), -1);
            //  xx += map(cos(x * t), -1, 1, 0.5, 1) * 2;
            //  yy += map(sin(y * t), -1, 1, 0.5, 1) * 2;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 1.0 - 1.2, (yy + ranY) * 0.05 * 1.0 - 1.3);
            i++;
        }
    }
};

let shiftingWithDepthEvenMoreFaster = new Scene("shifting-with-depth-even-more-faster");

shiftingWithDepthEvenMoreFaster.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.015;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + 1 * cos(t * 5);
            let oy = y + 1 * sin(t * 5);
            let dx = abs(cos(x) * 10 - 250);
            let dy = abs(sin(y) * 10 - 250);
            let xx = x + pow(cos(cos(dx * 0.02 + dy * 0.02) + t * 2), -1);
            let yy = y + pow(sin(sin(dx * 0.02 + dy * 0.02) + t * 2), -1);
            //  xx += map(cos(x * t), -1, 1, 0.5, 1) * 2;
            //  yy += map(sin(y * t), -1, 1, 0.5, 1) * 2;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 1.0 - 1.2, (yy + ranY) * 0.05 * 1.0 - 1.3);
            i++;
        }
    }
};

let pillarsInACavern = new Scene("pillars-in-a-cavern");

pillarsInACavern.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.015;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + 1 * cos(t * 5);
            let oy = y + 1 * sin(t * 5);
            let dx = abs(cos(x) * 10 - 250);
            let dy = abs(sin(y) * 10 - 250);
            let xx = x + pow(cos(cos(dx + oy * 0.1 + dy * 0.02) + t * 2), 20);
            let yy = y + pow(sin(sin(dx + oy * 0.1 + dy * 0.02) + t * 2), 20);
            //             xx += map(cos(x * t), -1, 1, 0.5, 1) * 2;
            //             yy += map(sin(y * t), -1, 1, 0.5, 1) * 2;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 1.0 - 1.2, (yy + ranY) * 0.05 * 1.0 - 1.3);
            i++;
        }
    }
};

let curvierPillars = new Scene("curvier-pillars");

curvierPillars.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.015;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + 1 * cos(t * 5);
            let oy = y + 1 * sin(t * 5);
            let dx = abs(cos(x) * 1 - 250);
            let dy = abs(sin(y) * 1 - 250);
            let xx = x + pow(cos(cos(dx + oy * 0.1 + dy * 0.02) + t * 2), 20);
            let yy = y + pow(sin(sin(dx + oy * 0.1 + dy * 0.02) + t * 2), 20);
            //             xx += map(cos(x * t), -1, 1, 0.5, 1) * 2;
            //             yy += map(sin(y * t), -1, 1, 0.5, 1) * 2;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 1.0 - 1.2, (yy + ranY) * 0.05 * 1.0 - 1.3);
            i++;
        }
    }
};

let curvierPillarsSmaller = new Scene("curvier-pillars-smaller");

curvierPillarsSmaller.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.015;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + 1 * cos(t * 5);
            let oy = y + 1 * sin(t * 5);
            let dx = abs(cos(x) * 1 - 25);
            let dy = abs(sin(y) * 1 - 25);
            let xx = x + pow(cos(cos(dx + oy * 0.1 + dy * 0.02) + t * 2), 20);
            let yy = y + pow(sin(sin(dx + oy * 0.1 + dy * 0.02) + t * 2), 20);
            //             xx += map(cos(x * t), -1, 1, 0.5, 1) * 2;
            //             yy += map(sin(y * t), -1, 1, 0.5, 1) * 2;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 1.0 - 1.2, (yy + ranY) * 0.05 * 1.0 - 1.3);
            i++;
        }
    }
};

let curvierPillarsEvenSmaller = new Scene("curvier-pillars-even-smaller");

curvierPillarsEvenSmaller.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.015;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + 1 * cos(t * 5);
            let oy = y + 1 * sin(t * 5);
            let dx = abs(cos(x) * 1 - 25);
            let dy = abs(sin(y) * 1 - 25);
            let xx = x + pow(cos(cos(dx + oy * 0.1 + dy * 0.02) + t * 2), 200);
            let yy = y + pow(sin(sin(dx + oy * 0.1 + dy * 0.02) + t * 2), 200);
            //             xx += map(cos(x * t), -1, 1, 0.5, 1) * 2;
            //             yy += map(sin(y * t), -1, 1, 0.5, 1) * 2;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 1.0 - 1.2, (yy + ranY) * 0.05 * 1.0 - 1.3);
            i++;
        }
    }
};

let intricateFastPillars = new Scene("intricate-fast-pillars");

intricateFastPillars.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.015;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + 1 * cos(t * 5);
            let oy = y + 1 * sin(t * 5);
            let dx = abs(cos(x) * 1 - 25);
            let dy = abs(sin(y) * 1 - 25);
            let xx = x + pow(cos(cos(dx + oy * 0.1 + dy * 0.2) + t * 2), 200);
            let yy = y + pow(sin(sin(dx + oy * 0.1 + dy * 0.2) + t * 2), 200);
            //             xx += map(cos(x * t), -1, 1, 0.5, 1) * 2;
            //             yy += map(sin(y * t), -1, 1, 0.5, 1) * 2;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 1.0 - 1.2, (yy + ranY) * 0.05 * 1.0 - 1.3);
            i++;
        }
    }
};

let muscleFibersRebuildingThemselves = new Scene("Muscle fibers rebuilding themselves");

muscleFibersRebuildingThemselves.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x + 1 * cos(t * 5);
            let oy = y + 1 * sin(t * 5);
            let dx = abs(cos(x) * 1 - 2) * 0.25;
            let dy = abs(sin(y) * 1 - 2) * 0.25;
            let xx = x + pow(cos(cos(dx + oy * 0.1 + dy * 0.2) + t * 2), -1) * 0.25;
            let yy = y + pow(sin(sin(dx + oy * 0.1 + dy * 0.2) + t * 2), -1) * 0.25;
            //             xx += map(cos(x * t), -1, 1, 0.5, 0.4) * 2;
            //             yy += map(sin(y * t), -1, 1, 0.5, 0.4) * 2;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 1.0 - 1.2, (yy + ranY) * 0.05 * 1.0 - 1.3);
            i++;
        }
    }
};

let distanceFieldsAndMuscles = new Scene("Distance fields and muscles");

distanceFieldsAndMuscles.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x;
            let oy = y;
            let dx = abs(cos(x) * 1) * 0.25;
            let dy = abs(sin(y) * 1) * 0.25;
            let xx = x + pow(cos(cos(dx + oy * ox * 0.01 + dy * 0.2) + t * 2), -1) * 0.25;
            let yy = y + pow(sin(sin(dx + oy * ox * 0.01 + dy * 0.2) + t * 2), -1) * 0.25;
            //             xx += map(cos(x * t), -1, 1, 0.5, 0.4) * 2;
            //             yy += map(sin(y * t), -1, 1, 0.5, 0.4) * 2;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 1.0 - 1.2, (yy + ranY) * 0.05 * 1.0 - 1.3);
            i++;
        }
    }
};

let middleOfTheMuscularDistanceField = new Scene("Middle of the muscular distance field");

middleOfTheMuscularDistanceField.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x - 25;
            let oy = y;
            let dx = abs(cos(x) * 1) * 0.25;
            let dy = abs(sin(y) * 1) * 0.25;
            let xx = x + pow(cos(cos(dx + oy * ox * 0.01) + t * 1.5), -1) * 0.25;
            let yy = y + pow(sin(sin(dx + oy * ox * 0.01) + t * 1.5), -1) * 0.25;
            //             xx += map(cos(x * t), -1, 1, 0.5, 0.4) * 2;
            //             yy += map(sin(y * t), -1, 1, 0.5, 0.4) * 2;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 1.0 - 1.2, (yy + ranY) * 0.05 * 1.0 - 1.3);
            i++;
        }
    }
};

let laceInTheDistanceField = new Scene("Lace in the distance field");

laceInTheDistanceField.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x - 25;
            let oy = y;
            let dx = abs(cos(x) * 1) * 0.25;
            let dy = abs(sin(y) * 1) * 0.25;
            let xx = x + pow(cos((oy * ox * 0.01) + t * 2), 200) * -5;
            let yy = y + pow(sin((oy * ox * 0.01) + t * 2), 200) * -5;
            //             xx += map(cos(x * t), -1, 1, 0.5, 0.4) * 2;
            //             yy += map(sin(y * t), -1, 1, 0.5, 0.4) * 2;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 1.0 - 1.2, (yy + ranY) * 0.05 * 1.0 - 1.3);
            i++;
        }
    }
};

let laceInTheVerticalMiddle = new Scene("Lace in vertical middle of the distance field");

laceInTheVerticalMiddle.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x - 25;
            let oy = y - 25 * map(sin(t), -1, 1, 0, 1);
            let dx = abs(cos(x) * 1) * 0.25;
            let dy = abs(sin(y) * 1) * 0.25;
            let xx = x + pow(cos((oy * ox * 0.01) + t * 2), 200) * -5;
            let yy = y + pow(sin((oy * ox * 0.01) + t * 2), 200) * -5;
            //             xx += map(cos(x * t), -1, 1, 0.5, 0.4) * 2;
            //             yy += map(sin(y * t), -1, 1, 0.5, 0.4) * 2;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 1.0 - 1.2, (yy + ranY) * 0.05 * 1.0 - 1.3);
            i++;
        }
    }
};

let noodles = new Scene("Noodles");

noodles.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x - 25;
            let oy = y + 25;
            let dx = abs(cos(x) * 1) * 0.25;
            let dy = abs(sin(y) * 1) * 0.25;
            let xx = x + pow(cos((dx * ox * oy * 0.01) + t * 2), 200) * -5;
            let yy = y + pow(sin((dy * oy * ox * 0.01) + t * 2), 200) * -5;
            //             xx += map(cos(x * t), -1, 1, 0.5, 0.4) * 2;
            //             yy += map(sin(y * t), -1, 1, 0.5, 0.4) * 2;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 1.0 - 1.2, (yy + ranY) * 0.05 * 1.0 - 1.3);
            i++;
        }
    }
};

let beautifulOceanWaves = new Scene("Beautiful ocean waves");

beautifulOceanWaves.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.05;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    let ix = 1,
        iy = 1;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x - 50;
            let oy = y + 50;
            let dx = abs(cos(x) * 1) * 0.25;
            let dy = abs(sin(y) * 1) * 0.25;
            let xx = x;
            let yy = y;
            //             xx += map(cos(x + t), -1, 1, 0.5, 0.4) * sin(ox);
            //             yy += map(sin(y + t), -1, 1, 0.5, 0.4) * sin(ox);
            xx += cos(ix * ox * 0.0125 + ix + i * 0.1 + t);
            yy += sin(iy * ox * 0.0125 + ix + iy + t);
            if (i == 0) {
                oriX = xx;
            }
            ix = xx;
            iy = yy;
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 1.0 - 1.2, (yy + ranY) * 0.05 * 1.0 - 1.3);
            i++;
            //             ix++;
        }
    }
};


let centralBrain = new Scene("Central brain");

centralBrain.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800 + 20000) * 0.05;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    let ix = 1,
        iy = 1;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x - 92;
            let oy = y - 95;
            let dx = abs(cos(x) * 1) * 0.25;
            let dy = abs(sin(y) * 1) * 0.25;
            let xx = x;
            let yy = y;
            //             xx += map(cos(x + t), -1, 1, 0.5, 0.4) * sin(ox);
            //             yy += map(sin(y + t), -1, 1, 0.5, 0.4) * sin(ox);
            xx += cos(t * 4e-2 + oy * 0.1 * ox + ix * ox * 0.005 + ix + iy * 0.5 + t);
            yy += sin(t * 4e-2 + oy * 0.1 * ox + iy * ox * 0.005 + ix + iy * 0.5 + t);
            if (i == 0) {
                oriX = xx;
            }
            ix = xx;
            iy = yy;
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 1.0 - 1.2, (yy + ranY) * 0.05 * 1.0 - 1.3);
            i++;
            //             ix++;
        }
    }
};

let plantsSofter = new Scene("Plants, softer");

plantsSofter.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800 + 20000) * 0.05;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    let ix = 1,
        iy = 1;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x - 92;
            let oy = y - 95;
            let dx = abs(cos(x) * 1) * 0.25;
            let dy = abs(sin(y) * 1) * 0.25;
            let xx = x;
            let yy = y;
            //             xx += map(cos(x + t), -1, 1, 0.5, 0.4) * sin(ox) * 20;
            //             yy += map(sin(y + t), -1, 1, 0.5, 0.4) * sin(ox) * 20;
            xx += cos((ix - 45) * iy * 1.5e-2 + t);
            yy += sin(ix * iy * 1.5e-2 + t);
            xx += cos((ix - 45) * (iy - 50) * 1.5e-2 + t);
            yy += sin(ix * (iy - 50) * 1.5e-2 + t);
            if (i == 0) {
                oriX = xx;
            }
            ix = xx;
            iy = yy;
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 1.0 - 1.2, (yy + ranY) * 0.05 * 1.0 - 1.3);
            i++;
            //             ix++;
        }
    }
};

let rotatingMouth = new Scene("Rotating mouth");

rotatingMouth.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800 + 20000) * 0.05;
    let i = 0;
    let ix = 1,
        iy = 1;
    let sosc = function(i, min, max) {
        return map(Math.sin(i), -1, 1, min, max);
    };
    let cosc = function(i, min, max) {
        return map(Math.cos(i), -1, 1, min, max);
    };
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let dx = map(abs(x - 50), 0, 200, 10 * sosc(t * 1, -0.15, 0.15), 0);
            let dy = map(abs(y - 50), 0, 200, 10 * cosc(t * 1, -0.15, 0.15), 0);
            let a = atan2(y - abs(y - 50), x - abs(x - 50));
            let xx = x - 25 + cos(a * 5 + dy * 2) * dx;
            let yy = y - 25 + sin(a * 5 + dy * 2) * dx;
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx + ranX) * 0.05 * 0.88 + 0.05, (yy + ranY) * 0.05 * 0.88 + 0.025);
            i++;
            //             ix++;
        }
    }
};

let calmBrook = new Scene("Calm brook");

calmBrook.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 0) * 0.1;
    let i = 0;
    let ix = 1,
        iy = 1;
    let sosc = function(i, min, max) {
        return map(Math.sin(i), -1, 1, min, max);
    };
    let cosc = function(i, min, max) {
        return map(Math.cos(i), -1, 1, min, max);
    };
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let dx = map(abs(x - 25), 0, 25, 0, 1);
            let dy = map(abs(y - 25), 0, 25, 0, 1);
            let a = atan2(y - abs(y - 50), x - abs(x - 50));
            let xx = x - 25 + tan(cos(y + a + t) * sin(a));
            let yy = y - 25 + tan(sin(x + a + t) * sin(a));
            //          
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            //          
            xx = (xx + ranX) * 0.05 * 0.88 + 0.05;
            yy = (yy + ranY) * 0.05 * 0.88 + 0.025;
            this.vertices.push(xx, yy);
            i++;
            //             ix++;
        }
    }
};

let renaissanceBalconies = new Scene("Renaissance balconies");

renaissanceBalconies.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 0) * 0.1;
    let i = 0;
    let ix = 1,
        iy = 1;
    let sosc = function(i, min, max) {
        return map(Math.sin(i), -1, 1, min, max);
    };
    let cosc = function(i, min, max) {
        return map(Math.cos(i), -1, 1, min, max);
    };
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let dx = map(abs(x - 25), 0, 25, 0, 1);
            let dy = map(abs(y - 25), 0, 25, 0, 1);
            let a = atan2(y - abs(y - 50), x - abs(x - 50));
            let xx = x - 25 + tan(cos(y + a + t) * sin(a));
            let yy = y - 25 + tan(sin(x + a + t) * sin(a));
            //          
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            //          
            xx = (xx + ranX) * 0.05 * 0.88 + 0.05;
            yy = (yy + ranY) * 0.05 * 0.88 + 0.025;
            this.vertices.push(xx, yy);
            i++;
            //             ix++;
        }
    }
};

let flowyCarnival = new Scene("Flower carnival");

flowyCarnival.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x;
            let oy = y;
            let dx = abs(cos(x) * 0.01) * 8;
            let dy = abs(sin(y) * 0.01) * 8;
            let xx = x + pow(cos((dx + 19) * 3 * (dy - 4) + t * 12) * 0.01, 0.15) * 5;
            let yy = y + pow(sin((dx + 19) * 3 * (dy - 4) + t * 12) * 0.01, 0.15) * 5;
            //             xx += map(cos(x * t), -1, 1, 0.5, 0.4) * 2;
            //             yy += map(sin(y * t), -1, 1, 0.5, 0.4) * 2;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 0.8 - 1.05, (yy + ranY) * 0.045 * 1.0 - 1.2);
            i++;
        }
    }
};

let hungryClouds = new Scene("Hungry clouds");

hungryClouds.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x;
            let oy = y;
            let dx = cos(x * 0.5);
            let dy = sin(y * 0.5);
            let xx = x + pow((cos((sin(dx + dy)) + t * 20)), sin(dy * 0.1));
            let yy = y + pow((sin((sin(dx + dy)) + t * 20)), sin(dy * 0.1));
            //             xx += map(cos(x * t), -1, 1, 0.5, 0.4) * 2;
            //             yy += map(sin(y * t), -1, 1, 0.5, 0.4) * 2;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 0.95 - 1.045, (yy + ranY) * 0.045 * 1.0 - 1.2);
            i++;
        }
    }
};

let moreHungryClouds = new Scene("More hungry clouds");

moreHungryClouds.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x;
            let oy = y;
            let dx = cos(x * 0.75 * 0.5);
            let dy = sin(y * 0.5 * 0.5);
            let xx = x + pow((cos((sin(dx + dy)) + t * 20)), sin(dy * 0.1));
            let yy = y + pow((sin((sin(dx + dy)) + t * 20)), sin(dy * 0.1));
            //             xx += map(cos(x * t), -1, 1, 0.5, 0.4) * 2;
            //             yy += map(sin(y * t), -1, 1, 0.5, 0.4) * 2;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 0.95 - 1.045, (yy + ranY) * 0.045 * 1.0 - 1.2);
            i++;
        }
    }
};

let yetMoreHungryClouds = new Scene("Yet more hungry clouds");

yetMoreHungryClouds.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x;
            let oy = y;
            let dx = cos(x * 0.85 * 0.5);
            let dy = sin(y * 0.5 * 0.5);
            let xx = x + pow(map(cos((sin(dx + dy)) + t * 25), -1, 1, -0.25, 2), 0.1);
            let yy = y + pow(map(sin((sin(dx + dy)) + t * 25), -1, 1, -0.25, 2), 0.1);
            //             xx += map(cos(x * t), -1, 1, 0.5, 0.4) * 2;
            //             yy += map(sin(y * t), -1, 1, 0.5, 0.4) * 2;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 0.95 - 1.045, (yy + ranY) * 0.045 * 1.0 - 1.2);
            i++;
        }
    }
};

let biggerHungryClouds = new Scene("Bigger hungry clouds");

biggerHungryClouds.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x;
            let oy = y;
            let dx = cos(x * 0.85 * 0.35);
            let dy = sin(y * 0.5 * 0.35);
            let xx = x + pow(map(cos((sin(dx + dy)) + t * 25), -1, 1, -0.25, 2), 0.1);
            let yy = y + pow(map(sin((sin(dx + dy)) + t * 25), -1, 1, -0.25, 2), 0.1);
            //             xx += map(cos(x * t), -1, 1, 0.5, 0.4) * 2;
            //             yy += map(sin(y * t), -1, 1, 0.5, 0.4) * 2;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 0.95 - 1.045, (yy + ranY) * 0.045 * 1.0 - 1.2);
            i++;
        }
    }
};

let rectangularHungryClouds = new Scene("Rectangular hungry clouds");

rectangularHungryClouds.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x;
            let oy = y;
            let dx = cos(x * 0.85 * 0.35);
            let dy = sin(y * 0.5 * 0.35);
            let xx = x + pow(map(cos((sin(dx * dy)) + t * 6), -1, 1, -0.01, 1), 0.1);
            let yy = y + pow(map(sin((sin(dx * dy)) + t * 6), -1, 1, -0.01, 1), 0.1);
            //             xx += map(cos(x * t), -1, 1, 0.5, 0.4) * 2;
            //             yy += map(sin(y * t), -1, 1, 0.5, 0.4) * 2;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 0.95 - 1.045, (yy + ranY) * 0.045 * 1.0 - 1.2);
            i++;
        }
    }
};

let rectangularHungryCloudsSlower = new Scene("Rectangular hungry clouds, slower");

rectangularHungryCloudsSlower.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x;
            let oy = y;
            let dx = cos(x * 0.85 * 0.5);
            let dy = sin(y * 0.5 * 0.5);
            let xx = x + pow(map(cos((sin(dx * dy) + dy) + t * 6), -1, 1, -0.01, 1), 0.1);
            let yy = y + pow(map(sin((sin(dx * dy) + dy) + t * 6), -1, 1, -0.01, 1), 0.1);
            //             xx += map(cos(x * t), -1, 1, 0.5, 0.4) * 2;
            //             yy += map(sin(y * t), -1, 1, 0.5, 0.4) * 2;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 0.95 - 1.045, (yy + ranY) * 0.045 * 1.0 - 1.2);
            i++;
        }
    }
};

let eggs = new Scene("Eggs");

eggs.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x;
            let oy = y;
            let dx = cos(x * 0.85 * 0.35);
            let dy = sin(y * 0.5 * 0.35);
            let xx = x + pow(map(cos((sin(dx * dy) + dx * dx) + t * 12), -1, 1, -0.01, 1), 20);
            let yy = y + pow(map(sin((sin(dx * dy) + dy * dx) + t * 12), -1, 1, -0.01, 1), 20);
            //             xx += map(cos(x * t), -1, 1, 0.5, 0.4) * 2;
            //             yy += map(sin(y * t), -1, 1, 0.5, 0.4) * 2;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 0.95 - 1.045, (yy + ranY) * 0.045 * 1.0 - 1.2);
            i++;
        }
    }
};

let eggs2 = new Scene("Eggs 2");

eggs2.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x;
            let oy = y;
            let dx = cos(x * 0.85 * 0.35);
            let dy = sin(y * 0.5 * 0.35);
            let xx = x + pow(map(cos((sin(dx + dy) + dx * dx) + t * 12), -1, 1, -0.01, 1), 20);
            let yy = y + pow(map(sin((sin(dx + dy) + dy * dx) + t * 12), -1, 1, -0.01, 1), 20);
            //             xx += map(cos(x * t), -1, 1, 0.5, 0.4) * 2;
            //             yy += map(sin(y * t), -1, 1, 0.5, 0.4) * 2;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 0.95 - 1.045, (yy + ranY) * 0.045 * 1.0 - 1.2);
            i++;
        }
    }
};

let beautifulEggs = new Scene("Beautiful eggs");

beautifulEggs.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x;
            let oy = y;
            let dx = cos(x * 0.85 * 0.35);
            let dy = sin(y * 0.5 * 0.35);
            let xx = x + pow(map(cos((sin(dx + dy) + dx + dx) + t * 12), -1, 1, -0.01, 1), 20);
            let yy = y + pow(map(sin((sin(dx + dy) + dy + dx) + t * 12), -1, 1, -0.01, 1), 20);
            //             xx += map(cos(x * t), -1, 1, 0.5, 0.4) * 2;
            //             yy += map(sin(y * t), -1, 1, 0.5, 0.4) * 2;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 0.95 - 1.045, (yy + ranY) * 0.045 * 1.0 - 1.2);
            i++;
        }
    }
};

let electronicDecorativeEggs = new Scene("Electronic decorative eggs");

electronicDecorativeEggs.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x;
            let oy = y;
            let dx = cos(x * 0.8 * 0.35);
            let dy = sin(y * 0.5 * 0.35);
            let xx = x + pow(map(cos((dx) + dy + t * 12), -1, 1, 0, 1), 50) * 2;
            let yy = y + pow(map(sin((dy) + dy + t * 12), -1, 1, 0, 1), 50) * 2;
            //             xx += map(cos(x * t), -1, 1, 0.5, 0.4) * 2;
            //             yy += map(sin(y * t), -1, 1, 0.5, 0.4) * 2;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 0.95 - 1.045, (yy + ranY) * 0.045 * 1.0 - 1.2);
            i++;
        }
    }
};

let cryingFace = new Scene("Crying face");

cryingFace.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x;
            let oy = y;
            let dx = cos(x * 0.8 * 0.35);
            let dy = sin(y * 0.5 * 0.35);
            let xx = x + pow(map(cos(dx + dx + t * 12), -1, 1, -1, 0), 50) * 2;
            let yy = y + pow(map(sin(dy + dx + t * 12), -1, 1, -1, 0), 50) * 2;
            //             xx += map(cos(x * t), -1, 1, 0.5, 0.4) * 2;
            //             yy += map(sin(y * t), -1, 1, 0.5, 0.4) * 2;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 0.95 - 1.045, (yy + ranY) * 0.045 * 1.0 - 1.2);
            i++;
        }
    }
};

let smallEggs = new Scene("Small eggs");

smallEggs.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x;
            let oy = y;
            let dx = cos(x * 2 * 0.5);
            let dy = sin(y * 0.5 * 0.5);
            let xx = x + pow(map(cos(dx * 0.5 + dy * 2.0 + t * 12), -1, 1, -1, 0), 20) * 2;
            let yy = y + pow(map(sin(dy * 0.5 + dy * 0.5 + t * 12), -1, 1, -1, 0), 20) * 2;
            //             xx += map(cos(x * t), -1, 1, 0.5, 0.4) * 2;
            //             yy += map(sin(y * t), -1, 1, 0.5, 0.4) * 2;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 0.95 - 1.045, (yy + ranY) * 0.045 * 1.0 - 1.2);
            i++;
        }
    }
};

let electronicEggs = new Scene("Electronic eggs");

electronicEggs.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x;
            let oy = y;
            let dx = cos(x * 2 * 0.15);
            let dy = sin(y * 0.5 * 0.15);
            let xx = x + pow(map(cos(dx * 0.5 * dy * 2.0 + t * 6), -1, 1, -1, 0), 200) * 4;
            let yy = y + pow(map(sin(dy * 0.5 * dy * 0.5 + t * 6), -1, 1, -1, 0), 200) * 4;
            //             xx += map(cos(x * t), -1, 1, 0.5, 0.4) * 2;
            //             yy += map(sin(y * t), -1, 1, 0.5, 0.4) * 2;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 0.95 - 1.045, (yy + ranY) * 0.045 * 1.0 - 1.2);
            i++;
        }
    }
};

let cavernousEggs = new Scene("Cavernous eggs");

cavernousEggs.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x;
            let oy = y;
            let dx = cos((x + x * 100) * 2 * 0.15);
            let dy = sin((y + x * 0.01) * 0.5 * 0.15);
            let xx = x + pow(map(cos(dx * 0.5 * dy * 2.0 + t * 6), -1, 1, -1, 0), 200) * 4;
            let yy = y + pow(map(sin(dy * 0.5 * dy * 0.5 + t * 6), -1, 1, -1, 0), 200) * 4;
            //             xx += map(cos(x * t), -1, 1, 0.5, 0.4) * 2;
            //             yy += map(sin(y * t), -1, 1, 0.5, 0.4) * 2;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 0.95 - 1.045, (yy + ranY) * 0.045 * 1.0 - 1.2);
            i++;
        }
    }
};

let moreWorkOnTheEggs = new Scene("More work on the eggs");

moreWorkOnTheEggs.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x - 6;
            let oy = y + 30;
            let dx = cos(ox * 0.85 * 0.5);
            let dy = sin(oy * 0.5 * 0.5);
            let xx = x + pow(map(cos((sin(dx + dy)) + t * 4), -1, 1, -0.25, 2), 0.1);
            let yy = y + pow(map(sin((sin(dx + dy)) + t * 4), -1, 1, -0.25, 2), 0.1);
            //             xx += map(cos(x * t), -1, 1, 0.5, 0.4) * 2;
            //             yy += map(sin(y * t), -1, 1, 0.5, 0.4) * 2;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 0.95 - 1.045, (yy + ranY) * 0.045 * 1.0 - 1.2);
            i++;
        }
    }
};

let stabilizingTheEggs = new Scene("Stabilizing the eggs");

stabilizingTheEggs.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x - 7;
            let oy = y + 30;
            let dx = cos(ox * 0.85 * 0.5);
            let dy = sin(oy * 0.5 * 0.5);
            let xx = x + pow(map(cos((sin(dx + dy)) + t * 4), -1, 1, -0.25, 2), 0.1) * 0.125;
            let yy = y + pow(map(sin((sin(dx + dy)) + t * 4), -1, 1, -0.25, 2), 0.1) * 0.125;
            //             xx += map(cos(x * t), -1, 1, 0.5, 0.4) * 2;
            //             yy += map(sin(y * t), -1, 1, 0.5, 0.4) * 2;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 0.95 - 1.045, (yy + ranY) * 0.045 * 1.0 - 1.2);
            i++;
        }
    }
};

let harmoniousEggs = new Scene("Harmonious eggs");

harmoniousEggs.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x - 7;
            let oy = y + 31;
            let dx = cos(ox * 0.85 * 0.5);
            let dy = sin(oy * 0.5 * 0.5);
            let xx = x + pow(map(cos((sin(dx + dy)) + t * 4), -1, 1, -0.25, 2), 4) * 0.125;
            let yy = y + pow(map(sin((sin(dx + dy)) + t * 4), -1, 1, -0.25, 2), 4) * 0.125;
            //             xx += map(cos(x * t), -1, 1, 0.5, 0.4) * 2;
            //             yy += map(sin(y * t), -1, 1, 0.5, 0.4) * 2;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 0.95 - 1.045, (yy + ranY) * 0.045 * 1.0 - 1.2);
            i++;
        }
    }
};


let harmoniousEggs2 = new Scene("Harmonious eggs 2");

harmoniousEggs2.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x - 7;
            let oy = y + 31;
            let dx = cos(ox * 0.85 * 0.5);
            let dy = sin(oy * 0.5 * 0.5);
            let xx = x + pow(map(cos((sin(dx + dy)) + t * 4), -1, 1, -0.25, 2), 6) * 0.125;
            let yy = y + pow(map(sin((sin(dx + dy)) + t * 4), -1, 1, -0.25, 2), 6) * 0.125;
            //             xx += map(cos(x * t), -1, 1, 0.5, 0.4) * 2;
            //             yy += map(sin(y * t), -1, 1, 0.5, 0.4) * 2;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 0.95 - 1.045, (yy + ranY) * 0.045 * 1.0 - 1.2);
            i++;
        }
    }
};

let harmoniousEggs2b = new Scene("Harmonious eggs 2b");

harmoniousEggs2b.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x - 7;
            let oy = y + 31;
            let dx = cos(ox * 0.85 * 0.5);
            let dy = sin(oy * 0.5 * 0.5);
            let xx = x + pow(map(cos((sin(dx + dy)) + t * 4), -1, 1, 0, 2), 6) * 0.125;
            let yy = y + pow(map(sin((sin(dx + dy)) + t * 4), -1, 1, 0, 2), 6) * 0.125;
            //             xx += map(cos(x * t), -1, 1, 0.5, 0.4) * 2;
            //             yy += map(sin(y * t), -1, 1, 0.5, 0.4) * 2;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 0.95 - 1.045, (yy + ranY) * 0.045 * 1.0 - 1.2);
            i++;
        }
    }
};

let chaoticEggs = new Scene("Chaotic eggs");

chaoticEggs.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x - 7;
            let oy = y + 31;
            let dx = cos(ox * 0.85 * 0.5);
            let dy = sin(oy * 0.5 * 0.5);
            let xx = x + pow(map(cos(sin(dx + dy) + t * 4), -1, 1, 0, 2), 10) * 0.125;
            let yy = y + pow(map(sin(sin(dx + dy) + t * 4), -1, 1, 0, 2), 10) * 0.125;
            //             xx += map(cos(x * t), -1, 1, 0.5, 0.4) * 2;
            //             yy += map(sin(y * t), -1, 1, 0.5, 0.4) * 2;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 0.95 - 1.045, (yy + ranY) * 0.045 * 1.0 - 1.2);
            i++;
        }
    }
};

let workOnSymmetricalChaoticEggs = new Scene("Work on symmetrical chaotic eggs");

workOnSymmetricalChaoticEggs.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x - 7;
            let oy = y + 31;
            let dx = cos(ox * 0.85 * 0.5);
            let dy = sin(oy * 0.5 * 0.5);
            let mx = pow(map(cos(sin(dx + dy) + t * 4), -1, 1, 0, 2), 10) * 0.125;
            let my = pow(map(sin(sin(dx + dy) + t * 4), -1, 1, 0, 2), 10) * 0.125;
            mx = Math.sign(mx) * -1 * mx;
            my = Math.sign(my) * 1 * my;
            let xx = x + mx;
            let yy = y + my;
            //             xx += map(cos(x * t), -1, 1, 0.5, 0.4) * 2;
            //             yy += map(sin(y * t), -1, 1, 0.5, 0.4) * 2;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 0.95 - 1.045, (yy + ranY) * 0.045 * 1.0 - 1.2);
            i++;
        }
    }
};

let strangelyStabilizedEggs = new Scene("Strangely stabilized eggs");

strangelyStabilizedEggs.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x - 7;
            let oy = y + 31;
            let dx = cos(ox * 0.85 * 0.5);
            let dy = sin(oy * 0.5 * 0.5);
            let mx = pow(map(cos(sin(dx + dy) + t * 4), -1, 1, 0, 2), 10) * 0.125;
            let my = pow(map(sin(sin(dx + dy) + t * 4), -1, 1, 0, 2), 10) * 0.125;
            mx = Math.sign(mx) * -1 * mx;
            my = Math.sign(my) * 1 * my;
            let xx = x + mx;
            let yy = y + my;
            //             xx += map(cos(x * t), -1, 1, 0.5, 0.4) * 2;
            //             yy += map(sin(y * t), -1, 1, 0.5, 0.4) * 2;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 0.95 - 1.045, (yy + ranY) * 0.045 * 1.0 - 1.2);
            i++;
        }
    }
};

let strangelyStabilizedEggsFlowy = new Scene("Strangely stabilized eggs, flowy");

strangelyStabilizedEggsFlowy.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    let oriX, oriY
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x - 7;
            let oy = y + 31;
            let dx = cos(ox * 0.85 * 0.5);
            let dy = sin(oy * 0.5 * 0.5);
            let mx = pow(map(cos(sin(dx + dy + t * 20) * 0.75), -1, 1, 0, 2), 1) * 5;
            let my = pow(map(sin(sin(dx + dy + t * 20) * 0.75), -1, 1, 0, 2), 1) * 5;
            //             mx = Math.sign(mx) * -1 * mx;
            //             my = Math.sign(my) * 1 * my;
            let xx = x + mx;
            let yy = y + my;
            //             xx += map(cos(x * t), -1, 1, 0.5, 0.4) * 2;
            //             yy += map(sin(y * t), -1, 1, 0.5, 0.4) * 2;
            if (i == 0) {
                oriX = xx;
                oriY = yy;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - oriX + ranX) * 0.05 * 0.95 - 1.145, (yy - oriY + ranY) * 0.05 * 1.0 - 1.25);
            i++;
        }
    }
};

let moreFlowyEggs = new Scene("More flow eggs");

moreFlowyEggs.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    let oriX, oriY
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x - 7;
            let oy = y + 20;
            let dx = cos(ox * 0.85 * 0.5);
            let dy = sin(oy * 0.5 * 0.5);
            let mx = pow(cos((dx + dy + t * 15) * 0.75), 2) * 4;
            let my = pow(sin((dx + dy + t * 15) * 0.75), 2) * 4;
            //             mx = Math.sign(mx) * -1 * mx;
            //             my = Math.sign(my) * 1 * my;
            let xx = x + mx;
            let yy = y + my;
            //             xx += map(cos(x * t), -1, 1, 0.5, 0.4) * 2;
            //             yy += map(sin(y * t), -1, 1, 0.5, 0.4) * 2;
            if (i == 0) {
                oriX = xx;
                oriY = yy;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - oriX + ranX) * 0.05 * 0.95 - 1.145, (yy - oriY + ranY) * 0.05 * 1.0 - 1.25);
            i++;
        }
    }
};

let balancedBrain = new Scene("Balanced brain");

balancedBrain.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    let oriX, oriY
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x - 0;
            let oy = y + 25;
            let dx = cos(sin(ox * ox * 0.25) * 0.85 * 0.25 * 0.5);
            let dy = sin(sin(oy * ox * 0.25) * 0.5 * 0.25 * 0.5);
            let mx = pow(cos((dx + dy + t * 10) * 0.75), 4) * 10;
            let my = pow(sin((dx + dy + t * 10) * 0.75), 4) * 10;
            //             mx = Math.sign(mx) * -1 * mx;
            //             my = Math.sign(my) * 1 * my;
            let xx = x + mx;
            let yy = y + my;
            //             xx += map(cos(x * t), -1, 1, 0.5, 0.4) * 2;
            //             yy += map(sin(y * t), -1, 1, 0.5, 0.4) * 2;
            if (i == 0) {
                oriX = xx;
                oriY = yy;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - oriX + ranX) * 0.05 * 0.95 - 1.145, (yy - oriY + ranY) * 0.05 * 1.0 - 1.25);
            i++;
        }
    }
};

let newFestive = new Scene("New festive");

newFestive.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 120800) * 0.005;
    let a = 0.005 * sin(t * 0.05);
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let ox = x;
            let oy = y;
            let dx = abs(cos(x) * 0.01) * 16;
            let dy = abs(sin(y) * 0.01) * 16;
            let xx = x + pow(cos((dx + dy) * 20 + t * 12) * 0.1, 0.02) * 5;
            let yy = y + pow(sin((dx + dy) * 20 + t * 12) * 0.1, 0.02) * 5;
            //             xx += map(cos(x * t), -1, 1, 0.5, 0.4) * 2;
            //             yy += map(sin(y * t), -1, 1, 0.5, 0.4) * 2;
            if (i == 0) {
                oriX = xx;
            }
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx - 0 + ranX) * 0.05 * 0.8 - 1.05, (yy + ranY) * 0.045 * 1.0 - 1.2);
            i++;
        }
    }
};

let newSpaceship = new Scene("New spaceship");

newSpaceship.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum) * 0.025;
    let i = 0;
    let ix = 1,
        iy = 1;
    let sosc = function(i, min, max) {
        return map(Math.sin(i), -1, 1, min, max);
    };
    let cosc = function(i, min, max) {
        return map(Math.cos(i), -1, 1, min, max);
    };
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let dx = x;
            let dy = y;
            let a = atan2(y - abs(y - 50), x - abs(x - 50));
            let xx = x - 25 + pow(cos(pow(a, 4) + t * 1), 0.9);
            let yy = y - 25 + pow(sin(pow(a, 4) + t * 1), 0.9);
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx + ranX) * 0.05 * 0.95 - 0., (yy + ranY) * 0.05 * 0.85 - 0);
            i++;
            //             ix++;
        }
    }
};

let intricateDynamical = new Scene("Intricate dynamical");

intricateDynamical.init = function(sum) {
    this.oldArr = [];
    for (let i = 0; i < 50 * 50; i++) {
        this.oldArr.push({ x: 1, y: 1 });
    }
    this.innerCount = 0;
    for (let i = 0; i < 100; i++) {
        this.update(this.innerCount);
        this.innerCount++;
    }
};

intricateDynamical.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (this.innerCount) * 0.025;
    let i = 0;
    let ix = 1,
        iy = 1;
    let sosc = function(i, min, max) {
        return map(Math.sin(i), -1, 1, min, max);
    };
    let cosc = function(i, min, max) {
        return map(Math.cos(i), -1, 1, min, max);
    };
    this.newArr = [];
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let xx = x;
            let yy = y;
            let oX = this.oldArr[i].x;
            let oY = this.oldArr[i].y;
            xx += cos(oX * 0.5 + cos(oY * 0.5 + t * 5));
            yy += sin(oY * 0.5 + sin(oX * 0.5 + t * 5));
            this.newArr.push({ x: xx, y: yy });
            //             
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx + ranX) * 0.05 * 0.95 - 1., (yy + ranY) * 0.05 * 0.9 - 1);
            i++;
            //             console.log(i);
            //             ix++;
        }
    }
    this.oldArr = this.newArr;
    this.innerCount++;
};

let intricateDynamical2 = new Scene("Intricate dynamical 2");

intricateDynamical2.init = function(sum) {
    this.oldArr = [];
    for (let i = 0; i < 50 * 50; i++) {
        this.oldArr.push({ x: 1, y: 1 });
    }
    this.innerCount = 0;
    for (let i = 0; i < 100; i++) {
        this.update(this.innerCount);
        this.innerCount++;
    }
};

intricateDynamical2.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (this.innerCount) * 0.025;
    let i = 0;
    let ix = 1,
        iy = 1;
    let sosc = function(i, min, max) {
        return map(Math.sin(i), -1, 1, min, max);
    };
    let cosc = function(i, min, max) {
        return map(Math.cos(i), -1, 1, min, max);
    };
    this.newArr = [];
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let xx = x;
            let yy = y;
            let oX = this.oldArr[i].x;
            let oY = this.oldArr[i].y;
            xx += cos(oX * 0.5 + cos(oX * 0.5) + cos(oY * 0.5 + t * 5));
            yy += sin(oY * 0.5 + cos(oX * 0.5) + sin(oX * 0.5 + t * 5));
            this.newArr.push({ x: xx, y: yy });
            //             
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx + ranX) * 0.05 * 0.95 - 1., (yy + ranY) * 0.05 * 0.9 - 1);
            i++;
            //             console.log(i);
            //             ix++;
        }
    }
    this.oldArr = this.newArr;
    this.innerCount++;
};


let floatingDynamical = new Scene("Floating dynamical");

floatingDynamical.init = function(sum) {
    this.oldArr = [];
    for (let i = 0; i < 50 * 50; i++) {
        this.oldArr.push({ x: 1, y: 1 });
    }
    this.innerCount = 0;
    for (let i = 0; i < 100; i++) {
        this.update(this.innerCount);
        this.innerCount++;
    }
};

floatingDynamical.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (this.innerCount) * 0.025;
    let i = 0;
    let ix = 1,
        iy = 1;
    let sosc = function(i, min, max) {
        return map(Math.sin(i), -1, 1, min, max);
    };
    let cosc = function(i, min, max) {
        return map(Math.cos(i), -1, 1, min, max);
    };
    this.newArr = [];
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let xx = x;
            let yy = y;
            let oX = this.oldArr[i].x;
            let oY = this.oldArr[i].y;
            xx += cos(oX * 0.5) + cos(oY * 0.5 + t * 2) + cos(oY * 0.5);
            yy += sin(oY * 0.5) + sin(oX * 0.5) + sin(oX * 0.5);
            this.newArr.push({ x: xx, y: yy });
            //             
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx + ranX) * 0.05 * 0.95 - 1., (yy + ranY) * 0.05 * 0.9 - 1);
            i++;
            //             console.log(i);
            //             ix++;
        }
    }
    this.oldArr = this.newArr;
    this.innerCount++;
};

let floatingDynamical2 = new Scene("Floating dynamical 2");

floatingDynamical2.init = function(sum) {
    this.oldArr = [];
    for (let i = 0; i < 50 * 50; i++) {
        this.oldArr.push({ x: 1, y: 1 });
    }
    this.innerCount = 0;
    for (let i = 0; i < 100; i++) {
        this.update(this.innerCount);
        this.innerCount++;
    }
};

floatingDynamical2.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (this.innerCount) * 0.025;
    let i = 0;
    let ix = 1,
        iy = 1;
    let sosc = function(i, min, max) {
        return map(Math.sin(i), -1, 1, min, max);
    };
    let cosc = function(i, min, max) {
        return map(Math.cos(i), -1, 1, min, max);
    };
    this.newArr = [];
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let xx = x;
            let yy = y;
            let oX = this.oldArr[i].x;
            let oY = this.oldArr[i].y;
            xx += cos(oX * 0.75) * cos(oY * 0.5 + t * 5) + cos(oY * 0.5);
            yy += sin(oY * 0.75) * sin(oX * 0.5 + t * 5) + sin(oX * 0.5);
            this.newArr.push({ x: xx, y: yy });
            //             
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx + ranX) * 0.05 * 0.95 - 1.1, (yy + ranY) * 0.05 * 0.9 - 1.1);
            i++;
            //             console.log(i);
            //             ix++;
        }
    }
    this.oldArr = this.newArr;
    this.innerCount++;
};

let beautifulFloatingDynamical = new Scene("Beautiful floating dynamical");

beautifulFloatingDynamical.init = function(sum) {
    this.oldArr = [];
    for (let i = 0; i < 50 * 50; i++) {
        this.oldArr.push({ x: 1, y: 1 });
    }
    this.innerCount = 0;
    for (let i = 0; i < 100; i++) {
        this.update(this.innerCount);
        this.innerCount++;
    }
};

beautifulFloatingDynamical.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (this.innerCount) * 0.025;
    let i = 0;
    let ix = 1,
        iy = 1;
    let sosc = function(i, min, max) {
        return map(Math.sin(i), -1, 1, min, max);
    };
    let cosc = function(i, min, max) {
        return map(Math.cos(i), -1, 1, min, max);
    };
    this.newArr = [];
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let xx = x;
            let yy = y;
            let oX = this.oldArr[i].x;
            let oY = this.oldArr[i].y;
            xx += cos(oX * 0.75) * cos(oY * 0.5 + t * 2) + cos(oY * 0.5);
            yy += sin(oY * 0.75) * sin(oX * 0.5 + t * 2) + sin(oX * 0.5);
            this.newArr.push({ x: xx, y: yy });
            //             
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx + ranX) * 0.05 * 0.95 - 1.1, (yy + ranY) * 0.05 * 0.9 - 1.1);
            i++;
            //             console.log(i);
            //             ix++;
        }
    }
    this.oldArr = this.newArr;
    this.innerCount++;
};

let tornSheetInTheWind = new Scene("Torn sheet in the wind");

tornSheetInTheWind.init = function(sum) {
    this.oldArr = [];
    for (let i = 0; i < 50 * 50; i++) {
        this.oldArr.push({ x: 1, y: 1 });
    }
    this.innerCount = 0;
    for (let i = 0; i < 100; i++) {
        this.update(this.innerCount);
        this.innerCount++;
    }
};

tornSheetInTheWind.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (this.innerCount) * 0.015;
    let i = 0;
    let ix = 1,
        iy = 1;
    let sosc = function(i, min, max) {
        return map(Math.sin(i), -1, 1, min, max);
    };
    let cosc = function(i, min, max) {
        return map(Math.cos(i), -1, 1, min, max);
    };
    this.newArr = [];
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let xx = x;
            let yy = y;
            let oX = this.oldArr[i].x;
            let oY = this.oldArr[i].y;
            xx += cos(oY * 0.25 + t * 2) * 4 + cos(oY * 0.5);
            yy += sin(oX * 0.25 + t * 2) * 4 + sin(oX * 0.5);
            this.newArr.push({ x: xx, y: yy });
            //             
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx + ranX) * 0.05 * 1.0 - 1.0, (yy + ranY) * 0.05 * 1.0 - 1.0);
            i++;
            //             console.log(i);
            //             ix++;
        }
    }
    this.oldArr = this.newArr;
    this.innerCount++;
};

let moreTorn = new Scene("More torn");

moreTorn.init = function(sum) {
    this.oldArr = [];
    for (let i = 0; i < 50 * 50; i++) {
        this.oldArr.push({ x: 1, y: 1 });
    }
    this.innerCount = 0;
    for (let i = 0; i < 100; i++) {
        this.update(this.innerCount);
        this.innerCount++;
    }
};

moreTorn.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (this.innerCount) * 0.015;
    let i = 0;
    let ix = 1,
        iy = 1;
    let sosc = function(i, min, max) {
        return map(Math.sin(i), -1, 1, min, max);
    };
    let cosc = function(i, min, max) {
        return map(Math.cos(i), -1, 1, min, max);
    };
    this.newArr = [];
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let xx = x;
            let yy = y;
            let oX = this.oldArr[i].x;
            let oY = this.oldArr[i].y;
            xx += cos(pow(oY, 0.7) * 0.9 + t * 2) * 4 + cos(oY * 0.5);
            yy += sin(pow(oX, 0.7) * 0.9 + t * 2) * 4 + sin(oX * 0.5);
            this.newArr.push({ x: xx, y: yy });
            //             
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx + ranX) * 0.05 * 1.0 - 1.3, (yy + ranY) * 0.05 * 1.0 - 1.3);
            i++;
            //             console.log(i);
            //             ix++;
        }
    }
    this.oldArr = this.newArr;
    this.innerCount++;
};

let differentlyTorn = new Scene("Differently torn");

differentlyTorn.init = function(sum) {
    this.oldArr = [];
    for (let i = 0; i < 50 * 50; i++) {
        this.oldArr.push({ x: 1, y: 1 });
    }
    this.innerCount = 0;
    for (let i = 0; i < 100; i++) {
        this.update(this.innerCount);
        this.innerCount++;
    }
};

differentlyTorn.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (this.innerCount) * 0.015;
    let i = 0;
    let ix = 1,
        iy = 1;
    let sosc = function(i, min, max) {
        return map(Math.sin(i), -1, 1, min, max);
    };
    let cosc = function(i, min, max) {
        return map(Math.cos(i), -1, 1, min, max);
    };
    this.newArr = [];
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let xx = x;
            let yy = y;
            let oX = this.oldArr[i].x;
            let oY = this.oldArr[i].y;
            xx += cos(pow(oY, 0.7) * 0.9 + t * 2) * 5;
            yy += sin(pow(oX, 0.7) * 0.9 + t * 2) * 5;
            this.newArr.push({ x: xx, y: yy });
            //             
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx + ranX) * 0.05 * 1.0 - 1.3, (yy + ranY) * 0.05 * 1.0 - 1.3);
            i++;
            //             console.log(i);
            //             ix++;
        }
    }
    this.oldArr = this.newArr;
    this.innerCount++;
};

let surprisinglyStableDynamicalLozenges = new Scene("Surprisingly stable dynamical lozenges");

surprisinglyStableDynamicalLozenges.init = function(sum) {
    this.oldArr = [];
    for (let i = 0; i < 50 * 50; i++) {
        this.oldArr.push({ x: 1, y: 1 });
    }
    this.innerCount = 0;
    for (let i = 0; i < 100; i++) {
        this.update(this.innerCount);
        this.innerCount++;
    }
};

surprisinglyStableDynamicalLozenges.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (this.innerCount) * 0.015;
    let i = 0;
    let ix = 1,
        iy = 1;
    let sosc = function(i, min, max) {
        return map(Math.sin(i), -1, 1, min, max);
    };
    let cosc = function(i, min, max) {
        return map(Math.cos(i), -1, 1, min, max);
    };
    this.newArr = [];
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let xx = x;
            let yy = y;
            let oX = this.oldArr[i].x;
            let oY = this.oldArr[i].y;
            xx += tan(cos((oY) * 0.4 + t * 2)) * 1.25;
            yy += tan(sin((oY + oX) * 0.4 + t * 2)) * 1.25;
            this.newArr.push({ x: xx, y: yy });
            //             
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx + ranX) * 0.05 * 1.0 - 1.3, (yy + ranY) * 0.05 * 1.0 - 1.3);
            i++;
            //             console.log(i);
            //             ix++;
        }
    }
    this.oldArr = this.newArr;
    this.innerCount++;
};

let cicadas = new Scene("Cicadas");

cicadas.init = function(sum) {
    this.oldArr = [];
    for (let i = 0; i < 50 * 50; i++) {
        this.oldArr.push({ x: 1, y: 1 });
    }
    this.innerCount = 0;
    for (let i = 0; i < 100; i++) {
        this.update(this.innerCount);
        this.innerCount++;
    }
};

cicadas.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (this.innerCount) * 0.015 * 2;
    let i = 0;
    let ix = 1,
        iy = 1;
    let sosc = function(i, min, max) {
        return map(Math.sin(i), -1, 1, min, max);
    };
    let cosc = function(i, min, max) {
        return map(Math.cos(i), -1, 1, min, max);
    };
    this.newArr = [];
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let xx = x;
            let yy = y;
            let oX = this.oldArr[i].x;
            let oY = this.oldArr[i].y;
            xx += tan(cos((oY) * 0.2 + t * 2)) * cos(oX) * 0.9;
            yy += tan(sin((oY + oX) * 0.2 + t * 2)) * sin(oY) * 0.9;
            this.newArr.push({ x: xx, y: yy });
            //             
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx + ranX) * 0.05 * 1.0 - 1.3, (yy + ranY) * 0.05 * 1.0 - 1.3);
            i++;
            //             console.log(i);
            //             ix++;
        }
    }
    this.oldArr = this.newArr;
    this.innerCount++;
};

let balancedDynamicalIntricate = new Scene("Balanced dynamical intricate");

balancedDynamicalIntricate.init = function(sum) {
    this.oldArr = [];
    for (let i = 0; i < 50 * 50; i++) {
        this.oldArr.push({ x: 1, y: 1 });
    }
    this.innerCount = 0;
    for (let i = 0; i < 100; i++) {
        this.update(this.innerCount);
        this.innerCount++;
    }
};

balancedDynamicalIntricate.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (this.innerCount) * 0.015 * 0.25;
    let i = 0;
    let ix = 1,
        iy = 1;
    let sosc = function(i, min, max) {
        return map(Math.sin(i), -1, 1, min, max);
    };
    let cosc = function(i, min, max) {
        return map(Math.cos(i), -1, 1, min, max);
    };
    this.newArr = [];
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let xx = x;
            let yy = y;
            let oX;
            let oY;
            if (this.innerCount == 0) {
                oX = x;
                oY = y;
            } else {
                let ix = this.oldArr[i].x,
                    iy = this.oldArr[i].y;
                oX = x + cos(ix * 0.5 + t * 8) * sin(ix * 0.5 + t * 4) * cos(iy * 0.5 + t * 4) * 2;
                oY = y + sin(iy * 0.5 + t * 8) * sin(ix * 0.5 + t * 4) * cos(iy * 0.5 + t * 4) * 2;
            }
            xx = oX;
            yy = oY;
            this.newArr.push({ x: xx, y: yy });
            //             
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx + ranX) * 0.05 * 1.0 - 1.3, (yy + ranY) * 0.05 * 1.0 - 1.3);
            i++;
            //             console.log(i);
            //             ix++;
        }
    }
    // iter++;
    this.oldArr = this.newArr;
    this.innerCount++;
};

let balancedDynamicalIntricateFast = new Scene("Balanced dynamical intricate, fast");

balancedDynamicalIntricateFast.init = function(sum) {
    this.oldArr = [];
    for (let i = 0; i < 50 * 50; i++) {
        this.oldArr.push({ x: 1, y: 1 });
    }
    this.innerCount = 0;
    for (let i = 0; i < 100; i++) {
        this.update(this.innerCount);
        this.innerCount++;
    }
};

balancedDynamicalIntricateFast.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (this.innerCount) * 0.015 * 0.25;
    let i = 0;
    let ix = 1,
        iy = 1;
    let sosc = function(i, min, max) {
        return map(Math.sin(i), -1, 1, min, max);
    };
    let cosc = function(i, min, max) {
        return map(Math.cos(i), -1, 1, min, max);
    };
    this.newArr = [];
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            let xx = x;
            let yy = y;
            let oX;
            let oY;
            if (this.innerCount == 0) {
                oX = x;
                oY = y;
            } else {
                let ix = this.oldArr[i].x,
                    iy = this.oldArr[i].y;
                oX = x + cos(ix * 0.5 + t * 8) * sin(ix * 0.5 + t * 40) * cos(iy * 0.5 + t * 8) * 2;
                oY = y + sin(iy * 0.5 + t * 8) * sin(ix * 0.5 + t * 40) * cos(iy * 0.5 + t * 8) * 2;
            }
            xx = oX;
            yy = oY;
            this.newArr.push({ x: xx, y: yy });
            //             
            let ranX = Math.random() * 0.025 * 0.5;
            let ranY = Math.random() * 0.025 * 0.5;
            this.vertices.push((xx + ranX) * 0.05 * 1.0 - 1.3, (yy + ranY) * 0.05 * 1.0 - 1.3);
            i++;
            //             console.log(i);
            //             ix++;
        }
    }
    // iter++;
    this.oldArr = this.newArr;
    this.innerCount++;
};

let subtleTrunk = new Scene("Subtle trunk");

subtleTrunk.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum) * 0.025;
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
            let dx = x + max(cos(x * 0.125 + t * -2), sin(y + x * 0.25 + t * 0.5));
            let dy = y + min(sin(y * 0.125 + t * -2), cos(x + x * 0.25 + t * 0.5));
            this.vertices.push((dx * 0.05) - 1.25, (dy * 0.05) - 1.25);
            i++;
            //             ix++;
        }
    }
};

let trunk = new Scene("Trunk");

trunk.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum) * 0.025;
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
            let dx = x + max(cos(x * 0.125 + t * 2), sin(y + x + t * 0.5));
            let dy = y + min(sin(y * 0.125 + t * 2), cos(x + x + t * 0.5));
            this.vertices.push((dx * 0.05) - 1.25, (dy * 0.05) - 1.25);
            i++;
            //             ix++;
        }
    }
};

let quietCanopy = new Scene("Quiet canopy");

quietCanopy.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum) * 0.025;
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
            let dx = x + max(cos(x * 0.25 + t * -4), sin(y * 0.5 + t * 2));
            let dy = y + min(sin(y * 0.25 + t * -4), cos(x * 0.5 + t * 2));
            this.vertices.push((dx * 0.05) - 1.25, (dy * 0.05) - 1.25);
            i++;
            //             ix++;
        }
    }
};

let undulatingGround = new Scene("Undulating ground");

undulatingGround.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum) * 0.025;
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
            let dx = x + min(cos(x * 0.25 + t * -4), sin(y * 1 + t * 5));
            let dy = y + min(sin(y * 0.25 + t * -4), cos(x * 1 + t * 5));
            this.vertices.push((dx * 0.05) - 1.25, (dy * 0.05) - 1.25);
            i++;
            //             ix++;
        }
    }
};

let escherLikeStaircases = new Scene("Escher-like staircases");

escherLikeStaircases.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum) * 0.025;
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
            let dx = x + tan(sin(y * 0.5 + t * 3));
            let dy = y + tan(cos(x * 0.5 + t * 3));
            this.vertices.push((dx * 0.05) - 1.25, (dy * 0.05) - 1.25);
            i++;
            //             ix++;
        }
    }
};

let undulatingWall3 = new Scene("Undulating wall 3");

undulatingWall3.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10) * 0.025;
    // let a = 0.00005;
    // let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            //             let ox = x - 100;
            //             let oy = y - 100;
            //             let dx = abs(cos(x) * 0.1 - Math.tan(t * 0.0025));
            //             let dy = abs(sin(y) * 0.1 - Math.tan(t * 0.0025));
            let nx = Math.cos(x * 0.1 * Math.sin(t * 0.5));
            let ny = Math.sin(y * 0.1 * Math.sin(t * 0.5));
            let xx = x + (Math.pow(Math.cos(y * 0.25 + t * 0.5), 7) * ny) * 4.5;
            let yy = y + (Math.pow(Math.sin(x * 0.25 + t * 0.5), 7) * ny + nx) * 4.5;
            //             xx += cos(oy * 10) * sin(oy * 10)2
            //             xx = lerp(x, xx, grow);
            xx *= 0.9;
            xx += 2;
            //             yy = lerp(y, yy, grow);
            //             yy += cos(oy * 10) * sin(oy * 10);
            // if (i == 0) {
            // oriX = xx;
            // }
            this.vertices.push((xx - 0) * 0.05 * 1.0 - 1.2, yy * 0.05 * 1.0 - 1.2);
            // i++;
        }
    }
};

let springs = new Scene("Springs");

springs.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10) * 0.025;
    let a = 0.00005;
    let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            //             let ox = x - 100;
            //             let oy = y - 100;
            //             let dx = abs(cos(x) * 0.1 - Math.tan(t * 0.0025));
            //             let dy = abs(sin(y) * 0.1 - Math.tan(t * 0.0025));
            let nx = Math.cos(x / x * 4.1);
            let ny = Math.sin(y / x * 4.1);
            let xx = x + (Math.pow(Math.cos(y * 0.25 + t * 0.5), 700) * ny) * 4.5;
            let yy = y + (Math.pow(Math.sin(x * 0.25 + t * 0.5), 700) * ny + nx) * 4.5;
            //             xx += cos(oy * 10) * sin(oy * 10)2
            //             xx = lerp(x, xx, grow);
            xx *= 0.9;
            xx += 2;
            //             yy = lerp(y, yy, grow);
            //             yy += cos(oy * 10) * sin(oy * 10);
            // if (i == 0) {
            //     oriX = xx;
            // }
            this.vertices.push((xx - 0) * 0.05 * 1.0 - 1.2, yy * 0.05 * 1.0 - 1.2);
            // i++;
        }
    }
};

let springsSlowerLessElastic = new Scene("Springs, slower, less elastic");

springsSlowerLessElastic.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10) * 0.025;
    // let a = 0.00005;
    // let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            //             let ox = x - 100;
            //             let oy = y - 100;
            //             let dx = abs(cos(x) * 0.1 - Math.tan(t * 0.0025));
            //             let dy = abs(sin(y) * 0.1 - Math.tan(t * 0.0025));
            let nx = Math.cos(x / x * 4.1);
            let ny = Math.sin(y / y * 4.1);
            2
            let xx = x + (Math.pow(Math.cos(y * 0.25 + t * 0.25), 700) * ny) * 4.5;
            let yy = y + (Math.pow(Math.sin(x * 0.25 + t * 0.25), 700) * ny + nx) * 4.5;
            //             xx += cos(oy * 10) * sin(oy * 10)2
            //             xx = lerp(x, xx, grow);
            xx *= 0.9;
            xx += 2;
            //             yy = lerp(y, yy, grow);
            //             yy += cos(oy * 10) * sin(oy * 10);
            // if (i == 0) {
            //     oriX = xx;
            // }
            this.vertices.push((xx - 0) * 0.05 * 1.0 - 1.2, yy * 0.05 * 1.0 - 1.2);
            // i++;
        }
    }
};

let fastDiagonalStairs = new Scene("Fast diagonal stairs");

fastDiagonalStairs.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10) * 0.025;
    // let a = 0.00005;
    // let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            //             let ox = x - 100;
            //             let oy = y - 100;
            //             let dx = abs(cos(x) * 0.1 - Math.tan(t * 0.0025));
            //             let dy = abs(sin(y) * 0.1 - Math.tan(t * 0.0025));
            let nx = Math.cos(x / x * 40.1);
            let ny = Math.sin(y / y * 40.1);
            let xx = x + (Math.pow(Math.cos(y + y * 0.25 + t * 0.25), 700) * ny) * 4.5;
            let yy = y + (Math.pow(Math.sin(x + y * 0.25 + t * 0.25), 700) * ny + nx) * 4.5;
            //             xx += cos(oy * 10) * sin(oy * 10)2
            //             xx = lerp(x, xx, grow);
            xx *= 0.95;
            xx += 3.12;
            //             yy = lerp(y, yy, grow);
            //             yy += cos(oy * 10) * sin(oy * 10);
            // if (i == 0) {
            //     oriX = xx;
            // }
            this.vertices.push((xx - 0) * 0.05 * 1.0 - 1.2, yy * 0.05 * 1.0 - 1.2);
            // i++;
        }
    }
};

let fastJumpingDots = new Scene("Fast jumping dots");

fastJumpingDots.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10) * 0.025;
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
            this.vertices.push((xx - 0) * 0.05 * 1.0 - 1.2, yy * 0.05 * 1.0 - 1.2);
            i++;
        }
    }
};

let slowJumpingDots = new Scene("Slow jumping dots");

slowJumpingDots.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10) * 0.025;
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
            let xx = x + (Math.pow(Math.cos(y + y * 5 + t * 0.125), 7000) * ny);
            let yy = y + (Math.pow(Math.sin(x + y * 5 + t * 0.125), 7000) * nx);
            //             xx += cos(oy * 10) * sin(oy * 10)2
            //             xx = lerp(x, xx, grow);
            xx *= 0.95;
            xx += 3.12;
            //             yy = lerp(y, yy, grow);
            //             yy += cos(oy * 10) * sin(oy * 10);
            if (i == 0) {
                oriX = xx;
            }
            this.vertices.push((xx - 0) * 0.05 * 1.0 - 1.2, yy * 0.05 * 1.0 - 1.2);
            i++;
        }
    }
};

let walkingInsects = new Scene("Walking insects");

walkingInsects.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10) * 0.025;
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
            let xx = x + (Math.pow(Math.cos(y / y * 5 + t * 0.125), 7000) * ny);
            let yy = y + (Math.pow(Math.sin(x / y * 5 + t * 0.125), 7000) * nx);
            //             xx += cos(oy * 10) * sin(oy * 10)2
            //             xx = lerp(x, xx, grow);
            xx *= 0.95;
            xx += 3.12;
            //             yy = lerp(y, yy, grow);
            //             yy += cos(oy * 10) * sin(oy * 10);
            if (i == 0) {
                oriX = xx;
            }
            this.vertices.push((xx - 0) * 0.05 * 1.0 - 1.2, yy * 0.05 * 1.0 - 1.2);
            i++;
        }
    }
};

let horizontalJumpingDots = new Scene("Horizontal jumping dots");

horizontalJumpingDots.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10) * 0.025;
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
            let xx = x + (Math.pow(Math.cos(y / (1 + x) * 5 + t * 1e-1), 70000) * ny);
            let yy = y + (Math.pow(Math.sin(x / (1 + y) * 5 + t * 1e-1), 70000) * nx);
            //             xx += cos(oy * 10) * sin(oy * 10)2
            //             xx = lerp(x, xx, grow);
            xx *= 0.95;
            xx += 3.12;
            //             yy = lerp(y, yy, grow);
            //             yy += cos(oy * 10) * sin(oy * 10);
            if (i == 0) {
                oriX = xx;
            }
            this.vertices.push((xx - 0) * 0.05 * 1.0 - 1.2, yy * 0.05 * 1.0 - 1.2);
            i++;
        }
    }
};

let horizontalJumpingDots2 = new Scene("Horizontal jumping dots 2");

horizontalJumpingDots2.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10) * 0.025;
    // let a = 0.00005;
    // let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            //             let ox = x - 100;
            //             let oy = y - 100;
            //             let dx = abs(cos(x) * 0.1 - Math.tan(t * 0.0025));
            //             let dy = abs(sin(y) * 0.1 - Math.tan(t * 0.0025));
            let nx = Math.cos(x / x * 4.1);
            let ny = Math.sin(y / y * 4.1);
            let xx = x + (Math.pow(Math.cos(y * (1 + x) * 5 + t * 1e-1), 70000) * ny);
            let yy = y + (Math.pow(Math.sin(x * (1 + y) * 5 + t * 1e-1), 70000) * nx);
            //             xx += cos(oy * 10) * sin(oy * 10)2
            //             xx = lerp(x, xx, grow);
            xx *= 0.95;
            xx += 3.12;
            //             yy = lerp(y, yy, grow);
            //             yy += cos(oy * 10) * sin(oy * 10);
            // if (i == 0) {
            //     oriX = xx;
            // }
            this.vertices.push((xx - 0) * 0.05 * 1.0 - 1.2, yy * 0.05 * 1.0 - 1.2);
            // i++;
        }
    }
};

let horizontalJumpingDots3 = new Scene("Horizontal jumping dots 3");

horizontalJumpingDots3.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10) * 0.025;
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
            let xx = x + (Math.pow(Math.sin(y * (1 + x) * 1 + t * 1e-1), 7000) * ny);
            let yy = y + (Math.pow(Math.sin(x * (1 + y) * 1 + t * 1e-1), 7000) * nx);
            //             xx += cos(oy * 10) * sin(oy * 10)2
            //             xx = lerp(x, xx, grow);
            xx *= 0.95;
            xx += 3.12;
            //             yy = lerp(y, yy, grow);
            //             yy += cos(oy * 10) * sin(oy * 10);
            if (i == 0) {
                oriX = xx;
            }
            this.vertices.push((xx - 0) * 0.05 * 1.0 - 1.2, yy * 0.05 * 1.0 - 1.2);
            i++;
        }
    }
};

let horizontalJumpingDots4 = new Scene("Horizontal jumping dots 4");

horizontalJumpingDots4.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10) * 0.025;
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
            let xx = x + (Math.pow(Math.sin(y * (0 + x) * 1 + t * 1e-1), 7000) * ny);
            let yy = y + (Math.pow(Math.sin(x * (0 + y) * 1 + t * 1e-1), 7000) * nx);
            //             xx += cos(oy * 10) * sin(oy * 10)2
            //             xx = lerp(x, xx, grow);
            xx *= 0.95;
            xx += 3.12;
            //             yy = lerp(y, yy, grow);
            //             yy += cos(oy * 10) * sin(oy * 10);
            // if (i == 0) {
            //     oriX = xx;
            // }
            this.vertices.push((xx - 0) * 0.05 * 1.0 - 1.2, yy * 0.05 * 1.0 - 1.2);
            // i++;
        }
    }
};

let horizontalJumpingDots5 = new Scene("Horizontal jumping dots 5");

horizontalJumpingDots5.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10) * 0.025;
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
            let xx = x + (Math.pow(Math.sin(y * x * t * 1e-4), 7000) * ny);
            let yy = y + (Math.pow(Math.sin(x * y * t * 1e-4), 7000) * nx);
            //             xx += cos(oy * 10) * sin(oy * 10)2
            //             xx = lerp(x, xx, grow);
            xx *= 0.95;
            xx += 3.12;
            //             yy = lerp(y, yy, grow);
            //             yy += cos(oy * 10) * sin(oy * 10);
            // if (i == 0) {
            //     oriX = xx;
            // }
            this.vertices.push((xx - 0) * 0.05 * 1.0 - 1.2, yy * 0.05 * 1.0 - 1.2);
            // i++;
        }
    }
};

let subtleGridFlowy2 = new Scene("Subtle grid, flowy 2");

subtleGridFlowy2.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10000000000) * 0.025 * 0.0001;
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
            let tt = Math.sin(t * 0.0001) * 100;
            let xx = x + (Math.pow(Math.cos((4e3 + y + tt) * (4e3 + x + tt) * t * 1e-3), 15));
            let yy = y + (Math.pow(Math.cos((4e3 + x + tt) * (4e3 + y + tt) * t * 1e-3), 15));
            //             xx += cos(oy * 10) * sin(oy * 10)2
            //             xx = lerp(x, xx, grow);
            xx *= 0.95;
            xx += 3.12;
            //             yy = lerp(y, yy, grow);
            //             yy += cos(oy * 10) * sin(oy * 10);
            // if (i == 0) {
            //     oriX = xx;
            // }
            this.vertices.push((xx - 0) * 0.05 * 1.0 - 1.2, yy * 0.05 * 1.0 - 1.2);
            // i++;
        }
    }
};

let travellers2 = new Scene("Travellers 2");

travellers2.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10000000000) * 0.025 * 0.0001;
    // let a = 0.00005;
    // let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            //             let ox = x - 100;
            //             let oy = y - 100;
            //             let dx = abs(cos(x) * 0.1 - Math.tan(t * 0.0025));
            //             let dy = abs(sin(y) * 0.1 - Math.tan(t * 0.0025));
            let nx = Math.cos(x * 4.1);
            let ny = Math.sin(y * 4.1);
            let tt = Math.sin(t * 0.35) * 1000;
            let m = 4e3 + tt;
            let xx = x + (Math.pow(Math.cos((m - x * 100) * 100) * Math.sin(t * y * 1e-5), 25));
            let yy = y + (Math.pow(Math.sin((m - y * 100) * 100) * Math.sin(t * x * 1e-5), 25));
            //             xx += cos(oy * 10) * sin(oy * 10)2
            //             xx = lerp(x, xx, grow);
            xx *= 0.95;
            xx += 3.12;
            //             yy = lerp(y, yy, grow);
            //             yy += cos(oy * 10) * sin(oy * 10);
            // if (i == 0) {
            //     oriX = xx;
            // }
            this.vertices.push((xx - 0) * 0.05 * 1.0 - 1.2, yy * 0.05 * 1.0 - 1.2);
            // i++;
        }
    }
};

let travellers3 = new Scene("Travellers 3");

travellers3.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10000000000) * 0.025 * 0.0001;
    // let a = 0.00005;
    // let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            //             let ox = x - 100;
            //             let oy = y - 100;
            //             let dx = abs(cos(x) * 0.1 - Math.tan(t * 0.0025));
            //             let dy = abs(sin(y) * 0.1 - Math.tan(t * 0.0025));
            let nx = Math.cos(x * 4.1);
            let ny = Math.sin(y * 4.1);
            let tt = Math.sin(t * 0.35) * 750;
            let m = 4e3 + tt;
            let xx = x + (Math.pow(Math.cos((m - x * 100) * 100) * Math.sin(t * y * 1e-3), 15));
            let yy = y + (Math.pow(Math.sin((m - y * 100) * 100) * Math.sin(t * x * 1e-3), 15));
            //             xx += cos(oy * 10) * sin(oy * 10)2
            //             xx = lerp(x, xx, grow);
            xx *= 0.95;
            xx += 3.12;
            //             yy = lerp(y, yy, grow);
            //             yy += cos(oy * 10) * sin(oy * 10);
            // if (i == 0) {
            //     oriX = xx;
            // }
            this.vertices.push((xx - 0) * 0.05 * 1.0 - 1.2, yy * 0.05 * 1.0 - 1.2);
            // i++;
        }
    }
};

let travellers4Bigger = new Scene("Travellers 4, bigger");

travellers4Bigger.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10000000000) * 0.025 * 0.0001;
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
            let tt = Math.sin(t * 0.125) * 750;
            let m = 4e3 + tt;
            let xx = x + (Math.pow(Math.cos((m - x * 100) * 1000) * Math.sin(t * y * 1e-3), 15));
            let yy = y + (Math.pow(Math.sin((m - y * 100) * 1000) * Math.sin(t * x * 1e-3), 15));
            //                         xx += cos(oy * 10) * sin(oy * 10);
            //             xx = lerp(x, xx, grow);
            xx *= 0.95;
            xx += 3.12;
            //             yy = lerp(y, yy, grow);
            //             yy += cos(oy * 10) * sin(oy * 10);
            if (i == 0) {
                oriX = xx;
            }
            this.vertices.push((xx - 0) * 0.05 * 1.0 - 1.2, yy * 0.05 * 1.0 - 1.2);
            i++;
        }
    }
};

let travellers5EvenBigger = new Scene("Travellers 5, even bigger");

travellers5EvenBigger.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10000000000) * 0.025 * 0.0001;
    // let a = 0.00005;
    // let i = 0;
    for (let x = 0; x < amountX; x += 1) {
        for (let y = 0; y < amountY; y += 1) {
            //             let ox = x - 100;
            //             let oy = y - 100;
            //             let dx = abs(cos(x) * 0.1 - Math.tan(t * 0.0025));
            //             let dy = abs(sin(y) * 0.1 - Math.tan(t * 0.0025));
            let nx = Math.cos(x * 4.1);
            let ny = Math.sin(y * 4.1);
            let tt = Math.sin(t * 0.125 * 0.5) * 750;
            let m = 4e3 + tt;
            let xx = x + (Math.pow(Math.cos((m - x * 100) * 1000) * Math.sin(t * y * 1e-3), 5));
            let yy = y + (Math.pow(Math.sin((m - y * 100) * 1000) * Math.sin(t * x * 1e-3), 5));
            //                         xx += cos(oy * 10) * sin(oy * 10);
            //             xx = lerp(x, xx, grow);
            xx *= 0.95;
            xx += 3.12;
            //             yy = lerp(y, yy, grow);
            //             yy += cos(oy * 10) * sin(oy * 10);
            // if (i == 0) {
            //     oriX = xx;
            // }
            this.vertices.push((xx - 0) * 0.05 * 1.0 - 1.2, yy * 0.05 * 1.0 - 1.2);
            // i++;
        }
    }
};

let travellers6 = new Scene("Travellers 6");

travellers6.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10000000000) * 0.025 * 0.0001;
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
            let xx = x + (Math.pow(Math.cos((m + x * 100) * 1000) * Math.sin(t * y * 1e-3), 20)) * 100;
            let yy = y + (Math.pow(Math.sin((m + y * 100) * 1000) * Math.sin(t * x * 1e-3), 20)) * 100;
            //                         xx += cos(oy * 10) * sin(oy * 10);
            //             xx = lerp(x, xx, grow);
            xx *= 0.95;
            xx += 3.12;
            //             yy = lerp(y, yy, grow);
            //             yy += cos(oy * 10) * sin(oy * 10);
            // if (i == 0) {
            //     oriX = xx;
            // }
            this.vertices.push((xx - 0) * 0.05 * 1.0 - 1.2, yy * 0.05 * 1.0 - 1.2);
            // i++;
        }
    }
};

let tinyJumpers = new Scene("Tiny jumpers");

tinyJumpers.update = function(sum) {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount - sum + 10000000000) * 0.025 * 0.0001;
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
            let xx = x + (Math.pow(Math.sin(m * x * 100) * Math.sin(t * y * 1e-3), 500));
            let yy = y + (Math.pow(Math.sin(m * y * 100) * Math.sin(t * x * 1e-3), 500));
            //                         xx += cos(oy * 10) * sin(oy * 10);
            //             xx = lerp(x, xx, grow);
            xx *= 0.95;
            xx += 3.12;
            //             yy = lerp(y, yy, grow);
            //             yy += cos(oy * 10) * sin(oy * 10);
            // if (i == 0) {
            //     oriX = xx;
            // }
            this.vertices.push((xx - 0) * 0.05 * 1.0 - 1.2, yy * 0.05 * 1.0 - 1.2);
            // i++;
        }
    }
};