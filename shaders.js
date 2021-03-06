let blueBackground = new ShaderProgram("blue-background");

blueBackground.vertText = `
    // beginGLSL
    // our vertex data
    attribute vec3 aPosition;
    // our texcoordinates
    attribute vec2 aTexCoord;
    // this is a variable that will be shared with the fragment shader
    // we will assign the attribute texcoords to the varying texcoords to move them from the vert shader to the frag shader
    // it can be called whatever you want but often people prefiv it with 'v' to indicate that it is a varying
    varying vec2 vTexCoord;
    void main() {
        // copy the texture coordinates
        vTexCoord = aTexCoord;
        // copy the position data into a vec4, using 1.0 as the w component
        vec4 positionVec4 = vec4(aPosition, 1.0);
        positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
        // send the vertex information on to the fragment shader
        gl_Position = positionVec4;
    }
    // endGLSL
    `;
blueBackground.fragText = `
    // beginGLSL
    precision mediump float;
varying vec2 vTexCoord;
uniform float time;
uniform float resolution;
float plot(vec2 s, float p) {
  float largeur = abs(sin(time * 0.01)) * 0.1 + 0.1;
  return smoothstep(p - largeur, p, s.y) - smoothstep(p, p + largeur, s.y);
}
float circ(float size, float vx, float vy, vec2 center) {
//   float x = center.x * (1.0 + sin(time * 20.) * 0.5);
//   float y = center.y * (1.0 + cos(time * 20.) * 0.5);
  vec2 v = center - vec2(vx, vy);
  float d = 1.0 / length(v * size);
  return d;
}
float Circle(vec2 uv, vec2 p, float r, float blur) {
    float d = length(uv - p); 
    float c = smoothstep(r, r - blur, d); 
    return c;
}
vec3 CircleRGB(vec2 uv, vec2 p, float r, float blur, vec3 col) {
    float d = length(uv - p); 
    float c = smoothstep(r, r - blur, d); 
    return col * c;
}
vec3 InvCircleRGB(vec2 uv, vec2 p, float r, float blur, vec3 col) {
    float d = length(p - uv); 
    float c = smoothstep(r - blur, r, d); 
    return col * c;
}
float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(time)));
}
void main() {
    vec2 uv = gl_FragCoord.xy / vec2(1280, 800);
    uv -= vec2(0.5, 0.5);
    uv.x *= 1280.0 / 800.0;
    uv *= 0.5;
//  the formula to make the background twice as big and identical 
    if (resolution == 1.0) {
        uv *= 0.5;
        uv -= vec2(0.5 * 1280.0 / 800.0, 0.5) * 0.25;      
    }
//  ------   
    float d = length(uv);
    float t = time * 0.125 * 0.06125 * 0.5;
    t *= 2.;
//     uv.x += sin(t * 10000.) * 0.0025;
//     uv.y += sin(t * 15000.) * 0.0025;
//     t = time * 0.125;
    float c = d;
//     if (d < 0.3) c = 1.; else c = 0.;
    float r = 0.3;
//     c = smoothstep(r, r - 0.1, d);
//     c = c - smoothstep(r * 0.5, r * 0.5 - 0.1, d);
    vec2 p = vec2(1.0, -1.4);
    c = Circle(uv, p, 0.3, 0.1);
    vec2 p2 = vec2(0.1 * sin(t * 100.), 0.1 * cos(t * 100.)) * 0.4;
    vec2 p3 = vec2(0.1 * sin(t * 50.), 0.1 * cos(t * 50.)) * 0.4;
    float siz = sin(t * 100.);
    float siz2 = sin(t * 50.);
    p2 = vec2(0.0, 0.0);
    vec3 col = CircleRGB(uv, p2, 1.9, 0.2, vec3(2., 1.4, 1.0));
    col.r *= sin(length(uv - p) * (6. + sin(1. * 20.) * 0.0001));
//     col.r += abs(sin(length(uv - p) * (0.1 + sin(1. * 2.) * 0.001)) * 5.);
    col.g *= sin(length(uv - p) * (6. + sin(1. * 20.) * 0.01));
    vec3 col2 = CircleRGB(uv, p2, 1.9, 0.2, vec3(1., 0., 0.0));
    col2.r *= sin(length(uv - p2) * (6. + sin(1. * 20.) * 0.01));
    vec2 newV = (uv + tan(uv.y * 3.)) - (p + sin(uv.x * 3.));
    newV += cos(sin(uv * 20.));
    col *= sin(atan(newV.x, newV.y));
      col *= sin(sin(atan(newV.x, newV.y) * (sin(t * 100.) * 1.)) * 10. + sin(t * 10.) * 100.);
//       col *= sin(cos(atan(newV.x, newV.y) * (sin(t * 100.) * 1.)) * 10. + cos(t * 10.) * 100.);
//       col *= sin(sin(atan(newV.x, newV.y) * (sin(t * 100.) * 1.)) * 10. + cos(t * 10.) * 100.);
//col -=  CircleRGB(uv, p2, 0.2, 0.2, vec3(1.0, 1.0, 1.0));
//     col = max(col, 0.);
//col += CircleRGB(uv, p2, 0.5, 0.1, vec3(0.2, 0.0, 0.8));
//     col += CircleRGB(uv, p2, 0.94, 0.2, vec3(0.0, 0.4, 1.0));
//             col += CircleRGB(uv, p2, 0.5, 0.2, vec3(0.5, 0.7, 0.0) * 0.75);
//             col += CircleRGB(uv, p2, 0.5, 0.2, vec3(0.5, 0.7, 0.0));
//     col -= InvCircleRGB(uv, p2, 0.6, 0.2, vec3(1.5, 1.7, 1.0));
    float rando = rand(uv * 10.) * 0.075;
//     col.r -= rando * 1.;
     col.g *= 0.5;
    gl_FragColor = vec4((col + col2 * 0. - rando) * 1., 1.0);
    // gl_FragColor = vec4(col * 1.0, 1.0);
}
    // endGLSL
`;
blueBackground.init();
// time = gl.getUniformLocation(getProgram("blue-background"), "time");
// resolutionBG = gl.getUniformLocation(getProgram("blue-background"), "resolution");



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
        // vec2 pos = myposition;
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
        alpha = smoothstep(0.015, 0.0095, dist_squared) * 0.49;
        float rando = rand(pos);
        // gl_FragColor = vec4(1.0, (1.0 - dist_squared * 40.) * 0.6, 0.0, alpha + ((0.12 - dist_squared) * 4.) - (rando * 0.2));
        // gl_FragColor = vec4(0.1 - 1.1 * alpha, 0.01 + 0.9 * alpha, 0.3, (0.9 - dist_squared * 10.0) * 0.125 + alpha) * 3.0;
        gl_FragColor = vec4(0.1 - 1.1 * alpha, 0.01 + 0.9 * alpha, 0.3, (0.9 - dist_squared * 10.0 - (rando * 0.15)) * 0.125 + alpha) * 3.0;
//         gl_FragColor = vec4(1.0, 1.0 - dist_squared * 1.0, 0.0, 0.35 - dist_squared - (rando * 0.2));
        // gl_FragColor = vec4(d * 0.001, uv.x, 0.0, 0.25);
    }
    // endGLSL
`;
cyanDots.init();



let withImage = new ShaderProgram("with-image");

withImage.vertText = `
    // beginGLSL
    attribute vec3 a_position;
    attribute vec2 a_texcoord;
    varying vec2 v_texcoord;
    void main() {
        v_texcoord = a_texcoord;
        v_texcoord.y = 0.5 - v_texcoord.y;
        vec4 positionVec4 = vec4(a_position, 1.0);
        positionVec4.xy = (positionVec4.xy - vec2(0.5, 0.)) * 2.0;
        gl_Position = positionVec4;
    }
    // endGLSL
    `;
withImage.fragText = `
    // beginGLSL
    precision mediump float;
    varying vec2 v_texcoord;
    uniform sampler2D u_texture;
    void main() {
        gl_FragColor = texture2D(u_texture, v_texcoord);
    }
    // endGLSL
`;
withImage.imgURL = "title.png";
withImage.init = function() {
    if (shadersReadyToInitiate) {
        // Asynchronously load an image
        this.image = new Image();
        this.image.src = this.imgURL;
        let that = this;
        this.image.addEventListener('load', function() {
            titledLoaded = true;
            // this.image.onload = function() {
            // Create a vertex shader object
            var vertShader = gl.createShader(gl.VERTEX_SHADER);
            // Attach vertex shader source code
            gl.shaderSource(vertShader, that.vertText);
            // console.log(that.vertText);
            // Compile the vertex shader
            gl.compileShader(vertShader);
            // fragment shader source code
            // Create fragment shader object
            var fragShader = gl.createShader(gl.FRAGMENT_SHADER);
            // Attach fragment shader source code
            gl.shaderSource(fragShader, that.fragText);
            // Compile the fragmentt shader
            gl.compileShader(fragShader);
            // Create a shader program object to store
            // the combined shader program
            that.program = gl.createProgram();
            // Attach a vertex shader
            gl.attachShader(that.program, vertShader);
            // Attach a fragment shader
            gl.attachShader(that.program, fragShader);
            // Link both programs
            gl.linkProgram(that.program);
            that.initialized = true;
            that.positionLocation = gl.getAttribLocation(that.program, "a_position");
            that.texcoordLocation = gl.getAttribLocation(that.program, "a_texcoord");
            let vertices = new Float32Array([-1, 1, 1, 1, 1, -1, // Triangle 1
                -1, 1, 1, -1, -1, 1 // Triangle 2
            ]);
            that.textureLocation = gl.getUniformLocation(that.program, "u_texture");
            // Create a buffer for texcoords.
            that.buffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, that.buffer);
            gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
            // We'll supply texcoords as floats.
            gl.vertexAttribPointer(that.texcoordLocation, 2, gl.FLOAT, false, 0, 0);
            gl.enableVertexAttribArray(that.texcoordLocation);
            // Set Texcoords.
            // setTexcoords(gl);
            // Create a texture.
            gl.activeTexture(gl.TEXTURE0);
            that.texture = gl.createTexture();
            gl.bindTexture(gl.TEXTURE_2D, that.texture);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
            // Fill the texture with a 1x1 blue pixel.
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE,
                new Uint8Array([0, 0, 255, 255]));
            // Now that the image has loaded make copy it to the texture.
            gl.bindTexture(gl.TEXTURE_2D, that.texture);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, that.image);
            // gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, this.image);
            // gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 64, 64, 0, gl.RGBA, gl.UNSIGNED_BYTE, this.image);
            gl.generateMipmap(gl.TEXTURE_2D);
            // });
        });
    }
};
withImage.init();

let creditsShaders = [];
for (let i = 0; i < 5; i++) {
    let sh = new ShaderProgram("credits, " + i);
    sh.vertText = withImage.vertText;
    sh.fragText = withImage.fragText;
    sh.imgURL = "credits-" + i + ".png";
    sh.init = withImage.init;
    creditsShaders.push(sh);
}

let textureShader = new ShaderProgram("textu");

textureShader.vertText = `
attribute vec3 a_position;
attribute vec2 a_texcoord;
varying vec2 v_texcoord;

void main() {
  // Multiply the position by the matrix.
  vec4 positionVec4 = vec4(a_position, 1.0);
  // gl_Position = a_position;
  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
  gl_Position = positionVec4;

  // Pass the texcoord to the fragment shader.
  v_texcoord = a_texcoord;
}
`;

textureShader.fragText = `
precision mediump float;

// Passed in from the vertex shader.
uniform float time;
varying vec2 v_texcoord;

// The texture.
uniform sampler2D u_texture;

float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(time)));
}

void main() {
    vec2 uv = vec2(gl_FragCoord.xy) / vec2(1600, 1600);
   float rando = rand(vec2(uv.x, uv.y));
   gl_FragColor = texture2D(u_texture, v_texcoord);
   // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
   // gl_FragColor.r = gl_FragColor.r * 0.5;
   gl_FragColor.rgb = (gl_FragColor.rgb - (rando * 0.025)) * 1.5;
}
`;
textureShader.init();

let processorShader = new ShaderProgram("process");

processorShader.vertText = `
attribute vec3 a_position;
attribute vec2 a_texcoord;

// uniform vec2 u_resolution;
// uniform float u_flipY;

varying vec2 v_texcoord;

void main() {
  // Multiply the position by the matrix.
  vec4 positionVec4 = vec4(a_position, 1.0);
  // gl_Position = a_position;
  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
  gl_Position = positionVec4;

  // Pass the texcoord to the fragment shader.
  v_texcoord = a_texcoord;
}
`;

processorShader.fragText = `
precision mediump float;

// our texture
uniform sampler2D u_texture;
uniform vec2 u_textureSize;
uniform float u_kernel[9];
uniform float u_kernelWeight;
uniform vec2 direction;

// the texCoords passed in from the vertex shader.
varying vec2 v_texcoord;

vec4 blur9(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
  vec4 color = vec4(0.0);
  vec2 off1 = vec2(1.3846153846) * direction;
  vec2 off2 = vec2(3.2307692308) * direction;
  color += texture2D(image, uv) * 0.2270270270;
  color += texture2D(image, uv + (off1 / resolution)) * 0.3162162162;
  color += texture2D(image, uv - (off1 / resolution)) * 0.3162162162;
  color += texture2D(image, uv + (off2 / resolution)) * 0.0702702703;
  color += texture2D(image, uv - (off2 / resolution)) * 0.0702702703;
  return color;
}

