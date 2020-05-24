let cyanDots = new ShaderProgram("cyan-dots");

cyanDots.vertText = `
    // beginGLSL
    attribute vec2 coordinates;
    varying vec2 myposition;
    varying vec2 center;
    void main(void) {
        gl_Position = vec4(coordinates, 0.0, 1.0);
        center = vec2(gl_Position.x, gl_Position.y);
        center = 512.0 + center * 512.0;
        myposition = vec2(gl_Position.x, gl_Position.y);
        gl_PointSize = 180.0;
    }
    // endGLSL
    `;
cyanDots.fragText = `
    // beginGLSL
    precision mediump float;
    varying vec2 myposition;
    varying vec2 center;
    float rand(vec2 co){
        return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(co.x)));
    }
    void main(void) {
        // vec2 uv = gl_PointCoord.xy / vec2(1600, 1600);
        // float d = length(uv - center);
        vec2 posit = myposition;
        vec2 uv = gl_FragCoord.xy / vec2(2560, 1600);
        // uv.x = uv.x + 1.0;
        uv = uv * 2.0;
        uv = uv + 0.5;
        // uv = uv * 1.0;
        float ALPHA = 0.75;
        vec2 pos = gl_PointCoord - vec2(0.5, 0.5);
        float dist_squared = dot(pos, pos);
        float alpha;
        if (dist_squared < 0.25) {
            alpha = ALPHA;
        } else {
            alpha = 0.0;
        }
        float bl = ((posit.y + 1.0) * 2.0);
        alpha = smoothstep(0.015, 0.0095, dist_squared) * 0.49;
        float rando = rand(pos);
        // gl_FragColor = vec4(1.0, (1.0 - dist_squared * 40.) * 0.6, 0.0, alpha + ((0.12 - dist_squared) * 4.) - (rando * 0.2));
        // gl_FragColor = vec4(0.1 - 1.1 * alpha, 0.01 + 0.9 * alpha, 0.3, (0.9 - dist_squared * 10.0) * 0.125 + alpha) * 3.0;
        gl_FragColor = vec4(0.2 - 1.1 * alpha + bl, 0.01 + 0.9 * alpha, 0.3, (0.9 - dist_squared * 40.0 + (bl * 1.5) - (rando * 0.15)) * 0.125 * 0.5 + alpha) * 4.0;
        gl_FragColor.rb -= (posit.y + 1.0) * 0.45;
         gl_FragColor.g -= (posit.y + 0.75) * 0.125;
//         gl_FragColor = vec4(1.0, 1.0 - dist_squared * 1.0, 0.0, 0.35 - dist_squared - (rando * 0.2));
        // gl_FragColor = vec4(d * 0.001, uv.x, 0.0, 0.25);
        
         gl_FragColor.rgb = 1.0 - gl_FragColor.rbg;
    }
    // endGLSL
`;
cyanDots.init();
// redraw();

cyanDots.vertText = `
    // beginGLSL
    attribute vec2 coordinates;
    varying vec2 myposition;
    varying vec2 center;
    void main(void) {
        gl_Position = vec4(coordinates, 0.0, 1.0);
        center = vec2(gl_Position.x, gl_Position.y);
        center = 512.0 + center * 512.0;
        myposition = vec2(gl_Position.x, gl_Position.y);
        gl_PointSize = 180.0;
    }
    // endGLSL
    `;
