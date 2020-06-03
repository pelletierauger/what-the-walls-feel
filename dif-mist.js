// mustard-like when blended with plantsSofter using Scene.prototype.display()
// or blendyCavern.display()
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
    vec2 p = vec2(10.0, 1.004);
    vec2 p2 = vec2(0.0, 0.0);
    vec3 col = CircleRGB(uv, p2, 1.9, 0.2, vec3(1.05, 0.4, 2.0));
    col.r *= sin(length(uv - p2) * (6. + sin(1. * 20.) * 0.01));
//     col.g *= sin(length(uv - p) * (6. + sin(1. * 20.) * 0.01));
    vec2 newV = (uv + vec2(11.0, 0.1) + tan(uv.y * 1.)) - (p * 1.1 + sin(uv.x * 13.));
//     newV += cos(sin(uv * 15.));
    newV += cos(sin((uv * vec2(40.0, 4.0)) * 150.0 * 2.0));
//     col *= sin(atan(newV.x * uv.y * 100.1, newV.y));
//     col *= sin(sin(atan(newV.x, newV.y) * (sin(t * 100.) * 1.2)) * 1. + sin(t * 10.) * 10.);
    float rando = rand(uv * 101.001) * 0.25 * 0.25 * 0.75;
// //     col.r -= rando * 1.;
//      col.g *= 0.5;
//     gl_FragColor = vec4((col- rando) * 1.0, 1.0);
    gl_FragColor = texture2D(u_texture, v_texcoord);
    gl_FragColor.rgb -= max(col, -0.9) * 0.5;
//     gl_FragColor.r = min(max(gl_FragColor.r, col.r - rando), 1.0) - rando * col.r;
    gl_FragColor.b = min(max(gl_FragColor.g, col.r * 0.2 - rando), 1.0);
//     gl_FragColor.rgb += col2 * 0.75;
//     gl_FragColor.rgb += colb * 0.85;
//     gl_FragColor.r *= 1.5;
    gl_FragColor.g *= 1.2;
    gl_FragColor.b *= 4.0;
    gl_FragColor.a *= alpha;
    // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    gl_FragColor.r *= 1.5;
    gl_FragColor.b *= 1.2 - gl_FragColor.g * 0.75;
    // gl_FragColor.a = 0.5;
    gl_FragColor.rgb = gl_FragColor.bgr * 0.76;
}
// endGLSL
`;
mistyProgram2.init();

// burned
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
    vec2 p = vec2(10.0, 1.004);
    vec2 p2 = vec2(0.0, 0.0);
    vec3 col = CircleRGB(uv, p2, 1.9, 0.2, vec3(1.05, 0.4, 2.0));
    col.r *= sin(length(uv - p2) * (6. + sin(1. * 20.) * 0.01));
//     col.g *= sin(length(uv - p) * (6. + sin(1. * 20.) * 0.01));
    vec2 newV = (uv + vec2(11.0, 0.1) + tan(uv.y * 1.)) - (p * 1.1 + sin(uv.x * 13.));
//     newV += cos(sin(uv * 15.));
    newV += cos(sin((uv * vec2(40.0, 4.0)) * 150.0 * 2.0));
//     col *= sin(atan(newV.x * uv.y * 100.1, newV.y));
//     col *= sin(sin(atan(newV.x, newV.y) * (sin(t * 100.) * 1.2)) * 1. + sin(t * 10.) * 10.);
    float rando = rand(uv * 101.001) * 0.25 * 0.25 * 0.75;
// //     col.r -= rando * 1.;
//      col.g *= 0.5;
//     gl_FragColor = vec4((col- rando) * 1.0, 1.0);
    gl_FragColor = texture2D(u_texture, v_texcoord);
    gl_FragColor.rgb -= max(col, -0.9) * 0.5;
//     gl_FragColor.r = min(max(gl_FragColor.r, col.r - rando), 1.0) - rando * col.r;
    gl_FragColor.b = min(max(gl_FragColor.g, col.r * 1.1 - rando), 1.0);
//     gl_FragColor.rgb += col2 * 0.75;
//     gl_FragColor.rgb += colb * 0.85;
    gl_FragColor.r *= 0.05;
    gl_FragColor.g *= 0.2;
    gl_FragColor.b *= 4.0;
    gl_FragColor.a *= alpha;
    // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
//     gl_FragColor.r *= 1.5;
//     gl_FragColor.b *= 2.2 - gl_FragColor.g * 0.75;
    // gl_FragColor.a = 0.5;
    gl_FragColor.rgb = gl_FragColor.brg * 4.96;
}
// endGLSL
`;
mistyProgram2.init();