void main() {
   vec2 uv = vec2(gl_FragCoord.xy);
   // vec2 onePixel = vec2(1.0, 1.0) / u_textureSize;
   // vec4 colorSum =
   //     texture2D(u_texture, v_texcoord + onePixel * vec2(-1, -1)) * u_kernel[0] +
   //     texture2D(u_texture, v_texcoord + onePixel * vec2( 0, -1)) * u_kernel[1] +
   //     texture2D(u_texture, v_texcoord + onePixel * vec2( 1, -1)) * u_kernel[2] +
   //     texture2D(u_texture, v_texcoord + onePixel * vec2(-1,  0)) * u_kernel[3] +
   //     texture2D(u_texture, v_texcoord + onePixel * vec2( 0,  0)) * u_kernel[4] +
   //     texture2D(u_texture, v_texcoord + onePixel * vec2( 1,  0)) * u_kernel[5] +
   //     texture2D(u_texture, v_texcoord + onePixel * vec2(-1,  1)) * u_kernel[6] +
   //     texture2D(u_texture, v_texcoord + onePixel * vec2( 0,  1)) * u_kernel[7] +
   //     texture2D(u_texture, v_texcoord + onePixel * vec2( 1,  1)) * u_kernel[8] ;

   // gl_FragColor = vec4((colorSum / u_kernelWeight).rgb, 1);

   gl_FragColor = blur9(u_texture, v_texcoord, u_textureSize, direction);
   // vec4 pass1 = blur9(u_texture, v_texcoord, u_textureSize, vec2(0.0, 1.5));
   // gl_FragColor = (pass0 + pass1) / 2.0;
   // gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);
}
`;
processorShader.init();





let cyanDots2 = new ShaderProgram("cyan-dots-2");

cyanDots2.vertText = `
    // beginGLSL
    attribute vec2 coordinates;
    varying vec2 myposition;
    varying vec2 center;
    void main(void) {
        gl_Position = vec4(coordinates, 0.0, 1.0);
        center = vec2(gl_Position.x, gl_Position.y);
        center = 512.0 + center * 512.0;
        myposition = vec2(gl_Position.x, gl_Position.y);
        gl_PointSize = 280.0;
    }
    // endGLSL
    `;
cyanDots2.fragText = `
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
        // vec2 pos = myposition;
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
        alpha = smoothstep(0.03, 0.0000095, dist_squared) * 0.49;
        float rando = rand(pos);
        // gl_FragColor = vec4(1.0, (1.0 - dist_squared * 40.) * 0.6, 0.0, alpha + ((0.12 - dist_squared) * 4.) - (rando * 0.2));
        // gl_FragColor = vec4(0.1 - 1.1 * alpha, 0.01 + 0.9 * alpha, 0.3, (0.9 - dist_squared * 10.0) * 0.125 + alpha) * 3.0;
        gl_FragColor = vec4(0.005 + 0.01 * alpha, 0.001 - 1.1 * alpha, 0.025, (0.9 - dist_squared * 50.0 - (rando * 0.15)) * 0.125 + alpha) * 42.0;
//         gl_FragColor = vec4(1.0, 1.0 - dist_squared * 1.0, 0.0, 0.35 - dist_squared - (rando * 0.2));
        // gl_FragColor = vec4(d * 0.001, uv.x, 0.0, 0.25);
    }
    // endGLSL
`;
cyanDots2.init();





let cyanDots3 = new ShaderProgram("cyan-dots-3");

cyanDots3.vertText = `
    // beginGLSL
    attribute vec2 coordinates;
    varying vec2 myposition;
    varying vec2 center;
    void main(void) {
        gl_Position = vec4(coordinates, 0.0, 1.0);
        center = vec2(gl_Position.x, gl_Position.y);
        center = 512.0 + center * 512.0;
        myposition = vec2(gl_Position.x, gl_Position.y);
        gl_PointSize = 280.0;
    }
    // endGLSL
    `;
cyanDots3.fragText = `
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
        // vec2 pos = myposition;
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
        alpha = smoothstep(0.04, 0.0005, dist_squared) * 0.49;
        float rando = rand(pos);
        // gl_FragColor = vec4(1.0, (1.0 - dist_squared * 40.) * 0.6, 0.0, alpha + ((0.12 - dist_squared) * 4.) - (rando * 0.2));
        // gl_FragColor = vec4(0.1 - 1.1 * alpha, 0.01 + 0.9 * alpha, 0.3, (0.9 - dist_squared * 10.0) * 0.125 + alpha) * 3.0;
        gl_FragColor = vec4(0.035 * alpha, 0.025 * alpha, 0.005 + 0.05 * alpha, (0.1 - dist_squared * 50.0 - (rando * 0.15)) * 0.125 + alpha) * 42.0;
//         gl_FragColor = vec4(1.0, 1.0 - dist_squared * 1.0, 0.0, 0.35 - dist_squared - (rando * 0.2));
        // gl_FragColor = vec4(d * 0.001, uv.x, 0.0, 0.25);
    }
    // endGLSL
`;
cyanDots3.init();





let blenderProgram = new ShaderProgram("blender-program");

blenderProgram.vertText = `
attribute vec3 a_position;
attribute vec2 a_texcoord;
varying vec2 v_texcoord;
void main() {
  // Multiply the position by the matrix.
  vec4 positionVec4 = vec4(a_position, 1.0);
  // gl_Position = a_position;
  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
  gl_Position = positionVec4;
  // Pass the texcoord to the fragment shader.
  v_texcoord = a_texcoord;
}
`;
blenderProgram.fragText = `
// beginGLSL
precision mediump float;
// Passed in from the vertex shader.
uniform float resolution;
uniform float time;
varying vec2 v_texcoord;
// The texture.
uniform sampler2D u_texture;
uniform sampler2D u_texture2;
// 
// ----------------------------------- Color blending math --------------------------
// 
/*
** Copyright (c) 2012, Romain Dura romain@shazbits.com
** 
** Permission to use, copy, modify, and/or distribute this software for any 
** purpose with or without fee is hereby granted, provided that the above 
** copyright notice and this permission notice appear in all copies.
** 
** THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES 
** WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF 
** MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY 
** SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES 
** WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN 
** ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR 
** IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/
// 
/*
** Photoshop & misc math
** Blending modes, RGB/HSL/Contrast/Desaturate, levels control
**
** Romain Dura | Romz
** Blog: http://mouaif.wordpress.com
** Post: http://mouaif.wordpress.com/?p=94
*/
// 
// 
// 
/*
** Desaturation
*/
// 
vec4 Desaturate(vec3 color, float Desaturation) {
    vec3 grayXfer = vec3(0.3, 0.59, 0.11);
    vec3 gray = vec3(dot(grayXfer, color));
    return vec4(mix(color, gray, Desaturation), 1.0);
}
// 
// 
/*
** Hue, saturation, luminance
*/
// 
vec3 RGBToHSL(vec3 color) {
    vec3 hsl; // init to 0 to avoid warnings ? (and reverse if + remove first part)
// 
    float fmin = min(min(color.r, color.g), color.b);    //Min. value of RGB
    float fmax = max(max(color.r, color.g), color.b);    //Max. value of RGB
    float delta = fmax - fmin;             //Delta RGB value
// 
    hsl.z = (fmax + fmin) / 2.0; // Luminance
// 
    if (delta == 0.0)       //This is a gray, no chroma...
    {
        hsl.x = 0.0;    // Hue
        hsl.y = 0.0;    // Saturation
    }
    else                                    //Chromatic data...
    {
        if (hsl.z < 0.5)
            hsl.y = delta / (fmax + fmin); // Saturation
        else
            hsl.y = delta / (2.0 - fmax - fmin); // Saturation
        
        float deltaR = (((fmax - color.r) / 6.0) + (delta / 2.0)) / delta;
        float deltaG = (((fmax - color.g) / 6.0) + (delta / 2.0)) / delta;
        float deltaB = (((fmax - color.b) / 6.0) + (delta / 2.0)) / delta;
// 
        if (color.r == fmax )
            hsl.x = deltaB - deltaG; // Hue
        else if (color.g == fmax)
            hsl.x = (1.0 / 3.0) + deltaR - deltaB; // Hue
        else if (color.b == fmax)
            hsl.x = (2.0 / 3.0) + deltaG - deltaR; // Hue
// 
        if (hsl.x < 0.0)
            hsl.x += 1.0; // Hue
        else if (hsl.x > 1.0)
            hsl.x -= 1.0; // Hue
    }
// 
    return hsl;
}
// 
float HueToRGB(float f1, float f2, float hue)
{
    if (hue < 0.0)
        hue += 1.0;
    else if (hue > 1.0)
        hue -= 1.0;
    float res;
    if ((6.0 * hue) < 1.0)
        res = f1 + (f2 - f1) * 6.0 * hue;
    else if ((2.0 * hue) < 1.0)
        res = f2;
    else if ((3.0 * hue) < 2.0)
        res = f1 + (f2 - f1) * ((2.0 / 3.0) - hue) * 6.0;
    else
        res = f1;
    return res;
}
// 
vec3 HSLToRGB(vec3 hsl)
{
    vec3 rgb;
// 
    if (hsl.y == 0.0)
        rgb = vec3(hsl.z); // Luminance
    else
    {
        float f2;
// 
        if (hsl.z < 0.5)
            f2 = hsl.z * (1.0 + hsl.y);
        else
            f2 = (hsl.z + hsl.y) - (hsl.y * hsl.z);
// 
        float f1 = 2.0 * hsl.z - f2;
// 
        rgb.r = HueToRGB(f1, f2, hsl.x + (1.0/3.0));
        rgb.g = HueToRGB(f1, f2, hsl.x);
        rgb.b= HueToRGB(f1, f2, hsl.x - (1.0/3.0));
    }
// 
    return rgb;
}
// 
// 
/*
** Contrast, saturation, brightness
** Code of this function is from TGM's shader pack
** http://irrlicht.sourceforge.net/phpBB2/viewtopic.php?t=21057
*/
// 
// For all settings: 1.0 = 100% 0.5=50% 1.5 = 150%
vec3 ContrastSaturationBrightness(vec3 color, float brt, float sat, float con)
{
    // Increase or decrease theese values to adjust r, g and b color channels seperately
    const float AvgLumR = 0.5;
    const float AvgLumG = 0.5;
    const float AvgLumB = 0.5;    
    const vec3 LumCoeff = vec3(0.2125, 0.7154, 0.0721);
    vec3 AvgLumin = vec3(AvgLumR, AvgLumG, AvgLumB);
    vec3 brtColor = color * brt;
    vec3 intensity = vec3(dot(brtColor, LumCoeff));
    vec3 satColor = mix(intensity, brtColor, sat);
    vec3 conColor = mix(AvgLumin, satColor, con);
    return conColor;
}
// 
// 
/*
** Float blending modes
** Adapted from here: http://www.nathanm.com/photoshop-blending-math/
** But I modified the HardMix (wrong condition), Overlay, SoftLight, ColorDodge, ColorBurn, VividLight, PinLight (inverted layers) ones to have correct results
*/
// 
#define BlendLinearDodgef           BlendAddf
#define BlendLinearBurnf            BlendSubstractf
#define BlendAddf(base, blend)      min(base + blend, 1.0)
#define BlendSubstractf(base, blend)    max(base + blend - 1.0, 0.0)
#define BlendLightenf(base, blend)      max(blend, base)
#define BlendDarkenf(base, blend)       min(blend, base)
#define BlendLinearLightf(base, blend)  (blend < 0.5 ? BlendLinearBurnf(base, (2.0 * blend)) : BlendLinearDodgef(base, (2.0 * (blend - 0.5))))
#define BlendScreenf(base, blend)       (1.0 - ((1.0 - base) * (1.0 - blend)))
#define BlendOverlayf(base, blend)  (base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend)))
#define BlendSoftLightf(base, blend)    ((blend < 0.5) ? (2.0 * base * blend + base * base * (1.0 - 2.0 * blend)) : (sqrt(base) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend)))
#define BlendColorDodgef(base, blend)   ((blend == 1.0) ? blend : min(base / (1.0 - blend), 1.0))
#define BlendColorBurnf(base, blend)    ((blend == 0.0) ? blend : max((1.0 - ((1.0 - base) / blend)), 0.0))
#define BlendVividLightf(base, blend)   ((blend < 0.5) ? BlendColorBurnf(base, (2.0 * blend)) : BlendColorDodgef(base, (2.0 * (blend - 0.5))))
#define BlendPinLightf(base, blend)     ((blend < 0.5) ? BlendDarkenf(base, (2.0 * blend)) : BlendLightenf(base, (2.0 *(blend - 0.5))))
#define BlendHardMixf(base, blend)  ((BlendVividLightf(base, blend) < 0.5) ? 0.0 : 1.0)
#define BlendReflectf(base, blend)      ((blend == 1.0) ? blend : min(base * base / (1.0 - blend), 1.0))
// 
// 
/*
** Vector3 blending modes
*/
// 
// Component wise blending
#define Blend(base, blend, funcf)       vec3(funcf(base.r, blend.r), funcf(base.g, blend.g), funcf(base.b, blend.b))
// 
#define BlendNormal(base, blend)        (blend)
#define BlendLighten                BlendLightenf
#define BlendDarken             BlendDarkenf
#define BlendMultiply(base, blend)      (base * blend)
#define BlendAverage(base, blend)       ((base + blend) / 2.0)
#define BlendAdd(base, blend)       min(base + blend, vec3(1.0))
#define BlendSubstract(base, blend)     max(base + blend - vec3(1.0), vec3(0.0))
#define BlendDifference(base, blend)    abs(base - blend)
#define BlendNegation(base, blend)  (vec3(1.0) - abs(vec3(1.0) - base - blend))
#define BlendExclusion(base, blend)     (base + blend - 2.0 * base * blend)
#define BlendScreen(base, blend)        Blend(base, blend, BlendScreenf)
#define BlendOverlay(base, blend)       Blend(base, blend, BlendOverlayf)
#define BlendSoftLight(base, blend)     Blend(base, blend, BlendSoftLightf)
#define BlendHardLight(base, blend)     BlendOverlay(blend, base)
#define BlendColorDodge(base, blend)    Blend(base, blend, BlendColorDodgef)
#define BlendColorBurn(base, blend)     Blend(base, blend, BlendColorBurnf)
#define BlendLinearDodge            BlendAdd
#define BlendLinearBurn         BlendSubstract
// Linear Light is another contrast-increasing mode
// If the blend color is darker than midgray, Linear Light darkens the image by decreasing the brightness. If the blend color is lighter than midgray, the result is a brighter image due to increased brightness.
#define BlendLinearLight(base, blend)   Blend(base, blend, BlendLinearLightf)
#define BlendVividLight(base, blend)    Blend(base, blend, BlendVividLightf)
#define BlendPinLight(base, blend)      Blend(base, blend, BlendPinLightf)
#define BlendHardMix(base, blend)       Blend(base, blend, BlendHardMixf)
#define BlendReflect(base, blend)       Blend(base, blend, BlendReflectf)
#define BlendGlow(base, blend)      BlendReflect(blend, base)
#define BlendPhoenix(base, blend)       (min(base, blend) - max(base, blend) + vec3(1.0))
#define BlendOpacity(base, blend, F, O)     (F(base, blend) * O + blend * (1.0 - O))
// 
// 
// Hue Blend mode creates the result color by combining the luminance and saturation of the base color with the hue of the blend color.
vec3 BlendHue(vec3 base, vec3 blend)
{
    vec3 baseHSL = RGBToHSL(base);
    return HSLToRGB(vec3(RGBToHSL(blend).r, baseHSL.g, baseHSL.b));
}
// 
// Saturation Blend mode creates the result color by combining the luminance and hue of the base color with the saturation of the blend color.
vec3 BlendSaturation(vec3 base, vec3 blend)
{
    vec3 baseHSL = RGBToHSL(base);
    return HSLToRGB(vec3(baseHSL.r, RGBToHSL(blend).g, baseHSL.b));
}
// 
// Color Mode keeps the brightness of the base color and applies both the hue and saturation of the blend color.
vec3 BlendColor(vec3 base, vec3 blend)
{
    vec3 blendHSL = RGBToHSL(blend);
    return HSLToRGB(vec3(blendHSL.r, blendHSL.g, RGBToHSL(base).b));
}
// 
// Luminosity Blend mode creates the result color by combining the hue and saturation of the base color with the luminance of the blend color.
vec3 BlendLuminosity(vec3 base, vec3 blend)
{
    vec3 baseHSL = RGBToHSL(base);
    return HSLToRGB(vec3(baseHSL.r, baseHSL.g, RGBToHSL(blend).b));
}
// 
// 
/*
** Gamma correction
** Details: http://blog.mouaif.org/2009/01/22/photoshop-gamma-correction-shader/
*/
// 
#define GammaCorrection(color, gamma)                               pow(color, 1.0 / gamma)
// 
/*
** Levels control (input (+gamma), output)
** Details: https://mouaif.wordpress.com/2009/01/28/levels-control-shader/
*/
// 
#define LevelsControlInputRange(color, minInput, maxInput)              min(max(color - vec3(minInput), vec3(0.0)) / (vec3(maxInput) - vec3(minInput)), vec3(1.0))
#define LevelsControlInput(color, minInput, gamma, maxInput)                GammaCorrection(LevelsControlInputRange(color, minInput, maxInput), gamma)
#define LevelsControlOutputRange(color, minOutput, maxOutput)           mix(vec3(minOutput), vec3(maxOutput), color)
#define LevelsControl(color, minInput, gamma, maxInput, minOutput, maxOutput)   LevelsControlOutputRange(LevelsControlInput(color, minInput, gamma, maxInput), minOutput, maxOutput)
// 
// 
// ----------------------------------- End of Color blending math --------------------------
// 
float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(time)));
}
// 
void main() {
//     
//     Beautiful, subtle blue and purple
//     vec2 uv = vec2(gl_FragCoord.xy) / vec2(1600, 1600);
//     vec4 texture = texture2D(u_texture, v_texcoord);
//     vec4 texture2 = texture2D(u_texture2, v_texcoord);
//     vec3 levels = LevelsControlInputRange(texture2.rgb, 0.2, 0.95);
//     vec3 blender = BlendSoftLight(texture.rgb, levels);
//     float blendMix = 0.95;
//     vec3 blend = (texture.rgb * (1.0 - blendMix)) + (blender * blendMix);
//     vec3 col = blend + vec3(0.24, -0.12, -0.12);
//     col = LevelsControlInputRange(col, 0.0, 0.95);
//     gl_FragColor = vec4(col, 1.0);
//     gl_FragColor = vec4((col * 0.5) + texture.rgb * 0.5, 1.01);
//     
// A wilder, pinker version
    vec2 uv = vec2(gl_FragCoord.xy) / vec2(1600, 1600);
    if (resolution == 1.0) {
        uv *= 0.5;
    }
    vec4 texture = texture2D(u_texture, v_texcoord);
    vec4 texture2 = texture2D(u_texture2, v_texcoord);
    vec3 levels = LevelsControlInputRange(texture2.rgb, 0.2, 0.95);
    vec3 blender = BlendLinearDodge(texture.rgb, levels);
    float blendMix = 0.25;
    vec3 blend = (texture.rgb * (1.0 - blendMix)) + (blender * blendMix);
    vec3 col = blend + vec3(0.4, -0.12, -0.12);
    col = LevelsControlInputRange(col, 0.15, 0.9);
    col = (texture.rgb * uv.y * 2.0) + col * (1.0 - uv.y * 2.0);
//     col = (col * 0.9) + (texture2.rgb * 0.1);
//     gl_FragColor = vec4(col, 1.0);
    gl_FragColor = vec4(col, 1.01);
    gl_FragColor.rgb = LevelsControlInput(gl_FragColor.rgb, 0.0125, vec3(1.), 0.925);
}
// endGLSL
`;
blenderProgram.init();
// redraw();


let oneTextureProgram = new ShaderProgram("one-texture-program");

oneTextureProgram.vertText = `
attribute vec3 a_position;
attribute vec2 a_texcoord;
varying vec2 v_texcoord;