cyanDots.fragText = `
    // beginGLSL
    precision mediump float;
    varying vec2 myposition;
    varying vec2 center;
    float rand(vec2 co){
        return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(co.x)));
    }
    void main(void) {
        // vec2 uv = gl_PointCoord.xy / vec2(1600, 1600);
        // float d = length(uv - center);
        vec2 posit = myposition;
        vec2 uv = gl_FragCoord.xy / vec2(2560, 1600);
        // uv.x = uv.x + 1.0;
        uv = uv * 2.0;
        uv = uv + 0.5;
        // uv = uv * 1.0;
        float ALPHA = 0.75;
        vec2 pos = gl_PointCoord - vec2(0.5, 0.5);
        float dist_squared = dot(pos, pos);
        float alpha;
        if (dist_squared < 0.25) {
            alpha = ALPHA;
        } else {
            alpha = 0.0;
        }
        float bl = ((posit.y + 1.0) * 2.0);
        alpha = smoothstep(0.015, 0.0095, dist_squared) * 0.49;
        float rando = rand(pos);
        // gl_FragColor = vec4(1.0, (1.0 - dist_squared * 40.) * 0.6, 0.0, alpha + ((0.12 - dist_squared) * 4.) - (rando * 0.2));
        // gl_FragColor = vec4(0.1 - 1.1 * alpha, 0.01 + 0.9 * alpha, 0.3, (0.9 - dist_squared * 10.0) * 0.125 + alpha) * 3.0;
        gl_FragColor = vec4(0.2 - 1.1 * alpha, 0.01 + 0.9 * alpha, 0.3, (0.9 - dist_squared * 40.0 + (bl * 1.5) - (rando * 0.15)) * 0.125 * 0.5 + alpha) * 4.0;
        gl_FragColor.rb -= (posit.y + 1.0) * 0.45;
         gl_FragColor.g -= (posit.y + 0.75) * 0.125;
//         gl_FragColor = vec4(1.0, 1.0 - dist_squared * 1.0, 0.0, 0.35 - dist_squared - (rando * 0.2));
        // gl_FragColor = vec4(d * 0.001, uv.x, 0.0, 0.25);
        
         gl_FragColor.rgb = 1.0 - gl_FragColor.rbg;
    }
    // endGLSL
`;
cyanDots.init();
// redraw();

cyanDots.vertText = `
    // beginGLSL
    attribute vec2 coordinates;
    varying vec2 myposition;
    varying vec2 center;
    void main(void) {
        gl_Position = vec4(coordinates, 0.0, 1.0);
        center = vec2(gl_Position.x, gl_Position.y);
        center = 512.0 + center * 512.0;
        myposition = vec2(gl_Position.x, gl_Position.y);
        gl_PointSize = 180.0;
    }
    // endGLSL
    `;
cyanDots.fragText = `
    // beginGLSL
    precision mediump float;
    varying vec2 myposition;
    varying vec2 center;
    float rand(vec2 co){
        return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(co.x)));
    }
    void main(void) {
        // vec2 uv = gl_PointCoord.xy / vec2(1600, 1600);
        // float d = length(uv - center);
        vec2 posit = myposition;
        vec2 uv = gl_FragCoord.xy / vec2(2560, 1600);
        // uv.x = uv.x + 1.0;
        uv = uv * 2.0;
        uv = uv + 0.5;
        // uv = uv * 1.0;
        float ALPHA = 0.75;
        vec2 pos = gl_PointCoord - vec2(0.5, 0.5);
        float dist_squared = dot(pos, pos);
        float alpha;
        if (dist_squared < 0.25) {
            alpha = ALPHA;
        } else {
            alpha = 0.0;
        }
        float bl = ((posit.y + 1.0) * 2.0);
        alpha = smoothstep(0.015, 0.0095, dist_squared) * 0.49;
        float rando = rand(pos);
        // gl_FragColor = vec4(1.0, (1.0 - dist_squared * 40.) * 0.6, 0.0, alpha + ((0.12 - dist_squared) * 4.) - (rando * 0.2));
        // gl_FragColor = vec4(0.1 - 1.1 * alpha, 0.01 + 0.9 * alpha, 0.3, (0.9 - dist_squared * 10.0) * 0.125 + alpha) * 3.0;
        gl_FragColor = vec4(0.2, 0.01 + 0.9 * alpha, 0.3, (0.9 - dist_squared * 40.0 + (bl * 1.5) - (rando * 0.15)) * 0.125 * 0.5 + alpha) * 4.0;
        gl_FragColor.rb -= (posit.y + 1.0) * 0.45;
         gl_FragColor.g -= (posit.y + 0.75) * 0.125;
//         gl_FragColor = vec4(1.0, 1.0 - dist_squared * 1.0, 0.0, 0.35 - dist_squared - (rando * 0.2));
        // gl_FragColor = vec4(d * 0.001, uv.x, 0.0, 0.25);
        
         gl_FragColor.rgb = 1.0 - gl_FragColor.rbg;
    }
    // endGLSL
`;
cyanDots.init();
// redraw();


