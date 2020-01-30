let concerto = new Scene("concerto");

concerto.update = function() {
    this.vertices = [];
    let amountX = 50;
    let amountY = 50;
    let t = (drawCount + 10000000000) * 0.025 * 0.0001;
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
            this.vertices.push((xx - 0) * 0.05 * 1.0 - 1.2, yy * 0.05 * 1.0 - 1.2);
        }
    }
};