void main() {
  // Multiply the position by the matrix.
  vec4 positionVec4 = vec4(a_position, 1.0);
  // gl_Position = a_position;
  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
  gl_Position = positionVec4;

  // Pass the texcoord to the fragment shader.
  v_texcoord = a_texcoord;
}
`;

oneTextureProgram.fragText = `
precision mediump float;

// Passed in from the vertex shader.
uniform float time;
uniform float alpha;
varying vec2 v_texcoord;

// The texture.
uniform sampler2D u_texture;

float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(time)));
}

void main() {
    vec2 uv = vec2(gl_FragCoord.xy) / vec2(1600, 1600);
   float rando = rand(vec2(uv.x, uv.y));
   gl_FragColor = texture2D(u_texture, v_texcoord);
   gl_FragColor.a *= alpha;
   // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
   // gl_FragColor.r = gl_FragColor.r * 2.5;
   // gl_FragColor.a = 0.5;
}
`;
oneTextureProgram.init();


let mistyProgram = new ShaderProgram("misty-program");

mistyProgram.vertText = `
attribute vec3 a_position;
attribute vec2 a_texcoord;
varying vec2 v_texcoord;

void main() {
  // Multiply the position by the matrix.
  vec4 positionVec4 = vec4(a_position, 1.0);
  // gl_Position = a_position;
  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
  gl_Position = positionVec4;

  // Pass the texcoord to the fragment shader.
  v_texcoord = a_texcoord;
}
`;

mistyProgram.fragText = `
// beginGLSL
precision mediump float;
// Passed in from the vertex shader.
uniform float time;
uniform float alpha;
varying vec2 v_texcoord;
// The texture.
uniform sampler2D u_texture;
float plot(vec2 s, float p) {
  float largeur = abs(sin(time * 0.01)) * 0.1 + 0.1;
  return smoothstep(p - largeur, p, s.y) - smoothstep(p, p + largeur, s.y);
}
float circ(float size, float vx, float vy, vec2 center) {
//   float x = center.x * (1.0 + sin(time * 20.) * 0.5);
//   float y = center.y * (1.0 + cos(time * 20.) * 0.5);
  vec2 v = center - vec2(vx, vy);
  float d = 1.0 / length(v * size);
  return d;
}
float Circle(vec2 uv, vec2 p, float r, float blur) {
    float d = length(uv - p); 
    float c = smoothstep(r, r - blur, d); 
    return c;
}
vec3 CircleRGB(vec2 uv, vec2 p, float r, float blur, vec3 col) {
    float d = length(uv - p); 
    float c = smoothstep(r, r - blur, d); 
    return col * c;
}
vec3 InvCircleRGB(vec2 uv, vec2 p, float r, float blur, vec3 col) {
    float d = length(p - uv); 
    float c = smoothstep(r - blur, r, d); 
    return col * c;
}
float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(time)));
}
void main() {
    vec2 uv = vec2(gl_FragCoord.xy) / vec2(1600, 1600);
    float t = time;
    vec2 p2 = vec2(4.0, 0.2) * 0.1;
    vec3 col = InvCircleRGB(uv, p2, 0.5, 0.2, vec3(1.0, 1.0, 0.7));
    vec3 colb = InvCircleRGB(uv, p2, 0.5, 0.2, vec3(1.0, 0.0, 0.0));
    vec3 col2 = CircleRGB(uv, p2, 0.5, 0.4, vec3(1.0, 0.0, 0.0));
    float rando = rand(vec2(uv.x, uv.y));
    gl_FragColor = texture2D(u_texture, v_texcoord);
    gl_FragColor.rgb -= col * 0.75;
    gl_FragColor.rgb += col2 * 0.75;
    gl_FragColor.rgb += colb * 0.85;
    gl_FragColor.a *= alpha;
    // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    // gl_FragColor.r = gl_FragColor.r * 2.5;
    // gl_FragColor.a = 0.5;
}
// endGLSL
`;
mistyProgram.init();
// redraw();



let foggyProgram = new ShaderProgram("foggy-program");

foggyProgram.vertText = `
// beginGLSL
attribute vec3 a_position;
attribute vec2 a_texcoord;
varying vec2 v_texcoord;
void main() {
  // Multiply the position by the matrix.
  vec4 positionVec4 = vec4(a_position, 1.0);
  // gl_Position = a_position;
  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
  gl_Position = positionVec4;
  // Pass the texcoord to the fragment shader.
  v_texcoord = a_texcoord;
}
// endGLSL
`;

foggyProgram.fragText = `
// beginGLSL
precision mediump float;
// Passed in from the vertex shader.
uniform float time;
uniform float alpha;
varying vec2 v_texcoord;
// The texture.
uniform sampler2D u_texture;
const float TURBULENCE = 0.00009;
//noise function from iq: https://www.shadertoy.com/view/Msf3WH
vec2 hash(vec2 p) {
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
}
float noise(vec2 p) {
    const float K1 = 0.366025404;
    const float K2 = 0.211324865;
    vec2 i = floor(p + (p.x + p.y) * K1);
    vec2 a = p - i + (i.x + i.y) * K2;
    float m = step(a.y, a.x);
    vec2 o = vec2(m, 1.0 - m);
    vec2 b = a - o + K2;
    vec2 c = a - 1.0 + 2.0 * K2;
    vec3 h = max(0.5 - vec3(dot(a, a), dot(b, b), dot(c, c)), 0.0);
    vec3 n = h * h * h * h * vec3(dot(a, hash(i + 0.0)), dot(b, hash(i + o)), dot(c, hash(i + 1.0)));
    return dot(n, vec3(70.0));
}
const mat2 m2 = mat2(1.6,  1.2, -1.2,  1.6);
float fbm(vec2 p) {
    float amp = 0.5;
    float h = 0.0;
    for (int i = 0; i < 8; i++) {
        float n = noise(p);
        h += amp * n;
        amp *= 0.5;
        p = m2 * p;
    }
    return  0.5 + 0.5 * h;
}
vec3 smokeEffect(vec2 uv) {
    float t = (time + 2e2) * 1e-3;
    vec3 col = vec3(0.0, 0.0, 0.0);
    // time scale
    float v = 0.0002;
    vec3 smoke = vec3(1.0);
    //uv += mo * 10.0;
    vec2 scale = uv * 0.5;
    vec2 turbulence = TURBULENCE * vec2(noise(vec2(uv.x * 3.5, uv.y * 3.2) * 1.), noise(vec2(uv.x * 2.2, uv.y * 1.5)));
    scale += turbulence;
    float n1 = fbm(vec2(scale.x - abs(sin(t * v * 1000.0)), scale.y - 50.0 * abs(sin(t * v * 410.0))));
    col = mix(col, smoke, smoothstep(0.35, 0.9, n1));
    //float y = fragCoord.y/iResolution.y;
    //float fade = exp(-(y*y));
    //col *= fade;
//     col.r * 0.5;
    col = clamp(col, vec3(0.0), vec3(1.0)) * 2.;
    return col;
}
float circle(vec2 p, float r) {
    float c = length(p) - r;
    return smoothstep(r + 0.02, r, c);
}
float sinwave(vec2 p, float scale, float amp) {
    float wave = cos(p.x * scale + 1.5 + time * 20.) + 0.25 * cos(p.x * scale * scale + time * 20.);
    float s = smoothstep(amp + 0.01, amp, amp * wave * 0.5 - p.y * 0.5);
    return s;
}
float plot(vec2 s, float p) {
    float largeur = abs(sin(time * 0.01)) * 0.1 + 0.1;
    return smoothstep(p - largeur, p, s.y) - smoothstep(p, p + largeur, s.y);
}
float circ(float speed, float size, float vx, float vy, float dist) {
  // float x = cos(time * speed) * dist * 0.012 - 0.425;
  // float y = sin(time * speed) * dist * 0.012 - 0.25;
  float t = time;
  float x = cos(t * speed * 1000.0) * dist * (sin(t)) * 0.12 - 0.425;
  float y = sin(t * speed * 1000.0) * dist * (sin(t)) * 0.12 - 0.25;
  // float x = cos(time * speed) * dist * abs(sin(time * 0.01) * 1.0) - 0.425;
  // float y = sin(time * speed) * dist * abs(sin(time * 0.01) * 1.0) - 0.25;
  vec2 v = vec2(vx + x, vy + y);
  float d = 1.0 / length(v * size);
     d = sin(d * cos(t * 5.) * 1.);
  return d;
}
float Circle(vec2 uv, vec2 p, float r, float blur) {
    float d = length(uv - p); 
    float c = smoothstep(r, r - blur, d); 
    return c;
}
vec3 CircleRGB(vec2 uv, vec2 p, float r, float blur, vec3 col) {
    float d = length(uv - p); 
    float c = smoothstep(r, r - blur, d); 
    return col * c;
}
vec3 InvCircleRGB(vec2 uv, vec2 p, float r, float blur, vec3 col) {
    float d = length(p - uv); 
    float c = smoothstep(r - blur, r, d); 
    return col * c;
}
float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(time)));
}
void main() {
    vec2 uv = vec2(gl_FragCoord.xy) / vec2(1600, 1600);
    float t = time * 1e2;
    vec2 p2 = gl_FragCoord.xy / 1000.0;
//     vec3 col = InvCircleRGB(uv, p2, 0.5, 0.2, vec3(1.0, 1.0, 0.7));
    vec3 col = vec3(0.0);
//     vec3 colb = InvCircleRGB(uv, p2, 0.5, 0.2, vec3(1.0, 0.0, 0.0));
//     vec3 col2 = CircleRGB(uv, p2, 0.5, 0.4, vec3(1.0, 0.0, 0.0));
//     float rando = rand(vec2(uv.x, uv.y));
    vec3 cloudCol = vec3(0.9, 0.0, 0.0);
    vec3 smoke2 = smokeEffect(p2 + vec2(-1.0, -2.0));
//     float cloud2 = 0.85;
    float rando = rand(vec2(uv.x, uv.y) * 100.) * 0.05;
    vec4 tex = texture2D(u_texture, v_texcoord);
    col = mix(tex.rgb, smoke2, cloudCol * (smoke2 - rando) * 8.0 - smoke2 * 0.5);
    gl_FragColor = vec4(col, alpha);
//     gl_FragColor.rgb -= col * 0.75;
//     gl_FragColor.rgb += col2 * 0.75;
//     gl_FragColor.rgb += colb * 0.85;
//     gl_FragColor.a *= alpha;
    // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    // gl_FragColor.r = gl_FragColor.r * 2.5;
    // gl_FragColor.a = 0.5;
}
// endGLSL
`;
foggyProgram.init();
// redraw();

let mistyProgram2 = new ShaderProgram("misty-program-2");

mistyProgram2.vertText = `
// beginGLSL
attribute vec3 a_position;
attribute vec2 a_texcoord;
varying vec2 v_texcoord;
void main() {
    // Multiply the position by the matrix.
    vec4 positionVec4 = vec4(a_position, 1.0);
    // gl_Position = a_position;
    positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
    gl_Position = positionVec4;
    // Pass the texcoord to the fragment shader.
    v_texcoord = a_texcoord;
}
//  endGLSL
`;

mistyProgram2.fragText = `
// beginGLSL
precision mediump float;
// Passed in from the vertex shader.
uniform float resolution;
uniform float time;
uniform float alpha;
varying vec2 v_texcoord;
// The texture.
uniform sampler2D u_texture;
float plot(vec2 s, float p) {
  float largeur = abs(sin(time * 0.01)) * 0.1 + 0.1;
  return smoothstep(p - largeur, p, s.y) - smoothstep(p, p + largeur, s.y);
}
float circ(float size, float vx, float vy, vec2 center) {
//   float x = center.x * (1.0 + sin(time * 20.) * 0.5);
//   float y = center.y * (1.0 + cos(time * 20.) * 0.5);
  vec2 v = center - vec2(vx, vy);
  float d = 1.0 / length(v * size);
  return d;
}
float Circle(vec2 uv, vec2 p, float r, float blur) {
    float d = length(uv - p); 
    float c = smoothstep(r, r - blur, d); 
    return c;
}
vec3 CircleRGB(vec2 uv, vec2 p, float r, float blur, vec3 col) {
    float d = length(uv - p); 
    float c = smoothstep(r, r - blur, d); 
    return col * c;
}
vec3 InvCircleRGB(vec2 uv, vec2 p, float r, float blur, vec3 col) {
    float d = length(p - uv); 
    float c = smoothstep(r - blur, r, d); 
    return col * c;
}
float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(time)));
}
void main() {
    vec2 uv = vec2(gl_FragCoord.xy) / vec2(1600, 1600);
    if (resolution == 1.0) {
        uv *= 0.5;
    }
    float t = time * 0.0025;
//     vec2 p2 = vec2(4.0, 0.2) * 0.1;
//     vec3 col = InvCircleRGB(uv, p2, 0.5, 0.2, vec3(1.0, 1.0, 0.7));
//     vec3 colb = InvCircleRGB(uv, p2, 0.5, 0.2, vec3(1.0, 0.0, 0.0));
//     vec3 col2 = CircleRGB(uv, p2, 0.5, 0.4, vec3(1.0, 0.0, 0.0));
//     float rando = rand(vec2(uv.x, uv.y));
//     float r = 0.3;
    vec2 p = vec2(1.0, -1.4);
    float c = Circle(uv, p, 0.3, 0.1);
    vec2 p2 = vec2(0.1 * sin(t * 100.), 0.1 * cos(t * 100.)) * 0.4;
    vec2 p3 = vec2(0.1 * sin(t * 50.), 0.1 * cos(t * 50.)) * 0.4;
    float siz = sin(t * 100.);
    float siz2 = sin(t * 50.);
    p2 = vec2(0.0, 0.0);
    vec3 col = CircleRGB(uv, p2, 1.9, 0.2, vec3(4., 0.4, 0.0));
    col.r *= sin(length(uv - p) * (6. + sin(1. * 20.) * 0.0001));
    col.g *= sin(length(uv - p) * (6. + sin(1. * 20.) * 0.01));
    vec2 newV = (uv + tan(uv.y * 3.)) - (p + sin(uv.x * 3.));
    newV += cos(sin(uv * 20.));
    col *= sin(atan(newV.x, newV.y));
    col *= sin(sin(atan(newV.x, newV.y) * (sin(t * 100.) * 1.)) * 10. + sin(t * 10.) * 100.);
    float rando = rand(uv * 101.001) * 0.25 * 0.25 * 0.75;
// //     col.r -= rando * 1.;
//      col.g *= 0.5;
//     gl_FragColor = vec4((col- rando) * 1.0, 1.0);
    gl_FragColor = texture2D(u_texture, v_texcoord);
//     gl_FragColor.rgb -= max(col, -0.6) * 0.95;
    gl_FragColor.r = min(max(gl_FragColor.r, col.r - rando), 1.0) - rando * col.r;
    gl_FragColor.g = min(max(gl_FragColor.g, col.r * 0.2 - rando), 1.0);
//     gl_FragColor.rgb += col2 * 0.75;
//     gl_FragColor.rgb += colb * 0.85;
    gl_FragColor.a *= alpha;
    // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    // gl_FragColor.r = gl_FragColor.r * 2.5;
    // gl_FragColor.a = 0.5;
}
// endGLSL
`;
mistyProgram2.init();

// ------------------------------------------------------------------------------//
// Deep sea blue (hue-shifted from mustard-like)
// mustard-like and blending itself with blendyCavern.display()
// using the mix() function.
// ------------------------------------------------------------------------------//

let deepSeaProgram = new ShaderProgram("deep-sea-program");

deepSeaProgram.vertText = `
// beginGLSL
attribute vec3 a_position;
attribute vec2 a_texcoord;
varying vec2 v_texcoord;
void main() {
    // Multiply the position by the matrix.
    vec4 positionVec4 = vec4(a_position, 1.0);
    // gl_Position = a_position;
    positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
    gl_Position = positionVec4;
    // Pass the texcoord to the fragment shader.
    v_texcoord = a_texcoord;
}
//  endGLSL
`;
deepSeaProgram.fragText = `
// beginGLSL
precision mediump float;
// Passed in from the vertex shader.
uniform float resolution;
uniform float time;
uniform float alpha;
varying vec2 v_texcoord;
// The texture.
uniform sampler2D u_texture;
#define GammaCorrection(color, gamma)                               pow(color, 1.0 / gamma)
// 
/*
** Levels control (input (+gamma), output)
** Details: https://mouaif.wordpress.com/2009/01/28/levels-control-shader/
*/
// 
#define LevelsControlInputRange(color, minInput, maxInput)              min(max(color - vec3(minInput), vec3(0.0)) / (vec3(maxInput) - vec3(minInput)), vec3(1.0))
#define LevelsControlInput(color, minInput, gamma, maxInput)                GammaCorrection(LevelsControlInputRange(color, minInput, maxInput), gamma)
#define LevelsControlOutputRange(color, minOutput, maxOutput)           mix(vec3(minOutput), vec3(maxOutput), color)
#define LevelsControl(color, minInput, gamma, maxInput, minOutput, maxOutput)   LevelsControlOutputRange(LevelsControlInput(color, minInput, gamma, maxInput), minOutput, maxOutput)
// The hue shifting functions are taken from there:
// https://gist.github.com/mairod/a75e7b44f68110e1576d77419d608786
// https://stackoverflow.com/questions/9234724/how-to-change-hue-of-a-texture-with-glsl
vec3 hueShift(vec3 color, float hue) {
const vec3 k = vec3(0.57735, 0.57735, 0.57735);
float cosAngle = cos(hue);
return vec3(color * cosAngle + cross(k, color) * sin(hue) + k * dot(k, color) * (1.0 - cosAngle));
}
vec3 hueShift2( vec3 color, float hueAdjust ){
    const vec3  kRGBToYPrime = vec3 (0.299, 0.587, 0.114);
    const vec3  kRGBToI      = vec3 (0.596, -0.275, -0.321);
    const vec3  kRGBToQ      = vec3 (0.212, -0.523, 0.311);
    const vec3  kYIQToR     = vec3 (1.0, 0.956, 0.621);
    const vec3  kYIQToG     = vec3 (1.0, -0.272, -0.647);
    const vec3  kYIQToB     = vec3 (1.0, -1.107, 1.704);
    // Convert to YIQ
    float   YPrime  = dot (color, kRGBToYPrime);
    float   I       = dot (color, kRGBToI);
    float   Q       = dot (color, kRGBToQ);
    // Calculate the hue and chroma
    float   hue     = atan (Q, I);
    float   chroma  = sqrt (I * I + Q * Q);
    // Make the user's adjustments
    hue += hueAdjust;
    // Convert back to YIQ
    Q = chroma * sin (hue);
    I = chroma * cos (hue);
    // Convert back to RGB
    vec3    yIQ   = vec3 (YPrime, I, Q);
    return vec3( dot (yIQ, kYIQToR), dot (yIQ, kYIQToG), dot (yIQ, kYIQToB) );
}
vec3 rgb2hsv(vec3 c)
{
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}
vec3 hsv2rgb(vec3 c)
{
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float plot(vec2 s, float p) {
  float largeur = abs(sin(time * 0.01)) * 0.1 + 0.1;
  return smoothstep(p - largeur, p, s.y) - smoothstep(p, p + largeur, s.y);
}
float circ(float size, float vx, float vy, vec2 center) {
//   float x = center.x * (1.0 + sin(time * 20.) * 0.5);
//   float y = center.y * (1.0 + cos(time * 20.) * 0.5);
  vec2 v = center - vec2(vx, vy);
  float d = 1.0 / length(v * size);
  return d;
}
float Circle(vec2 uv, vec2 p, float r, float blur) {
    float d = length(uv - p); 
    float c = smoothstep(r, r - blur, d); 
    return c;
}
vec3 CircleRGB(vec2 uv, vec2 p, float r, float blur, vec3 col) {
    float d = length(uv - p); 
    float c = smoothstep(r, r - blur, d); 
    return col * c;
}
vec3 InvCircleRGB(vec2 uv, vec2 p, float r, float blur, vec3 col) {
    float d = length(p - uv); 
    float c = smoothstep(r - blur, r, d); 
    return col * c;
}
float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(time)));
}
void main() {
    const float PI = 3.1415926535897932384626433832795;
    vec2 uv = vec2(gl_FragCoord.xy) / vec2(1600, 1600);
    if (resolution == 1.0) {
        uv *= 0.5;
    }
    float t = time * 0.0025;
    vec2 p = vec2(10.0, 1.004);
    vec2 p2 = vec2(0.0, 0.0);
    vec3 col = CircleRGB(uv, p2, 1.9, 0.2, vec3(0.75, 0.4, 2.0));
    col.r *= sin(length(uv - p2) * (6. + sin(1. * 20.) * 0.01));
    // col.r -= abs(sin(uv.x * uv.x * tan((uv.x - uv.y) * 0.2) * sin(uv.y) * 1e2));
//     col.g *= sin(length(uv - p) * (6. + sin(1. * 20.) * 0.01));
    vec2 newV = (uv + vec2(11.0, 0.1) + tan(uv.y * 1.)) - (p * 1.1 + sin(uv.x * 13.));
//     newV += cos(sin(uv * 15.));
    newV += cos(sin((uv * vec2(40.0, 4.0)) * 150.0 * 2.0));
    // col *= sin(atan(newV.x * uv.y * 100.1, newV.y));
    // col *= sin(sin(atan(newV.x, newV.y) * (sin(t * 100.) * 1.2)) * 1. + sin(t * 10.) * 10.);
    float rando = rand(uv * 101.001) * 0.25 * 0.25 * 0.75;
// //     col.r -= rando * 1.;
//      col.g *= 0.5;
//     gl_FragColor = vec4((col- rando) * 1.0, 1.0);
    gl_FragColor = texture2D(u_texture, v_texcoord);
    vec3 wilder = gl_FragColor.rgb;
    wilder -= max(col, -0.9) * 0.5;
//     gl_FragColor.r = min(max(gl_FragColor.r, col.r - rando), 1.0) - rando * col.r;
    wilder.b = min(max(wilder.g, col.r * 0.2 - rando), 1.0);
//     gl_FragColor.rgb += col2 * 0.75;
//     gl_FragColor.rgb += colb * 0.85;
//     gl_FragColor.r *= 1.5;
    wilder.g *= 1.2;
    wilder.b *= 4.0;
    gl_FragColor.a *= alpha;
    // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    wilder.r *= 1.5;
    wilder.b *= 1.2 - wilder.g * 0.75;
    // gl_FragColor.a = 0.5;
    wilder.rgb = wilder.bgr * 0.76;
    gl_FragColor.rgb = mix(gl_FragColor.rgb, wilder, 0.58);
//     gl_FragColor.rgb = GammaCorrection(LevelsControlInputRange(gl_FragColor.rgb, 0.1, 0.9), 1.0);
//     gl_FragColor.rgb = pow(gl_FragColor.rgb, 1.0 / vec3(1.2));
    gl_FragColor.rgb = hueShift2(gl_FragColor.rgb, PI * 0.5);
       gl_FragColor.rgb = LevelsControlInput(gl_FragColor.rgb, 0.0, vec3(1.0), 0.95);
//     gl_FragColor.rgb = LevelsControlInput(gl_FragColor.rgb, 0.075, vec3(1.1), 0.95);
//     vec3 rrr = gl_FragColor.rgb;
    // gl_FragColor.r *= 1.05;
    // gl_FragColor.b *= 1.1;
//     vec3 hsv = rgb2hsv(rrr);
//     hsv.r += 0.5;
//     gl_FragColor.rgb = hsv2rgb(hsv);
}
// endGLSL
`;
deepSeaProgram.init();

let sunriseLevelsProgram = new ShaderProgram("sunrise-levels-program");

sunriseLevelsProgram.vertText = `
attribute vec3 a_position;
attribute vec2 a_texcoord;
varying vec2 v_texcoord;