cyanDots.vertText = `
    // beginGLSL
    attribute vec2 coordinates;
    varying vec2 myposition;
    varying vec2 center;
    void main(void) {
        gl_Position = vec4(coordinates, 0.0, 1.0);
        center = vec2(gl_Position.x, gl_Position.y);
        center = 512.0 + center * 512.0;
        myposition = vec2(gl_Position.x, gl_Position.y);
        gl_PointSize = 180.0;
    }
    // endGLSL
    `;
cyanDots.fragText = `
    // beginGLSL
    precision mediump float;
    varying vec2 myposition;
    varying vec2 center;
    float rand(vec2 co){
        return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(co.x)));
    }
    void main(void) {
        // vec2 uv = gl_PointCoord.xy / vec2(1600, 1600);
        // float d = length(uv - center);
        vec2 posit = myposition;
        vec2 uv = gl_FragCoord.xy / vec2(2560, 1600);
        // uv.x = uv.x + 1.0;
        uv = uv * 2.0;
        uv = uv + 0.5;
        // uv = uv * 1.0;
        float ALPHA = 0.75;
        vec2 pos = gl_PointCoord - vec2(0.5, 0.5);
        float dist_squared = dot(pos, pos);
        float alpha;
        if (dist_squared < 0.25) {
            alpha = ALPHA;
        } else {
            alpha = 0.0;
        }
        float bl = ((posit.y + 1.0) * 2.0);
        alpha = smoothstep(0.015, 0.0095, dist_squared) * 0.49;
        float rando = rand(pos);
        // gl_FragColor = vec4(1.0, (1.0 - dist_squared * 40.) * 0.6, 0.0, alpha + ((0.12 - dist_squared) * 4.) - (rando * 0.2));
        // gl_FragColor = vec4(0.1 - 1.1 * alpha, 0.01 + 0.9 * alpha, 0.3, (0.9 - dist_squared * 10.0) * 0.125 + alpha) * 3.0;
        gl_FragColor = vec4(0.2, 0.01 + 0.9 * alpha, 0.3, (0.9 - dist_squared * 40.0 + (bl * 1.5) - (rando * 0.15)) * 0.125 * 0.5 + alpha) * 4.0;
        gl_FragColor.rb -= (posit.y + 1.0) * 0.85;
//          gl_FragColor.g -= (posit.y + 0.75) * 0.25;
//         gl_FragColor = vec4(1.0, 1.0 - dist_squared * 1.0, 0.0, 0.35 - dist_squared - (rando * 0.2));
        // gl_FragColor = vec4(d * 0.001, uv.x, 0.0, 0.25);
        
         gl_FragColor.rgb = 1.0 - gl_FragColor.rbg;
    }
    // endGLSL
`;
cyanDots.init();
// redraw();


cyanDots.vertText = `
    // beginGLSL
    attribute vec2 coordinates;
    varying vec2 myposition;
    varying vec2 center;
    void main(void) {
        gl_Position = vec4(coordinates, 0.0, 1.0);
        center = vec2(gl_Position.x, gl_Position.y);
        center = 512.0 + center * 512.0;
        myposition = vec2(gl_Position.x, gl_Position.y);
        gl_PointSize = 180.0;
    }
    // endGLSL
    `;
