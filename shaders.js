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
    uv.x *= 1280.0/800.0;
//      uv *= 1.2;
    vec2 uvf = uv * 10.;
//     uv.x += 0.25;
//     uv.y += 0.2;
//     uv.x += 3.5;
    uv *= 0.5;
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
    float rando = rand(uvf) * 0.075;
//     col.r -= rando * 1.;
     col.g *= 0.5;
    gl_FragColor = vec4((col- rando) * 1.0, 1.0);
    // gl_FragColor = vec4(col * 1.0, 1.0);
}
    // endGLSL
`;
blueBackground.init();



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
        v_texcoord = a_texcoord * vec2(1.0, -1.0) + vec2(0.0, 0.5);
        vec4 positionVec4 = vec4(a_position * vec3(1.0, 0.115, 1.0), 1.0);
        positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
        gl_Position = positionVec4 + vec4(0.0, 0.4, 0.0, 0.0);
    }
    // endGLSL
    `;
withImage.fragText = `
    // beginGLSL
    precision mediump float;
    // Passed in from the vertex shader.
    varying vec2 v_texcoord;
    // The texture.
    uniform sampler2D u_texture;
    void main() {
        gl_FragColor = texture2D(u_texture, v_texcoord);
    }
    // endGLSL
`;

withImage.init = function() {
    if (shadersReadyToInitiate) {
        // Asynchronously load an image
        this.image = new Image();
        this.image.src = "f-texture-title-a2.png";
        // this.image.src = "https://webglfundamentals.org/webgl/resources/f-texture.png";
        let that = this;
        console.log(that);
        this.image.addEventListener('load', function() {
            titledLoaded = true;
            // this.image.onload = function() {
            // Create a vertex shader object
            var vertShader = gl.createShader(gl.VERTEX_SHADER);
            // Attach vertex shader source code
            gl.shaderSource(vertShader, that.vertText);
            console.log(that.vertText);
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
        gl_PointSize = 180.0;
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
        gl_FragColor = vec4(0.02 + 0.01 * alpha, 0.001 - 1.1 * alpha, 0.025, (0.9 - dist_squared * 50.0 - (rando * 0.15)) * 0.125 + alpha) * 22.0;
//         gl_FragColor = vec4(1.0, 1.0 - dist_squared * 1.0, 0.0, 0.35 - dist_squared - (rando * 0.2));
        // gl_FragColor = vec4(d * 0.001, uv.x, 0.0, 0.25);
    }
    // endGLSL
`;
cyanDots2.init();