void main() {
  // Multiply the position by the matrix.
  vec4 positionVec4 = vec4(a_position, 1.0);
  // gl_Position = a_position;
  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
  gl_Position = positionVec4;

  // Pass the texcoord to the fragment shader.
  v_texcoord = a_texcoord;
}
`;

sunriseLevelsProgram.fragText = `
// beginGLSL
precision mediump float;
// 
// Passed in from the vertex shader.
uniform float time;
uniform float alpha;
varying vec2 v_texcoord;
// 
// The texture.
uniform sampler2D u_texture;
// ----------------------------------- Color blending math --------------------------
// 
/*
** Copyright (c) 2012, Romain Dura romain@shazbits.com
** 
** Permission to use, copy, modify, and/or distribute this software for any 
** purpose with or without fee is hereby granted, provided that the above 
** copyright notice and this permission notice appear in all copies.
** 
** THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES 
** WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF 
** MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY 
** SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES 
** WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN 
** ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR 
** IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/
// 
/*
** Photoshop & misc math
** Blending modes, RGB/HSL/Contrast/Desaturate, levels control
**
** Romain Dura | Romz
** Blog: http://mouaif.wordpress.com
** Post: http://mouaif.wordpress.com/?p=94
*/
// 
// 
// 
/*
** Desaturation
*/
// 
vec4 Desaturate(vec3 color, float Desaturation) {
    vec3 grayXfer = vec3(0.3, 0.59, 0.11);
    vec3 gray = vec3(dot(grayXfer, color));
    return vec4(mix(color, gray, Desaturation), 1.0);
}
// 
// 
/*
** Hue, saturation, luminance
*/
// 
vec3 RGBToHSL(vec3 color) {
    vec3 hsl; // init to 0 to avoid warnings ? (and reverse if + remove first part)
// 
    float fmin = min(min(color.r, color.g), color.b);    //Min. value of RGB
    float fmax = max(max(color.r, color.g), color.b);    //Max. value of RGB
    float delta = fmax - fmin;             //Delta RGB value
// 
    hsl.z = (fmax + fmin) / 2.0; // Luminance
// 
    if (delta == 0.0)       //This is a gray, no chroma...
    {
        hsl.x = 0.0;    // Hue
        hsl.y = 0.0;    // Saturation
    }
    else                                    //Chromatic data...
    {
        if (hsl.z < 0.5)
            hsl.y = delta / (fmax + fmin); // Saturation
        else
            hsl.y = delta / (2.0 - fmax - fmin); // Saturation
        
        float deltaR = (((fmax - color.r) / 6.0) + (delta / 2.0)) / delta;
        float deltaG = (((fmax - color.g) / 6.0) + (delta / 2.0)) / delta;
        float deltaB = (((fmax - color.b) / 6.0) + (delta / 2.0)) / delta;
// 
        if (color.r == fmax )
            hsl.x = deltaB - deltaG; // Hue
        else if (color.g == fmax)
            hsl.x = (1.0 / 3.0) + deltaR - deltaB; // Hue
        else if (color.b == fmax)
            hsl.x = (2.0 / 3.0) + deltaG - deltaR; // Hue
// 
        if (hsl.x < 0.0)
            hsl.x += 1.0; // Hue
        else if (hsl.x > 1.0)
            hsl.x -= 1.0; // Hue
    }
// 
    return hsl;
}
// 
float HueToRGB(float f1, float f2, float hue)
{
    if (hue < 0.0)
        hue += 1.0;
    else if (hue > 1.0)
        hue -= 1.0;
    float res;
    if ((6.0 * hue) < 1.0)
        res = f1 + (f2 - f1) * 6.0 * hue;
    else if ((2.0 * hue) < 1.0)
        res = f2;
    else if ((3.0 * hue) < 2.0)
        res = f1 + (f2 - f1) * ((2.0 / 3.0) - hue) * 6.0;
    else
        res = f1;
    return res;
}
// 
vec3 HSLToRGB(vec3 hsl)
{
    vec3 rgb;
// 
    if (hsl.y == 0.0)
        rgb = vec3(hsl.z); // Luminance
    else
    {
        float f2;
// 
        if (hsl.z < 0.5)
            f2 = hsl.z * (1.0 + hsl.y);
        else
            f2 = (hsl.z + hsl.y) - (hsl.y * hsl.z);
// 
        float f1 = 2.0 * hsl.z - f2;
// 
        rgb.r = HueToRGB(f1, f2, hsl.x + (1.0/3.0));
        rgb.g = HueToRGB(f1, f2, hsl.x);
        rgb.b= HueToRGB(f1, f2, hsl.x - (1.0/3.0));
    }
// 
    return rgb;
}
// 
// 
/*
** Contrast, saturation, brightness
** Code of this function is from TGM's shader pack
** http://irrlicht.sourceforge.net/phpBB2/viewtopic.php?t=21057
*/
// 
// For all settings: 1.0 = 100% 0.5=50% 1.5 = 150%
vec3 ContrastSaturationBrightness(vec3 color, float brt, float sat, float con)
{
    // Increase or decrease theese values to adjust r, g and b color channels seperately
    const float AvgLumR = 0.5;
    const float AvgLumG = 0.5;
    const float AvgLumB = 0.5;    
    const vec3 LumCoeff = vec3(0.2125, 0.7154, 0.0721);
    vec3 AvgLumin = vec3(AvgLumR, AvgLumG, AvgLumB);
    vec3 brtColor = color * brt;
    vec3 intensity = vec3(dot(brtColor, LumCoeff));
    vec3 satColor = mix(intensity, brtColor, sat);
    vec3 conColor = mix(AvgLumin, satColor, con);
    return conColor;
}
// 
// 
/*
** Float blending modes
** Adapted from here: http://www.nathanm.com/photoshop-blending-math/
** But I modified the HardMix (wrong condition), Overlay, SoftLight, ColorDodge, ColorBurn, VividLight, PinLight (inverted layers) ones to have correct results
*/
// 
#define BlendLinearDodgef           BlendAddf
#define BlendLinearBurnf            BlendSubstractf
#define BlendAddf(base, blend)      min(base + blend, 1.0)
#define BlendSubstractf(base, blend)    max(base + blend - 1.0, 0.0)
#define BlendLightenf(base, blend)      max(blend, base)
#define BlendDarkenf(base, blend)       min(blend, base)
#define BlendLinearLightf(base, blend)  (blend < 0.5 ? BlendLinearBurnf(base, (2.0 * blend)) : BlendLinearDodgef(base, (2.0 * (blend - 0.5))))
#define BlendScreenf(base, blend)       (1.0 - ((1.0 - base) * (1.0 - blend)))
#define BlendOverlayf(base, blend)  (base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend)))
#define BlendSoftLightf(base, blend)    ((blend < 0.5) ? (2.0 * base * blend + base * base * (1.0 - 2.0 * blend)) : (sqrt(base) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend)))
#define BlendColorDodgef(base, blend)   ((blend == 1.0) ? blend : min(base / (1.0 - blend), 1.0))
#define BlendColorBurnf(base, blend)    ((blend == 0.0) ? blend : max((1.0 - ((1.0 - base) / blend)), 0.0))
#define BlendVividLightf(base, blend)   ((blend < 0.5) ? BlendColorBurnf(base, (2.0 * blend)) : BlendColorDodgef(base, (2.0 * (blend - 0.5))))
#define BlendPinLightf(base, blend)     ((blend < 0.5) ? BlendDarkenf(base, (2.0 * blend)) : BlendLightenf(base, (2.0 *(blend - 0.5))))
#define BlendHardMixf(base, blend)  ((BlendVividLightf(base, blend) < 0.5) ? 0.0 : 1.0)
#define BlendReflectf(base, blend)      ((blend == 1.0) ? blend : min(base * base / (1.0 - blend), 1.0))
// 
// 
/*
** Vector3 blending modes
*/
// 
// Component wise blending
#define Blend(base, blend, funcf)       vec3(funcf(base.r, blend.r), funcf(base.g, blend.g), funcf(base.b, blend.b))
// 
#define BlendNormal(base, blend)        (blend)
#define BlendLighten                BlendLightenf
#define BlendDarken             BlendDarkenf
#define BlendMultiply(base, blend)      (base * blend)
#define BlendAverage(base, blend)       ((base + blend) / 2.0)
#define BlendAdd(base, blend)       min(base + blend, vec3(1.0))
#define BlendSubstract(base, blend)     max(base + blend - vec3(1.0), vec3(0.0))
#define BlendDifference(base, blend)    abs(base - blend)
#define BlendNegation(base, blend)  (vec3(1.0) - abs(vec3(1.0) - base - blend))
#define BlendExclusion(base, blend)     (base + blend - 2.0 * base * blend)
#define BlendScreen(base, blend)        Blend(base, blend, BlendScreenf)
#define BlendOverlay(base, blend)       Blend(base, blend, BlendOverlayf)
#define BlendSoftLight(base, blend)     Blend(base, blend, BlendSoftLightf)
#define BlendHardLight(base, blend)     BlendOverlay(blend, base)
#define BlendColorDodge(base, blend)    Blend(base, blend, BlendColorDodgef)
#define BlendColorBurn(base, blend)     Blend(base, blend, BlendColorBurnf)
#define BlendLinearDodge            BlendAdd
#define BlendLinearBurn         BlendSubstract
// Linear Light is another contrast-increasing mode
// If the blend color is darker than midgray, Linear Light darkens the image by decreasing the brightness. If the blend color is lighter than midgray, the result is a brighter image due to increased brightness.
#define BlendLinearLight(base, blend)   Blend(base, blend, BlendLinearLightf)
#define BlendVividLight(base, blend)    Blend(base, blend, BlendVividLightf)
#define BlendPinLight(base, blend)      Blend(base, blend, BlendPinLightf)
#define BlendHardMix(base, blend)       Blend(base, blend, BlendHardMixf)
#define BlendReflect(base, blend)       Blend(base, blend, BlendReflectf)
#define BlendGlow(base, blend)      BlendReflect(blend, base)
#define BlendPhoenix(base, blend)       (min(base, blend) - max(base, blend) + vec3(1.0))
#define BlendOpacity(base, blend, F, O)     (F(base, blend) * O + blend * (1.0 - O))
// 
// 
// Hue Blend mode creates the result color by combining the luminance and saturation of the base color with the hue of the blend color.
vec3 BlendHue(vec3 base, vec3 blend)
{
    vec3 baseHSL = RGBToHSL(base);
    return HSLToRGB(vec3(RGBToHSL(blend).r, baseHSL.g, baseHSL.b));
}
// 
// Saturation Blend mode creates the result color by combining the luminance and hue of the base color with the saturation of the blend color.
vec3 BlendSaturation(vec3 base, vec3 blend)
{
    vec3 baseHSL = RGBToHSL(base);
    return HSLToRGB(vec3(baseHSL.r, RGBToHSL(blend).g, baseHSL.b));
}
// 
// Color Mode keeps the brightness of the base color and applies both the hue and saturation of the blend color.
vec3 BlendColor(vec3 base, vec3 blend)
{
    vec3 blendHSL = RGBToHSL(blend);
    return HSLToRGB(vec3(blendHSL.r, blendHSL.g, RGBToHSL(base).b));
}
// 
// Luminosity Blend mode creates the result color by combining the hue and saturation of the base color with the luminance of the blend color.
vec3 BlendLuminosity(vec3 base, vec3 blend)
{
    vec3 baseHSL = RGBToHSL(base);
    return HSLToRGB(vec3(baseHSL.r, baseHSL.g, RGBToHSL(blend).b));
}
// 
// 
/*
** Gamma correction
** Details: http://blog.mouaif.org/2009/01/22/photoshop-gamma-correction-shader/
*/
// 
#define GammaCorrection(color, gamma)                               pow(color, 1.0 / gamma)
// 
/*
** Levels control (input (+gamma), output)
** Details: https://mouaif.wordpress.com/2009/01/28/levels-control-shader/
*/
// 
#define LevelsControlInputRange(color, minInput, maxInput)              min(max(color - vec3(minInput), vec3(0.0)) / (vec3(maxInput) - vec3(minInput)), vec3(1.0))
#define LevelsControlInput(color, minInput, gamma, maxInput)                GammaCorrection(LevelsControlInputRange(color, minInput, maxInput), gamma)
#define LevelsControlOutputRange(color, minOutput, maxOutput)           mix(vec3(minOutput), vec3(maxOutput), color)
#define LevelsControl(color, minInput, gamma, maxInput, minOutput, maxOutput)   LevelsControlOutputRange(LevelsControlInput(color, minInput, gamma, maxInput), minOutput, maxOutput)
// 
// 
// ----------------------------------- End of Color blending math --------------------------
// 
float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(time)));
}
// 
void main() {
    vec2 uv = vec2(gl_FragCoord.xy) / vec2(1600, 1600);
   float rando = rand(vec2(uv.x, uv.y));
   gl_FragColor = texture2D(u_texture, v_texcoord);
   gl_FragColor.a *= alpha;
    // gl_FragColor.rgb = LevelsControlInput(gl_FragColor.rgb, 0.0, vec3(1.0), 0.925);
   // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
   // gl_FragColor.r = gl_FragColor.r * 2.5;
   // gl_FragColor.a = 0.5;
}
// endGLSL
`;
sunriseLevelsProgram.init();

let oneTextureProgramB = new ShaderProgram("one-texture-program-b");

oneTextureProgramB.vertText = `
attribute vec3 a_position;
attribute vec2 a_texcoord;
varying vec2 v_texcoord;