cyanDots.fragText = `
    // beginGLSL
    precision mediump float;
    varying vec2 myposition;
    varying vec2 center;
    float rand(vec2 co){
        return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(co.x)));
    }
    void main(void) {
        // vec2 uv = gl_PointCoord.xy / vec2(1600, 1600);
        // float d = length(uv - center);
        vec2 posit = myposition;
        vec2 uv = gl_FragCoord.xy / vec2(2560, 1600);
        // uv.x = uv.x + 1.0;
        uv = uv * 2.0;
        uv = uv + 0.5;
        // uv = uv * 1.0;
        float ALPHA = 0.75;
        vec2 pos = gl_PointCoord - vec2(0.5, 0.5);
        float dist_squared = dot(pos, pos);
        float alpha;
        if (dist_squared < 0.25) {
            alpha = ALPHA;
        } else {
            alpha = 0.0;
        }
        float bl = ((posit.y + 1.0) * 2.0);
        alpha = smoothstep(0.015, 0.0095, dist_squared) * 0.49;
        float rando = rand(pos);
        // gl_FragColor = vec4(1.0, (1.0 - dist_squared * 40.) * 0.6, 0.0, alpha + ((0.12 - dist_squared) * 4.) - (rando * 0.2));
        // gl_FragColor = vec4(0.1 - 1.1 * alpha, 0.01 + 0.9 * alpha, 0.3, (0.9 - dist_squared * 10.0) * 0.125 + alpha) * 3.0;
        gl_FragColor = vec4(0.2, 0.00, 0.3, (0.9 - dist_squared * 40.0 + (bl * 1.5) - (rando * 0.15)) * 0.125 * 0.5 + alpha) * 4.0;
        gl_FragColor.rb -= (posit.y + 1.0) * 0.5;
//          gl_FragColor.g -= (posit.y + 0.75) * 0.25;
//         gl_FragColor = vec4(1.0, 1.0 - dist_squared * 1.0, 0.0, 0.35 - dist_squared - (rando * 0.2));
        // gl_FragColor = vec4(d * 0.001, uv.x, 0.0, 0.25);
        
         gl_FragColor.rgb = 1.0 - gl_FragColor.rbg;
    }
    // endGLSL
`;
cyanDots.init();
// redraw();



cyanDots.vertText = `
    // beginGLSL
    attribute vec2 coordinates;
    varying vec2 myposition;
    varying vec2 center;
    void main(void) {
        gl_Position = vec4(coordinates, 0.0, 1.0);
        center = vec2(gl_Position.x, gl_Position.y);
        center = 512.0 + center * 512.0;
        myposition = vec2(gl_Position.x, gl_Position.y);
        gl_PointSize = 180.0;
    }
    // endGLSL
    `;
cyanDots.fragText = `
    // beginGLSL
    precision mediump float;
    varying vec2 myposition;
    varying vec2 center;
    float rand(vec2 co){
        return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(co.x)));
    }
    void main(void) {
        // vec2 uv = gl_PointCoord.xy / vec2(1600, 1600);
        // float d = length(uv - center);
        vec2 posit = myposition;
        vec2 uv = gl_FragCoord.xy / vec2(2560, 1600);
        // uv.x = uv.x + 1.0;
        uv = uv * 2.0;
        uv = uv + 0.5;
        // uv = uv * 1.0;
        float ALPHA = 0.75;
        vec2 pos = gl_PointCoord - vec2(0.5, 0.5);
        float dist_squared = dot(pos, pos);
        float alpha;
        if (dist_squared < 0.25) {
            alpha = ALPHA;
        } else {
            alpha = 0.0;
        }
        float bl = ((posit.y + 1.0) * 2.0);
        alpha = smoothstep(0.015, 0.0095, dist_squared) * 0.49;
        float rando = rand(pos);
        // gl_FragColor = vec4(1.0, (1.0 - dist_squared * 40.) * 0.6, 0.0, alpha + ((0.12 - dist_squared) * 4.) - (rando * 0.2));
        // gl_FragColor = vec4(0.1 - 1.1 * alpha, 0.01 + 0.9 * alpha, 0.3, (0.9 - dist_squared * 10.0) * 0.125 + alpha) * 3.0;
        gl_FragColor = vec4(0.2, 0.00, 0.3, (0.9 - dist_squared * 40.0 + (bl * 1.5) - (rando * 0.15)) * 0.125 * 0.5 + alpha) * 4.0;
        gl_FragColor.rb -= (posit.y + 1.0) * 0.5;
//          gl_FragColor.g -= (posit.y + 0.75) * 1.25;
//         gl_FragColor = vec4(1.0, 1.0 - dist_squared * 1.0, 0.0, 0.35 - dist_squared - (rando * 0.2));
        // gl_FragColor = vec4(d * 0.001, uv.x, 0.0, 0.25);
        
         gl_FragColor.rgb = 1.0 - gl_FragColor.rbg;
        gl_FragColor.rbg = gl_FragColor.bgr;
    }
    // endGLSL
`;
cyanDots.init();
// redraw();



cyanDots.vertText = `
    // beginGLSL
    attribute vec2 coordinates;
    varying vec2 myposition;
    varying vec2 center;
    void main(void) {
        gl_Position = vec4(coordinates, 0.0, 1.0);
        center = vec2(gl_Position.x, gl_Position.y);
        center = 512.0 + center * 512.0;
        myposition = vec2(gl_Position.x, gl_Position.y);
        gl_PointSize = 180.0;
    }
    // endGLSL
    `;
cyanDots.fragText = `
    // beginGLSL
    precision mediump float;
    varying vec2 myposition;
    varying vec2 center;
    float rand(vec2 co){
        return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(co.x)));
    }
    void main(void) {
        // vec2 uv = gl_PointCoord.xy / vec2(1600, 1600);
        // float d = length(uv - center);
        vec2 posit = myposition;
        vec2 uv = gl_FragCoord.xy / vec2(2560, 1600);
        // uv.x = uv.x + 1.0;
        uv = uv * 2.0;
        uv = uv + 0.5;
        // uv = uv * 1.0;
        float ALPHA = 0.75;
        vec2 pos = gl_PointCoord - vec2(0.5, 0.5);
        float dist_squared = dot(pos, pos);
        float alpha;
        if (dist_squared < 0.25) {
            alpha = ALPHA;
        } else {
            alpha = 0.0;
        }
        float bl = ((posit.y + 1.0) * 2.0);
        alpha = smoothstep(0.015, 0.0095, dist_squared) * 0.49;
        float rando = rand(pos);
        // gl_FragColor = vec4(1.0, (1.0 - dist_squared * 40.) * 0.6, 0.0, alpha + ((0.12 - dist_squared) * 4.) - (rando * 0.2));
        // gl_FragColor = vec4(0.1 - 1.1 * alpha, 0.01 + 0.9 * alpha, 0.3, (0.9 - dist_squared * 10.0) * 0.125 + alpha) * 3.0;
        gl_FragColor = vec4(0.2, 0.00, 0.3, (0.9 - dist_squared * 40.0 + (bl * 1.5) - (rando * 0.15)) * 0.125 * 0.5 + alpha) * 4.0;
        gl_FragColor.rb -= (posit.y + 1.0) * 0.5;
//          gl_FragColor.g -= (posit.y + 0.75) * 1.25;
//         gl_FragColor = vec4(1.0, 1.0 - dist_squared * 1.0, 0.0, 0.35 - dist_squared - (rando * 0.2));
        // gl_FragColor = vec4(d * 0.001, uv.x, 0.0, 0.25);
        
         gl_FragColor.rgb = 1.0 - gl_FragColor.rbg;
        gl_FragColor.rbg = gl_FragColor.rgr;
    }
    // endGLSL
`;
cyanDots.init();
// redraw();



cyanDots.vertText = `
    // beginGLSL
    attribute vec2 coordinates;
    varying vec2 myposition;
    varying vec2 center;
    void main(void) {
        gl_Position = vec4(coordinates, 0.0, 1.0);
        center = vec2(gl_Position.x, gl_Position.y);
        center = 512.0 + center * 512.0;
        myposition = vec2(gl_Position.x, gl_Position.y);
        gl_PointSize = 180.0;
    }
    // endGLSL
    `;