void main() {
  // Multiply the position by the matrix.
  vec4 positionVec4 = vec4(a_position, 1.0);
  // gl_Position = a_position;
  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
  gl_Position = positionVec4;

  // Pass the texcoord to the fragment shader.
  v_texcoord = a_texcoord;
}
`;

oneTextureProgramB.fragText = `
precision mediump float;

// Passed in from the vertex shader.
uniform float time;
uniform float alpha;
varying vec2 v_texcoord;

// The texture.
uniform sampler2D u_texture;

float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(time)));
}

void main() {
    vec2 uv = vec2(gl_FragCoord.xy) / vec2(1600, 1600);
   float rando = rand(vec2(uv.x, uv.y));
   gl_FragColor = texture2D(u_texture, v_texcoord);
   gl_FragColor.a *= alpha;
   // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
   // gl_FragColor.r = gl_FragColor.r * 2.5;
   // gl_FragColor.a = 0.5;
}
`;
oneTextureProgramB.init();


let blenderProgramB = new ShaderProgram("blender-program-b");

blenderProgramB.vertText = `
attribute vec3 a_position;
attribute vec2 a_texcoord;
varying vec2 v_texcoord;
void main() {
  // Multiply the position by the matrix.
  vec4 positionVec4 = vec4(a_position, 1.0);
  // gl_Position = a_position;
  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
  gl_Position = positionVec4;
  // Pass the texcoord to the fragment shader.
  v_texcoord = a_texcoord;
}
`;
blenderProgramB.fragText = `
// beginGLSL
precision mediump float;
// Passed in from the vertex shader.
uniform float resolution;
uniform float time;
varying vec2 v_texcoord;
// The texture.
uniform sampler2D u_texture;
uniform sampler2D u_texture2;
// 
// ----------------------------------- Color blending math --------------------------
// 
/*
** Copyright (c) 2012, Romain Dura romain@shazbits.com
** 
** Permission to use, copy, modify, and/or distribute this software for any 
** purpose with or without fee is hereby granted, provided that the above 
** copyright notice and this permission notice appear in all copies.
** 
** THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES 
** WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF 
** MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY 
** SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES 
** WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN 
** ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR 
** IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/
// 
/*
** Photoshop & misc math
** Blending modes, RGB/HSL/Contrast/Desaturate, levels control
**
** Romain Dura | Romz
** Blog: http://mouaif.wordpress.com
** Post: http://mouaif.wordpress.com/?p=94
*/
// 
// 
// 
/*
** Desaturation
*/
// 
vec4 Desaturate(vec3 color, float Desaturation) {
    vec3 grayXfer = vec3(0.3, 0.59, 0.11);
    vec3 gray = vec3(dot(grayXfer, color));
    return vec4(mix(color, gray, Desaturation), 1.0);
}
// 
// 
/*
** Hue, saturation, luminance
*/
// 
vec3 RGBToHSL(vec3 color) {
    vec3 hsl; // init to 0 to avoid warnings ? (and reverse if + remove first part)
// 
    float fmin = min(min(color.r, color.g), color.b);    //Min. value of RGB
    float fmax = max(max(color.r, color.g), color.b);    //Max. value of RGB
    float delta = fmax - fmin;             //Delta RGB value
// 
    hsl.z = (fmax + fmin) / 2.0; // Luminance
// 
    if (delta == 0.0)       //This is a gray, no chroma...
    {
        hsl.x = 0.0;    // Hue
        hsl.y = 0.0;    // Saturation
    }
    else                                    //Chromatic data...
    {
        if (hsl.z < 0.5)
            hsl.y = delta / (fmax + fmin); // Saturation
        else
            hsl.y = delta / (2.0 - fmax - fmin); // Saturation
        
        float deltaR = (((fmax - color.r) / 6.0) + (delta / 2.0)) / delta;
        float deltaG = (((fmax - color.g) / 6.0) + (delta / 2.0)) / delta;
        float deltaB = (((fmax - color.b) / 6.0) + (delta / 2.0)) / delta;
// 
        if (color.r == fmax )
            hsl.x = deltaB - deltaG; // Hue
        else if (color.g == fmax)
            hsl.x = (1.0 / 3.0) + deltaR - deltaB; // Hue
        else if (color.b == fmax)
            hsl.x = (2.0 / 3.0) + deltaG - deltaR; // Hue
// 
        if (hsl.x < 0.0)
            hsl.x += 1.0; // Hue
        else if (hsl.x > 1.0)
            hsl.x -= 1.0; // Hue
    }
// 
    return hsl;
}
// 
float HueToRGB(float f1, float f2, float hue)
{
    if (hue < 0.0)
        hue += 1.0;
    else if (hue > 1.0)
        hue -= 1.0;
    float res;
    if ((6.0 * hue) < 1.0)
        res = f1 + (f2 - f1) * 6.0 * hue;
    else if ((2.0 * hue) < 1.0)
        res = f2;
    else if ((3.0 * hue) < 2.0)
        res = f1 + (f2 - f1) * ((2.0 / 3.0) - hue) * 6.0;
    else
        res = f1;
    return res;
}
// 
vec3 HSLToRGB(vec3 hsl)
{
    vec3 rgb;
// 
    if (hsl.y == 0.0)
        rgb = vec3(hsl.z); // Luminance
    else
    {
        float f2;
// 
        if (hsl.z < 0.5)
            f2 = hsl.z * (1.0 + hsl.y);
        else
            f2 = (hsl.z + hsl.y) - (hsl.y * hsl.z);
// 
        float f1 = 2.0 * hsl.z - f2;
// 
        rgb.r = HueToRGB(f1, f2, hsl.x + (1.0/3.0));
        rgb.g = HueToRGB(f1, f2, hsl.x);
        rgb.b= HueToRGB(f1, f2, hsl.x - (1.0/3.0));
    }
// 
    return rgb;
}
// 
// 
/*
** Contrast, saturation, brightness
** Code of this function is from TGM's shader pack
** http://irrlicht.sourceforge.net/phpBB2/viewtopic.php?t=21057
*/
// 
// For all settings: 1.0 = 100% 0.5=50% 1.5 = 150%
vec3 ContrastSaturationBrightness(vec3 color, float brt, float sat, float con)
{
    // Increase or decrease theese values to adjust r, g and b color channels seperately
    const float AvgLumR = 0.5;
    const float AvgLumG = 0.5;
    const float AvgLumB = 0.5;    
    const vec3 LumCoeff = vec3(0.2125, 0.7154, 0.0721);
    vec3 AvgLumin = vec3(AvgLumR, AvgLumG, AvgLumB);
    vec3 brtColor = color * brt;
    vec3 intensity = vec3(dot(brtColor, LumCoeff));
    vec3 satColor = mix(intensity, brtColor, sat);
    vec3 conColor = mix(AvgLumin, satColor, con);
    return conColor;
}
// 
// 
/*
** Float blending modes
** Adapted from here: http://www.nathanm.com/photoshop-blending-math/
** But I modified the HardMix (wrong condition), Overlay, SoftLight, ColorDodge, ColorBurn, VividLight, PinLight (inverted layers) ones to have correct results
*/
// 
#define BlendLinearDodgef           BlendAddf
#define BlendLinearBurnf            BlendSubstractf
#define BlendAddf(base, blend)      min(base + blend, 1.0)
#define BlendSubstractf(base, blend)    max(base + blend - 1.0, 0.0)
#define BlendLightenf(base, blend)      max(blend, base)
#define BlendDarkenf(base, blend)       min(blend, base)
#define BlendLinearLightf(base, blend)  (blend < 0.5 ? BlendLinearBurnf(base, (2.0 * blend)) : BlendLinearDodgef(base, (2.0 * (blend - 0.5))))
#define BlendScreenf(base, blend)       (1.0 - ((1.0 - base) * (1.0 - blend)))
#define BlendOverlayf(base, blend)  (base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend)))
#define BlendSoftLightf(base, blend)    ((blend < 0.5) ? (2.0 * base * blend + base * base * (1.0 - 2.0 * blend)) : (sqrt(base) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend)))
#define BlendColorDodgef(base, blend)   ((blend == 1.0) ? blend : min(base / (1.0 - blend), 1.0))
#define BlendColorBurnf(base, blend)    ((blend == 0.0) ? blend : max((1.0 - ((1.0 - base) / blend)), 0.0))
#define BlendVividLightf(base, blend)   ((blend < 0.5) ? BlendColorBurnf(base, (2.0 * blend)) : BlendColorDodgef(base, (2.0 * (blend - 0.5))))
#define BlendPinLightf(base, blend)     ((blend < 0.5) ? BlendDarkenf(base, (2.0 * blend)) : BlendLightenf(base, (2.0 *(blend - 0.5))))
#define BlendHardMixf(base, blend)  ((BlendVividLightf(base, blend) < 0.5) ? 0.0 : 1.0)
#define BlendReflectf(base, blend)      ((blend == 1.0) ? blend : min(base * base / (1.0 - blend), 1.0))
// 
// 
/*
** Vector3 blending modes
*/
// 
// Component wise blending
#define Blend(base, blend, funcf)       vec3(funcf(base.r, blend.r), funcf(base.g, blend.g), funcf(base.b, blend.b))
// 
#define BlendNormal(base, blend)        (blend)
#define BlendLighten                BlendLightenf
#define BlendDarken             BlendDarkenf
#define BlendMultiply(base, blend)      (base * blend)
#define BlendAverage(base, blend)       ((base + blend) / 2.0)
#define BlendAdd(base, blend)       min(base + blend, vec3(1.0))
#define BlendSubstract(base, blend)     max(base + blend - vec3(1.0), vec3(0.0))
#define BlendDifference(base, blend)    abs(base - blend)
#define BlendNegation(base, blend)  (vec3(1.0) - abs(vec3(1.0) - base - blend))
#define BlendExclusion(base, blend)     (base + blend - 2.0 * base * blend)
#define BlendScreen(base, blend)        Blend(base, blend, BlendScreenf)
#define BlendOverlay(base, blend)       Blend(base, blend, BlendOverlayf)
#define BlendSoftLight(base, blend)     Blend(base, blend, BlendSoftLightf)
#define BlendHardLight(base, blend)     BlendOverlay(blend, base)
#define BlendColorDodge(base, blend)    Blend(base, blend, BlendColorDodgef)
#define BlendColorBurn(base, blend)     Blend(base, blend, BlendColorBurnf)
#define BlendLinearDodge            BlendAdd
#define BlendLinearBurn         BlendSubstract
// Linear Light is another contrast-increasing mode
// If the blend color is darker than midgray, Linear Light darkens the image by decreasing the brightness. If the blend color is lighter than midgray, the result is a brighter image due to increased brightness.
#define BlendLinearLight(base, blend)   Blend(base, blend, BlendLinearLightf)
#define BlendVividLight(base, blend)    Blend(base, blend, BlendVividLightf)
#define BlendPinLight(base, blend)      Blend(base, blend, BlendPinLightf)
#define BlendHardMix(base, blend)       Blend(base, blend, BlendHardMixf)
#define BlendReflect(base, blend)       Blend(base, blend, BlendReflectf)
#define BlendGlow(base, blend)      BlendReflect(blend, base)
#define BlendPhoenix(base, blend)       (min(base, blend) - max(base, blend) + vec3(1.0))
#define BlendOpacity(base, blend, F, O)     (F(base, blend) * O + blend * (1.0 - O))
// 
// 
// Hue Blend mode creates the result color by combining the luminance and saturation of the base color with the hue of the blend color.
vec3 BlendHue(vec3 base, vec3 blend)
{
    vec3 baseHSL = RGBToHSL(base);
    return HSLToRGB(vec3(RGBToHSL(blend).r, baseHSL.g, baseHSL.b));
}
// 
// Saturation Blend mode creates the result color by combining the luminance and hue of the base color with the saturation of the blend color.
vec3 BlendSaturation(vec3 base, vec3 blend)
{
    vec3 baseHSL = RGBToHSL(base);
    return HSLToRGB(vec3(baseHSL.r, RGBToHSL(blend).g, baseHSL.b));
}
// 
// Color Mode keeps the brightness of the base color and applies both the hue and saturation of the blend color.
vec3 BlendColor(vec3 base, vec3 blend)
{
    vec3 blendHSL = RGBToHSL(blend);
    return HSLToRGB(vec3(blendHSL.r, blendHSL.g, RGBToHSL(base).b));
}
// 
// Luminosity Blend mode creates the result color by combining the hue and saturation of the base color with the luminance of the blend color.
vec3 BlendLuminosity(vec3 base, vec3 blend)
{
    vec3 baseHSL = RGBToHSL(base);
    return HSLToRGB(vec3(baseHSL.r, baseHSL.g, RGBToHSL(blend).b));
}
// 
// 
/*
** Gamma correction
** Details: http://blog.mouaif.org/2009/01/22/photoshop-gamma-correction-shader/
*/
// 
#define GammaCorrection(color, gamma)                               pow(color, 1.0 / gamma)
// 
/*
** Levels control (input (+gamma), output)
** Details: https://mouaif.wordpress.com/2009/01/28/levels-control-shader/
*/
// 
#define LevelsControlInputRange(color, minInput, maxInput)              min(max(color - vec3(minInput), vec3(0.0)) / (vec3(maxInput) - vec3(minInput)), vec3(1.0))
#define LevelsControlInput(color, minInput, gamma, maxInput)                GammaCorrection(LevelsControlInputRange(color, minInput, maxInput), gamma)
#define LevelsControlOutputRange(color, minOutput, maxOutput)           mix(vec3(minOutput), vec3(maxOutput), color)
#define LevelsControl(color, minInput, gamma, maxInput, minOutput, maxOutput)   LevelsControlOutputRange(LevelsControlInput(color, minInput, gamma, maxInput), minOutput, maxOutput)
// 
// 
// ----------------------------------- End of Color blending math --------------------------
// 
float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(time)));
}
// 
void main() {
//     
//     Beautiful, subtle blue and purple
//     vec2 uv = vec2(gl_FragCoord.xy) / vec2(1600, 1600);
//     vec4 texture = texture2D(u_texture, v_texcoord);
//     vec4 texture2 = texture2D(u_texture2, v_texcoord);
//     vec3 levels = LevelsControlInputRange(texture2.rgb, 0.2, 0.95);
//     vec3 blender = BlendSoftLight(texture.rgb, levels);
//     float blendMix = 0.95;
//     vec3 blend = (texture.rgb * (1.0 - blendMix)) + (blender * blendMix);
//     vec3 col = blend + vec3(0.24, -0.12, -0.12);
//     col = LevelsControlInputRange(col, 0.0, 0.95);
//     gl_FragColor = vec4(col, 1.0);
//     gl_FragColor = vec4((col * 0.5) + texture.rgb * 0.5, 1.01);
//     
// A wilder, pinker version
    vec2 uv = vec2(gl_FragCoord.xy) / vec2(1600, 1600);
    if (resolution == 1.0) {
        uv *= 0.5;
    }
    vec4 texture = texture2D(u_texture, v_texcoord);
    vec4 texture2 = texture2D(u_texture2, v_texcoord);
    vec3 levels = LevelsControlInputRange(texture2.rgb, 0.2, 0.95);
    vec3 blender = BlendLinearDodge(texture.rgb, levels);
    float blendMix = 0.25;
    vec3 blend = (texture.rgb * (1.0 - blendMix)) + (blender * blendMix);
    vec3 col = blend + vec3(0.4, -0.12, -0.12);
    col = LevelsControlInputRange(col, 0.15, 0.9);
    col = (texture.rgb * uv.y * 2.0) + col * (1.0 - uv.y * 2.0);
//     col = (col * 0.9) + (texture2.rgb * 0.1);
//     gl_FragColor = vec4(col, 1.0);
    gl_FragColor = vec4(col, 1.01);
    // gl_FragColor.rgb = LevelsControlInput(gl_FragColor.rgb, 0.0125, vec3(1.), 0.925);
}
// endGLSL
`;
blenderProgramB.init();




if (false) {

    // let blenderProgram = new ShaderProgram("blender-program");

    blenderProgram.vertText = `