cyanDots.fragText = `
    // beginGLSL
    precision mediump float;
    varying vec2 myposition;
    varying vec2 center;
    float rand(vec2 co){
        return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(co.x)));
    }
    void main(void) {
        // vec2 uv = gl_PointCoord.xy / vec2(1600, 1600);
        // float d = length(uv - center);
        vec2 posit = myposition;
        vec2 uv = gl_FragCoord.xy / vec2(2560, 1600);
        // uv.x = uv.x + 1.0;
        uv = uv * 2.0;
        uv = uv + 0.5;
        // uv = uv * 1.0;
        float ALPHA = 0.75;
        vec2 pos = gl_PointCoord - vec2(0.5, 0.5);
        float dist_squared = dot(pos, pos);
        float alpha;
        if (dist_squared < 0.25) {
            alpha = ALPHA;
        } else {
            alpha = 0.0;
        }
        float bl = ((posit.y + 1.0) * 2.0);
        alpha = smoothstep(0.015, 0.0095, dist_squared) * 0.49;
        float rando = rand(pos);
        // gl_FragColor = vec4(1.0, (1.0 - dist_squared * 40.) * 0.6, 0.0, alpha + ((0.12 - dist_squared) * 4.) - (rando * 0.2));
        // gl_FragColor = vec4(0.1 - 1.1 * alpha, 0.01 + 0.9 * alpha, 0.3, (0.9 - dist_squared * 10.0) * 0.125 + alpha) * 3.0;
        gl_FragColor = vec4(0.2, 1.1, 0.3 * bl, (0.9 - dist_squared * 40.0 + (bl * 0.2) - (rando * 0.15)) * 0.125 * 0.5 + alpha) * 4.0;
        gl_FragColor.rb -= (posit.y + 1.0) * 0.5;
//          gl_FragColor.g -= (posit.y + 0.75) * 1.25;
//         gl_FragColor = vec4(1.0, 1.0 - dist_squared * 1.0, 0.0, 0.35 - dist_squared - (rando * 0.2));
        // gl_FragColor = vec4(d * 0.001, uv.x, 0.0, 0.25);
        
         gl_FragColor.rgb = 1.0 - gl_FragColor.rbg;
        gl_FragColor.rbg = gl_FragColor.rgr;
    }
    // endGLSL
`;
cyanDots.init();
// redraw();



cyanDots.vertText = `
    // beginGLSL
    attribute vec2 coordinates;
    varying vec2 myposition;
    varying vec2 center;
    void main(void) {
        gl_Position = vec4(coordinates, 0.0, 1.0);
        center = vec2(gl_Position.x, gl_Position.y);
        center = 512.0 + center * 512.0;
        myposition = vec2(gl_Position.x, gl_Position.y);
        gl_PointSize = 180.0;
    }
    // endGLSL
    `;
cyanDots.fragText = `
    // beginGLSL
    precision mediump float;
    varying vec2 myposition;
    varying vec2 center;
    float rand(vec2 co){
        return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(co.x)));
    }
    void main(void) {
        // vec2 uv = gl_PointCoord.xy / vec2(1600, 1600);
        // float d = length(uv - center);
        vec2 posit = myposition;
        vec2 uv = gl_FragCoord.xy / vec2(2560, 1600);
        // uv.x = uv.x + 1.0;
        uv = uv * 2.0;
        uv = uv + 0.5;
        // uv = uv * 1.0;
        float ALPHA = 0.75;
        vec2 pos = gl_PointCoord - vec2(0.5, 0.5);
        float dist_squared = dot(pos, pos);
        float alpha;
        if (dist_squared < 0.25) {
            alpha = ALPHA;
        } else {
            alpha = 0.0;
        }
        float bl = ((posit.y + 1.0) * 2.0);
        alpha = smoothstep(0.015, 0.0095, dist_squared) * 0.49;
        float rando = rand(pos);
        // gl_FragColor = vec4(1.0, (1.0 - dist_squared * 40.) * 0.6, 0.0, alpha + ((0.12 - dist_squared) * 4.) - (rando * 0.2));
        // gl_FragColor = vec4(0.1 - 1.1 * alpha, 0.01 + 0.9 * alpha, 0.3, (0.9 - dist_squared * 10.0) * 0.125 + alpha) * 3.0;
        gl_FragColor = vec4(0.2 + bl * 0.0, 2.2, 0.2 * bl, (1.1 - dist_squared * 40.0 + (bl * 0.1) - (rando * 0.15)) * 0.125 * 0.5 + alpha) * 4.0;
        gl_FragColor.rb -= (posit.y + 1.0) * 0.5;
//          gl_FragColor.g -= (posit.y + 0.75) * 1.25;
//         gl_FragColor = vec4(1.0, 1.0 - dist_squared * 1.0, 0.0, 0.35 - dist_squared - (rando * 0.2));
        // gl_FragColor = vec4(d * 0.001, uv.x, 0.0, 0.25);
        
         gl_FragColor.rgb = 1.0 - gl_FragColor.rbg;
        gl_FragColor.rbg = gl_FragColor.rgr;
    }
    // endGLSL
`;
cyanDots.init();
// redraw();