attribute vec3 a_position;
attribute vec2 a_texcoord;
varying vec2 v_texcoord;
void main() {
  // Multiply the position by the matrix.
  vec4 positionVec4 = vec4(a_position, 1.0);
  // gl_Position = a_position;
  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
  gl_Position = positionVec4;
  // Pass the texcoord to the fragment shader.
  v_texcoord = a_texcoord;
}
`;
    blenderProgram.fragText = `
// beginGLSL
precision mediump float;
// Passed in from the vertex shader.
uniform float resolution;
uniform float time;
varying vec2 v_texcoord;
// The texture.
uniform sampler2D u_texture;
uniform sampler2D u_texture2;
// 
// ----------------------------------- Color blending math --------------------------
// 
/*
** Copyright (c) 2012, Romain Dura romain@shazbits.com
** 
** Permission to use, copy, modify, and/or distribute this software for any 
** purpose with or without fee is hereby granted, provided that the above 
** copyright notice and this permission notice appear in all copies.
** 
** THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES 
** WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF 
** MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY 
** SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES 
** WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN 
** ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR 
** IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/
// 
/*
** Photoshop & misc math
** Blending modes, RGB/HSL/Contrast/Desaturate, levels control
**
** Romain Dura | Romz
** Blog: http://mouaif.wordpress.com
** Post: http://mouaif.wordpress.com/?p=94
*/
// 
// 
// 
/*
** Desaturation
*/
// 
vec4 Desaturate(vec3 color, float Desaturation) {
    vec3 grayXfer = vec3(0.3, 0.59, 0.11);
    vec3 gray = vec3(dot(grayXfer, color));
    return vec4(mix(color, gray, Desaturation), 1.0);
}
// 
// 
/*
** Hue, saturation, luminance
*/
// 
vec3 RGBToHSL(vec3 color) {
    vec3 hsl; // init to 0 to avoid warnings ? (and reverse if + remove first part)
// 
    float fmin = min(min(color.r, color.g), color.b);    //Min. value of RGB
    float fmax = max(max(color.r, color.g), color.b);    //Max. value of RGB
    float delta = fmax - fmin;             //Delta RGB value
// 
    hsl.z = (fmax + fmin) / 2.0; // Luminance
// 
    if (delta == 0.0)       //This is a gray, no chroma...
    {
        hsl.x = 0.0;    // Hue
        hsl.y = 0.0;    // Saturation
    }
    else                                    //Chromatic data...
    {
        if (hsl.z < 0.5)
            hsl.y = delta / (fmax + fmin); // Saturation
        else
            hsl.y = delta / (2.0 - fmax - fmin); // Saturation
        
        float deltaR = (((fmax - color.r) / 6.0) + (delta / 2.0)) / delta;
        float deltaG = (((fmax - color.g) / 6.0) + (delta / 2.0)) / delta;
        float deltaB = (((fmax - color.b) / 6.0) + (delta / 2.0)) / delta;
// 
        if (color.r == fmax )
            hsl.x = deltaB - deltaG; // Hue
        else if (color.g == fmax)
            hsl.x = (1.0 / 3.0) + deltaR - deltaB; // Hue
        else if (color.b == fmax)
            hsl.x = (2.0 / 3.0) + deltaG - deltaR; // Hue
// 
        if (hsl.x < 0.0)
            hsl.x += 1.0; // Hue
        else if (hsl.x > 1.0)
            hsl.x -= 1.0; // Hue
    }
// 
    return hsl;
}
// 
float HueToRGB(float f1, float f2, float hue)
{
    if (hue < 0.0)
        hue += 1.0;
    else if (hue > 1.0)
        hue -= 1.0;
    float res;
    if ((6.0 * hue) < 1.0)
        res = f1 + (f2 - f1) * 6.0 * hue;
    else if ((2.0 * hue) < 1.0)
        res = f2;
    else if ((3.0 * hue) < 2.0)
        res = f1 + (f2 - f1) * ((2.0 / 3.0) - hue) * 6.0;
    else
        res = f1;
    return res;
}
// 
vec3 HSLToRGB(vec3 hsl)
{
    vec3 rgb;
// 
    if (hsl.y == 0.0)
        rgb = vec3(hsl.z); // Luminance
    else
    {
        float f2;
// 
        if (hsl.z < 0.5)
            f2 = hsl.z * (1.0 + hsl.y);
        else
            f2 = (hsl.z + hsl.y) - (hsl.y * hsl.z);
// 
        float f1 = 2.0 * hsl.z - f2;
// 
        rgb.r = HueToRGB(f1, f2, hsl.x + (1.0/3.0));
        rgb.g = HueToRGB(f1, f2, hsl.x);
        rgb.b= HueToRGB(f1, f2, hsl.x - (1.0/3.0));
    }
// 
    return rgb;
}
// 
// 
/*
** Contrast, saturation, brightness
** Code of this function is from TGM's shader pack
** http://irrlicht.sourceforge.net/phpBB2/viewtopic.php?t=21057
*/
// 
// For all settings: 1.0 = 100% 0.5=50% 1.5 = 150%
vec3 ContrastSaturationBrightness(vec3 color, float brt, float sat, float con)
{
    // Increase or decrease theese values to adjust r, g and b color channels seperately
    const float AvgLumR = 0.5;
    const float AvgLumG = 0.5;
    const float AvgLumB = 0.5;    
    const vec3 LumCoeff = vec3(0.2125, 0.7154, 0.0721);
    vec3 AvgLumin = vec3(AvgLumR, AvgLumG, AvgLumB);
    vec3 brtColor = color * brt;
    vec3 intensity = vec3(dot(brtColor, LumCoeff));
    vec3 satColor = mix(intensity, brtColor, sat);
    vec3 conColor = mix(AvgLumin, satColor, con);
    return conColor;
}
// 
// 
/*
** Float blending modes
** Adapted from here: http://www.nathanm.com/photoshop-blending-math/
** But I modified the HardMix (wrong condition), Overlay, SoftLight, ColorDodge, ColorBurn, VividLight, PinLight (inverted layers) ones to have correct results
*/
// 
#define BlendLinearDodgef           BlendAddf
#define BlendLinearBurnf            BlendSubstractf
#define BlendAddf(base, blend)      min(base + blend, 1.0)
#define BlendSubstractf(base, blend)    max(base + blend - 1.0, 0.0)
#define BlendLightenf(base, blend)      max(blend, base)
#define BlendDarkenf(base, blend)       min(blend, base)
#define BlendLinearLightf(base, blend)  (blend < 0.5 ? BlendLinearBurnf(base, (2.0 * blend)) : BlendLinearDodgef(base, (2.0 * (blend - 0.5))))
#define BlendScreenf(base, blend)       (1.0 - ((1.0 - base) * (1.0 - blend)))
#define BlendOverlayf(base, blend)  (base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend)))
#define BlendSoftLightf(base, blend)    ((blend < 0.5) ? (2.0 * base * blend + base * base * (1.0 - 2.0 * blend)) : (sqrt(base) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend)))
#define BlendColorDodgef(base, blend)   ((blend == 1.0) ? blend : min(base / (1.0 - blend), 1.0))
#define BlendColorBurnf(base, blend)    ((blend == 0.0) ? blend : max((1.0 - ((1.0 - base) / blend)), 0.0))
#define BlendVividLightf(base, blend)   ((blend < 0.5) ? BlendColorBurnf(base, (2.0 * blend)) : BlendColorDodgef(base, (2.0 * (blend - 0.5))))
#define BlendPinLightf(base, blend)     ((blend < 0.5) ? BlendDarkenf(base, (2.0 * blend)) : BlendLightenf(base, (2.0 *(blend - 0.5))))
#define BlendHardMixf(base, blend)  ((BlendVividLightf(base, blend) < 0.5) ? 0.0 : 1.0)
#define BlendReflectf(base, blend)      ((blend == 1.0) ? blend : min(base * base / (1.0 - blend), 1.0))
// 
// 
/*
** Vector3 blending modes
*/
// 
// Component wise blending
#define Blend(base, blend, funcf)       vec3(funcf(base.r, blend.r), funcf(base.g, blend.g), funcf(base.b, blend.b))
// 
#define BlendNormal(base, blend)        (blend)
#define BlendLighten                BlendLightenf
#define BlendDarken             BlendDarkenf
#define BlendMultiply(base, blend)      (base * blend)
#define BlendAverage(base, blend)       ((base + blend) / 2.0)
#define BlendAdd(base, blend)       min(base + blend, vec3(1.0))
#define BlendSubstract(base, blend)     max(base + blend - vec3(1.0), vec3(0.0))
#define BlendDifference(base, blend)    abs(base - blend)
#define BlendNegation(base, blend)  (vec3(1.0) - abs(vec3(1.0) - base - blend))
#define BlendExclusion(base, blend)     (base + blend - 2.0 * base * blend)
#define BlendScreen(base, blend)        Blend(base, blend, BlendScreenf)
#define BlendOverlay(base, blend)       Blend(base, blend, BlendOverlayf)
#define BlendSoftLight(base, blend)     Blend(base, blend, BlendSoftLightf)
#define BlendHardLight(base, blend)     BlendOverlay(blend, base)
#define BlendColorDodge(base, blend)    Blend(base, blend, BlendColorDodgef)
#define BlendColorBurn(base, blend)     Blend(base, blend, BlendColorBurnf)
#define BlendLinearDodge            BlendAdd
#define BlendLinearBurn         BlendSubstract
// Linear Light is another contrast-increasing mode
// If the blend color is darker than midgray, Linear Light darkens the image by decreasing the brightness. If the blend color is lighter than midgray, the result is a brighter image due to increased brightness.
#define BlendLinearLight(base, blend)   Blend(base, blend, BlendLinearLightf)
#define BlendVividLight(base, blend)    Blend(base, blend, BlendVividLightf)
#define BlendPinLight(base, blend)      Blend(base, blend, BlendPinLightf)
#define BlendHardMix(base, blend)       Blend(base, blend, BlendHardMixf)
#define BlendReflect(base, blend)       Blend(base, blend, BlendReflectf)
#define BlendGlow(base, blend)      BlendReflect(blend, base)
#define BlendPhoenix(base, blend)       (min(base, blend) - max(base, blend) + vec3(1.0))
#define BlendOpacity(base, blend, F, O)     (F(base, blend) * O + blend * (1.0 - O))
// 
// 
// Hue Blend mode creates the result color by combining the luminance and saturation of the base color with the hue of the blend color.
vec3 BlendHue(vec3 base, vec3 blend)
{
    vec3 baseHSL = RGBToHSL(base);
    return HSLToRGB(vec3(RGBToHSL(blend).r, baseHSL.g, baseHSL.b));
}
// 
// Saturation Blend mode creates the result color by combining the luminance and hue of the base color with the saturation of the blend color.
vec3 BlendSaturation(vec3 base, vec3 blend)
{
    vec3 baseHSL = RGBToHSL(base);
    return HSLToRGB(vec3(baseHSL.r, RGBToHSL(blend).g, baseHSL.b));
}
// 
// Color Mode keeps the brightness of the base color and applies both the hue and saturation of the blend color.
vec3 BlendColor(vec3 base, vec3 blend)
{
    vec3 blendHSL = RGBToHSL(blend);
    return HSLToRGB(vec3(blendHSL.r, blendHSL.g, RGBToHSL(base).b));
}
// 
// Luminosity Blend mode creates the result color by combining the hue and saturation of the base color with the luminance of the blend color.
vec3 BlendLuminosity(vec3 base, vec3 blend)
{
    vec3 baseHSL = RGBToHSL(base);
    return HSLToRGB(vec3(baseHSL.r, baseHSL.g, RGBToHSL(blend).b));
}
// 
// 
/*
** Gamma correction
** Details: http://blog.mouaif.org/2009/01/22/photoshop-gamma-correction-shader/
*/
// 
#define GammaCorrection(color, gamma)                               pow(color, 1.0 / gamma)
// 
/*
** Levels control (input (+gamma), output)
** Details: https://mouaif.wordpress.com/2009/01/28/levels-control-shader/
*/
// 
#define LevelsControlInputRange(color, minInput, maxInput)              min(max(color - vec3(minInput), vec3(0.0)) / (vec3(maxInput) - vec3(minInput)), vec3(1.0))
#define LevelsControlInput(color, minInput, gamma, maxInput)                GammaCorrection(LevelsControlInputRange(color, minInput, maxInput), gamma)
#define LevelsControlOutputRange(color, minOutput, maxOutput)           mix(vec3(minOutput), vec3(maxOutput), color)
#define LevelsControl(color, minInput, gamma, maxInput, minOutput, maxOutput)   LevelsControlOutputRange(LevelsControlInput(color, minInput, gamma, maxInput), minOutput, maxOutput)
// 
// 
// ----------------------------------- End of Color blending math --------------------------
// 
vec3 hueShift2( vec3 color, float hueAdjust ){
    const vec3  kRGBToYPrime = vec3 (0.299, 0.587, 0.114);
    const vec3  kRGBToI      = vec3 (0.596, -0.275, -0.321);
    const vec3  kRGBToQ      = vec3 (0.212, -0.523, 0.311);
    const vec3  kYIQToR     = vec3 (1.0, 0.956, 0.621);
    const vec3  kYIQToG     = vec3 (1.0, -0.272, -0.647);
    const vec3  kYIQToB     = vec3 (1.0, -1.107, 1.704);
    // Convert to YIQ
    float   YPrime  = dot (color, kRGBToYPrime);
    float   I       = dot (color, kRGBToI);
    float   Q       = dot (color, kRGBToQ);
    // Calculate the hue and chroma
    float   hue     = atan (Q, I);
    float   chroma  = sqrt (I * I + Q * Q);
    // Make the user's adjustments
    hue += hueAdjust;
    // Convert back to YIQ
    Q = chroma * sin (hue);
    I = chroma * cos (hue);
    // Convert back to RGB
    vec3    yIQ   = vec3 (YPrime, I, Q);
    return vec3( dot (yIQ, kYIQToR), dot (yIQ, kYIQToG), dot (yIQ, kYIQToB) );
}
float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(time)));
}
vec3 CircleRGB(vec2 uv, vec2 p, float r, float blur, vec3 col) {
    float d = length(uv - p); 
    float c = smoothstep(r, r - blur, d); 
    return col * c;
}
vec3 InvCircleRGB(vec2 uv, vec2 p, float r, float blur, vec3 col) {
    float d = length(p - uv); 
    float c = smoothstep(r - blur, r, d); 
    return col * c;
}
// 
void main() {
//     
//     Beautiful, subtle blue and purple
//     vec2 uv = vec2(gl_FragCoord.xy) / vec2(1600, 1600);
//     vec4 texture = texture2D(u_texture, v_texcoord);
//     vec4 texture2 = texture2D(u_texture2, v_texcoord);
//     vec3 levels = LevelsControlInputRange(texture2.rgb, 0.2, 0.95);
//     vec3 blender = BlendSoftLight(texture.rgb, levels);
//     float blendMix = 0.95;
//     vec3 blend = (texture.rgb * (1.0 - blendMix)) + (blender * blendMix);
//     vec3 col = blend + vec3(0.24, -0.12, -0.12);
//     col = LevelsControlInputRange(col, 0.0, 0.95);
//     gl_FragColor = vec4(col, 1.0);
//     gl_FragColor = vec4((col * 0.5) + texture.rgb * 0.5, 1.01);
//     
// A wilder, pinker version
    const float PI = 3.1415926535897932384626433832795;
    vec2 uv = vec2(gl_FragCoord.xy) / vec2(1600, 1600);
    if (resolution == 1.0) {
        uv *= 0.5;
    }
    vec4 texture = texture2D(u_texture, v_texcoord);
    vec4 texture2 = texture2D(u_texture2, v_texcoord);
    vec3 levels = LevelsControlInputRange(texture2.rgb, 0.2, 0.95);
    vec3 blender = BlendLinearDodge(texture.rgb, levels);
    float blendMix = 0.25;
    vec3 blend = (texture.rgb * (1.0 - blendMix)) + (blender * blendMix);
    blend = mix(texture.rgb, blender, 0.25);
    vec3 col = blend + vec3(0.4, -0.12, -0.12);
    col = LevelsControlInputRange(col, 0.1, 0.95);
    col = (texture.rgb * uv.y * 2.0) + col * (1.0 - uv.y * 2.0);
//     col = (col * 0.9) + (texture2.rgb * 0.1);
//     gl_FragColor = vec4(col, 1.0);
    col = mix(col, texture.rgb, 0.25);
    gl_FragColor = vec4(col, 1.01);
    gl_FragColor.rgb = LevelsControlInput(gl_FragColor.rgb, 0.0125, vec3(1.), 0.95);
// 
//     
//     
    vec2 p = vec2(10.0, 1.004);
    vec2 p2 = vec2(0.0, 0.0);
    col = CircleRGB(uv, p2, 1.9, 0.2, vec3(0.75, 0.4, 2.0));
    col.r *= sin(length(uv - p2) * (6. + sin(1. * 20.) * 0.01));
    vec2 newV = (uv + vec2(11.0, 0.1) + tan(uv.y * 1.)) - (p * 1.1 + sin(uv.x * 13.));
    newV += cos(sin((uv * vec2(40.0, 4.0)) * 150.0 * 2.0));
    float rando = rand(uv * 101.001) * 0.25 * 0.25 * 0.75;
    vec3 wilder = gl_FragColor.rgb;
    // wilder -= max(col, -0.9) * 0.5;
    wilder.b = min(max(wilder.r, wilder.g * 2.), 1.0);
    // wilder.g *= 1.2;
    // wilder.b *= 4.0;
    // wilder.r *= 1.5;
    // wilder.b *= 1.2 - wilder.g * 0.75;
    // gl_FragColor.a = 0.5;
    // wilder.rgb = wilder.bgr * 0.76;
    gl_FragColor.rgb = mix(gl_FragColor.rgb, wilder, 0.25);
    // gl_FragColor.rgb = hueShift2(gl_FragColor.rgb, PI * 0.5);
    // gl_FragColor.rgb = LevelsControlInput(gl_FragColor.rgb, 0.0, vec3(1.0), 0.95);
}
// endGLSL
`;
    blenderProgram.init();
    console.log("Down there by the lake !");
}